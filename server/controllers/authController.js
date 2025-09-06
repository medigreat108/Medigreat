const User = require("../models/User");
const jwt = require("jsonwebtoken");

// Signup controller
const getSignUp = async (req, res) => {
  try {
    const { username, password } = req.body;
    // check if user is already exits or not
    const existingUser = await User.findOne({ username });
    if (existingUser)
      return res.status(400).json({ message: "user already exist" });

    const newUser = new User({ username, password }); //role defaults to 'customer'
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login controller
const getLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json("Invalid credentials");

    //Generate JWT token
    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRETE_KEY, // used this secrete key from env file
      { expiresIn: "1h" }
    );

    res.json({ token, user: { username: user.username, role: user.role } });
  } catch (error) {
    res.status(500).json({ message: `server error:${error}` });
  }
};

const createAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;
    //only allow if requester is admin (user middleware)
    const existingUser = await User.findOne({ username });
    if (existingUser)
      return res.status(400).json({ message: "User is already exists" });
    const user = new User({ username, password, role: "admin" });
    await user.save();
    res.status(201).json({ message: "Admin user created successfully" });
  } catch (error) {
    res.status(500).json({ message: `server error ${error}` });
  }
};

module.exports = {
  getSignUp,
  getLogin,
  createAdmin,
};
