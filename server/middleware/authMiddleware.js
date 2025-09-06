const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
  }
  const token = authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ message: "No token provided" });
  jwt.verify(token, process.env.JWT_SECRETE_KEY, (error, decode) => {
    if (error)
      return res
        .status(403)
        .json({ message: "Failed to authentication token" });
    req.user = decode; // decoded{userId, role}
    next();
  });
};

const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Admin Access Required" });
  }
  next();
};

module.exports = {
  verifyToken,
  isAdmin,
};
