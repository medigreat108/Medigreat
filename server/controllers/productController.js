const Product = require("../models/Product");

//Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Get single product by ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Create new product
const createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const saveProduct = newProduct.save();
    res.status(201).json(saveProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// add multiple products
const insertManyProducts = async (req, res) => {
  try {
    const products = req.body;
    const result = await Product.insertMany(products);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//update product
const updateProduct = async (req, res) => {
  try {
    const updateProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updateProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete all the products
const deleteAllProducts = async (req, res) => {
  try {
    await Product.deleteMany({});
    res.json({ message: "All products are deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Delete product
const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "product deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  insertManyProducts,
  updateProduct,
  deleteAllProducts,
  deleteProduct,
};
