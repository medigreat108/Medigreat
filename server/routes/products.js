const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const { verifyToken, isAdmin } = require("../middleware/authMiddleware");

//Get all products
router.get("/", productController.getProducts);

//Get single product by ID
router.get("/:id", productController.getProductById);

// create new product
router.post("/", verifyToken, isAdmin, productController.createProduct);

// Add multiple products
router.post(
  "/bulk",
  verifyToken,
  isAdmin,
  productController.insertManyProducts
);

// update product
router.put("/:id", verifyToken, isAdmin, productController.updateProduct);

// Delete all products
router.delete(
  "/deleteAll",
  verifyToken,
  isAdmin,
  productController.deleteAllProducts
);

//Delete product
router.delete("/:id", verifyToken, isAdmin, productController.deleteProduct);

module.exports = router;
