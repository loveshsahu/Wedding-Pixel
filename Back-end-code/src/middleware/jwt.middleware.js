const jwt = require("jsonwebtoken");
require("dotenv").config();

const loginTokenSecret = process.env.SECRET_KEY;

const verifyToken = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      res.status(401).json({ message: "No auth token" });
    } else {
      const token = req.headers.authorization.split("Bearer");
      req.user = jwtVerify(token[1]).email;
      next();
    }
  } catch (error) {
    console.log(error, "error--");
    res.status(500).json({ message: "Something went wrong" });  
  }
};

function generateToken(user) {
  if (!loginTokenSecret) {
    throw new Error("loginTokenSecret is not defined or is null");
  }

  return jwt.sign(
    {
      userId: user._id,
      email: user.email,
      // Add any additional claims or user information as needed
    },
    loginTokenSecret,
    { expiresIn: "1h" }
  );
}

jwtMiddleware = { generateToken, verifyToken };
module.exports = jwtMiddleware;
