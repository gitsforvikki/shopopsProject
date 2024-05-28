const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Product = require("../models/Product");
const authenticate = require("../middleware/authenticate");

//upload product

router.post(
  "/upload",
  authenticate,
  [
    body("name").notEmpty().withMessage("Name is Required"),
    body("brand").notEmpty().withMessage("Brand is Required"),
    body("price").notEmpty().withMessage("Price is Required"),
    body("qty").notEmpty().withMessage("Qty is Required"),
    body("image").notEmpty().withMessage("Image is Required"),
    body("category").notEmpty().withMessage("Category is Required"),
    body("description").notEmpty().withMessage("Description is Required"),
    body("usage").notEmpty().withMessage("Usage is Required"),
  ],
  async (request, response) => {
    let errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(401).json({ errors: errors.array() });
    }
    try {
      console.log("enter");
      let { name, brand, price, qty, image, category, description, usage } =
        request.body;
      let product = new Product({
        name,
        brand,
        price,
        qty,
        image,
        category,
        description,
        usage,
      });
      product = await product.save();
      response.status(200).json({
        msg: " Product added successfully..",
        product: product,
      });
    } catch (error) {
      console.log(error);
      response.status(500).json({ errors: [{ msg: error.message }] });
    }
  }
);

//get mens product
router.get("/mens", async (request, response) => {
  try {
    let products = await Product.find({ category: "MEN" });
    response.status(200).json({
      products: products,
    });
  } catch (error) {
    console.log("error");
    response.status(500).json({ errors: [{ msg: error.message }] });
  }
});

//get womens product
router.get("/womens", async (request, response) => {
  try {
    let products = await Product.find({ category: "WOMEN" });
    response.status(200).json({
      products: products,
    });
  } catch (error) {
    console.log("error");
    response.status(500).json({ errors: [{ msg: error.message }] });
  }
});

//get kids product
router.get("/kids", async (request, response) => {
  try {
    let products = await Product.find({ category: "KIDS" });
    response.status(200).json({
      products: products,
    });
  } catch (error) {
    console.log("error");
    response.status(500).json({ errors: [{ msg: error.message }] });
  }
});

//get a single products

router.get("/:productId", async (request, response) => {
  try {
    let productId = request.params.productId;
    let product = await Product.findById(productId);
    response.status(200).json({
      product: product,
    });
  } catch (error) {
    console.log("error");
    response.status(500).json({ errors: [{ msg: error.message }] });
  }
});

module.exports = router;
