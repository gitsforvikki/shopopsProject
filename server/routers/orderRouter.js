const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authenticate");
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const Order = require("../models/Order");

//place orders
router.post(
  "/",
  authenticate,
  [
    body("items").notEmpty().withMessage("Items required"),
    body("tax").notEmpty().withMessage("Tax requied"),
    body("total").notEmpty().withMessage("Total required"),
  ],
  async (request, response) => {
    let errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(401).json({ erros: errors.array() });
    }
    try {
      let user = await User.findById(request.user.id);
      let { name, email } = user;
      let { mobile } = user.address;
      let { total, tax, items } = request.body;
      let order = new Order({ name, email, mobile, total, tax, items });
      order = await order.save();
      response.status(200).json({
        msg: "Order Placed successfully",
        order: order,
      });
    } catch (error) {
      console.log(error);
      response.status(500).json({ errors: [{ msg: error.message }] });
    }
  }
);

//get all order
router.get("/all", authenticate, async (request, response) => {
  try {
    let user = await User.findById(request.user.id);
    let orders = await Order.find({ email: user.email });
    response.status(200).json({
      orders: orders,
    });
  } catch (error) {
    console.log(error);
    response.status(500).json({ errors: [{ msg: error.message }] });
  }
});

module.exports = router;
