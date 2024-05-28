const express = require("express");
const router = express.Router();
const { validationResult, body } = require("express-validator");
const User = require("../models/User");
const bcryptjs = require("bcrypt");
const gravatar = require("gravatar");
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate");

//registration
router.post(
  "/register",
  [
    body("name").notEmpty().withMessage("name is required"),
    body("email").notEmpty().withMessage("Email required"),
    body("password").notEmpty().withMessage("Password required"),
  ],
  async (request, response) => {
    //check error, if any
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(401).json({ errors: errors.array() });
    }

    try {
      //user  data comming from request
      let { name, email, password } = request.body;
      //first check user already exist or not
      let user = await User.findOne({ email: email });
      if (user) {
        return response
          .status(401)
          .json({ errors: [{ msg: "user already exist" }] });
      }

      //if user exist then bcrypt password
      let salt = await bcryptjs.genSalt(10);
      password = await bcryptjs.hash(password, salt);

      //latest way of hashing the password
      // let saltRounds = 10;
      // password =  bcryptjs.genSalt(saltRounds, function (err, saltRounds) {
      //   bcryptjs.hash(password, saltRounds, function (err, hash) {
      //     // Store hash in your password DB.
      //     if (err) throw err;
      //     return hash;
      //   });
      // });

      //gravatar image
      let avatar = gravatar.url(email, {
        s: "300",
        r: "pg",
        d: "mm",
      });

      //address
      let address = {
        flat: " ",
        landmark: " ",
        street: " ",
        city: " ",
        state: " ",
        country: " ",
        pin: " ",
        mobile: " ",
      };

      //create new user instance
      user = new User({ name, email, password, avatar, address });
      //save to DB
      user = await user.save();
      response.status(200).json({
        message: "Registration successfull..",
      });
    } catch (error) {
      console.log(error);
      return response.status(404).json({
        errors: [{ msg: error.message }],
      });
    }
  }
);

//User Login
router.post(
  "/login",
  [
    body("email").notEmpty().withMessage("Email required"),
    body("password").notEmpty().withMessage("Password required"),
  ],
  async (request, response) => {
    let errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status.json({ errors: errors.array() });
    }
    try {
      //user data from request body
      let { email, password } = request.body;
      //check user exist or not
      let user = await User.findOne({ email: email });
      if (!user) {
        return response
          .status(401)
          .json({ errors: [{ msg: "User does not exist!" }] });
      }

      //if user exist, check the password
      let isMatch = await bcryptjs.compare(password, user.password);
      if (!isMatch) {
        return response
          .status(401)
          .json({ errors: [{ msg: "Invalid credentials" }] });
      }

      let payload = {
        user: {
          id: user.id,
          name: user.name,
        },
      };

      //generate token and loing
      jwt.sign(
        payload,
        process.env.JWT_SECRET_KEY,
        { expiresIn: 300000 },
        (error, token) => {
          if (error) throw error;
          return response.status(200).json({
            msg: "Login Success",
            token: token,
          });
        }
      );
    } catch (error) {
      console.log(error);
      return response.status(500).json({ errors: [{ msg: error.message }] });
    }
  }
);

//get user info

router.get("/", authenticate, async (request, response) => {
  try {
    let user = await User.findById(request.user.id);
    return response.status(200).json({ user: user });
  } catch (error) {
    console.log(error);
    return response.status(500).json({ errors: [{ msg: error.message }] });
  }
});

//upate Address
router.post(
  "/update-address",
  authenticate,
  [
    body("flat").notEmpty().withMessage("Flat is Required"),
    body("street").notEmpty().withMessage("Street is Required"),
    body("landmark").notEmpty().withMessage("Landmark is Required"),
    body("city").notEmpty().withMessage("City is Required"),
    body("state").notEmpty().withMessage("State is Required"),
    body("country").notEmpty().withMessage("Country is Required"),
    body("pin").notEmpty().withMessage("Pin is Required"),
    body("mobile").notEmpty().withMessage("Mobile is Required"),
  ],
  async (request, response) => {
    //check the request body
    let errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(401).json({ errors: errors.array() });
    }
    try {
      //get address info from the request body
      let { flat, street, landmark, city, state, country, pin, mobile } =
        request.body;
      let address = {
        flat: flat,
        street: street,
        landmark: landmark,
        city: city,
        state: state,
        country: country,
        pin: pin,
        mobile: mobile,
      };

      let user = await User.findById(request.user.id);
      user.address = address;
      user = await user.save();

      return response.status(200).json({
        msg: "Address upate success",
        user: user,
      });
    } catch (error) {
      console.log(error);
      return response.status(500).json({ errors: [{ msg: error.message }] });
    }
  }
);

module.exports = router;
