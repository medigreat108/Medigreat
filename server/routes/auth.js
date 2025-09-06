const authController = require("../controllers/authController");
const express = require("express");
const router = express.Router();
const { verifyToken, isAdmin } = require("../middleware/authMiddleware");

// Sign up
router.post("/signup", authController.getSignUp);

// Login
router.post("/login", authController.getLogin);

// adding first time as a admin user require below orelse it will ask for token
router.post("/admin", authController.createAdmin);

// here it will verify with tokena and isAdmin role
router.post("/admin", verifyToken, isAdmin, authController.createAdmin);

module.exports = router;
