const express = require("express");
const Product = require("../models/productModel");
const {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/productController");

const router = express.Router();

// create product
router.post("/", createProduct);

//fetch all product
router.get("/", getProducts);

//fetch a single product
router.get("/:id", getProduct);

//Update a product
router.put("/:id", updateProduct);

//Delete a product
router.delete("/:id", deleteProduct);

module.exports = router;
