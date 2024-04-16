const express = require("express");
const app = express();
const User = require("../models/user");
app.use(express.json());
const fs = require("fs");

const { generateToken, verifyToken } = require("../middleware/jwt.middleware");
const userService = require("../services/user-service");
const {
  createOneUser,
  deleteOneUser,
  retrieveOneUser,
  updateOneUser,
  retrieveManyUser,
} = userService;
const uploadImage = require("../middleware/uploadImage");

// const createUser = [
//   async (req, res) => {
//     try {
//       const { firstName, lastName, address, phoneNumber, email, password } =
//         req.body;
//       const existingUser = await retrieveOneUser({ email, password });

//       if (existingUser) {
//         return res.status(400).json({ message: "User already exists" });
//       }
//       ``;

//       if (req.body) {
//         const user = await createOneUser(req.body);

//         const loginToken = generateToken(user);

//         const updatedUser = await updateOneUser(
//           { _id: user._id },
//           { loginToken: loginToken }
//         );
//         return res.status(200).json({
//           message: "User created successfully",
//           user: user,
//           loginToken: loginToken,
//         });
//       } else {
//         return res.status(400).json({ message: "Invalid request body" });
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       return res.status(500).json({ message: "Internal Server Error" });
//     }
//   },
// ];

const createUser = [
  uploadImage.upload.single("image"), // Multer middleware for handling single file upload
  async (req, res) => {
    try {
      const {
        firstName,
        lastName,
        address,
        phoneNumber,
        email,
        password,
        images,
      } = req.body;

      // Check if the user already exists
      const existingUser = await retrieveOneUser({ email, password });

      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }
      let imageName = null;
      // Check if an image is uploaded
      if (req.file) {
        // If an image is uploaded, extract the image name
        imageName = req.file.originalname;
      }

      // Create a new user
      const userData = {
        firstName,
        lastName,
        address,
        phoneNumber,
        email,
        password,
        images: imageName,
      };
      const user = await createOneUser(userData);

      const loginToken = generateToken(user);

      const updatedUser = await updateOneUser(
        { _id: user._id },
        { loginToken }
      );

      return res.status(200).json({
        message: "User created successfully",
        user: user,
        loginToken,
      });
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },
];

const getUsers = [
  async (req, res) => {
    try {
      const userList = await retrieveManyUser();
      return res.status(200).json({ message: "User list ", data: userList });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  },
];

const deleteuser = [
  async (req, res) => {
    try {
      const userId = req.body;
      if (userId) {
        const deleteuser = await deleteOneUser({ userId });
        res.status(200).json({ message: "User deleted", data: deleteuser });
      } else {
        return res.status(404).json({ message: "User id not found" });
      }
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  },
];

const updateUser = [
  async (req, res) => {
    try {
      const { userId, firstName, lastName, address, phoneNumber } = req.body;
      if (userId) {
        const updateUser = await updateOneUser(
          { _id: userId },
          { firstName, lastName, address, phoneNumber }
        );
        res.status(200).json({ message: "User updated", data: updateUser });
      } else {
        return res.status(404).json({ message: "User id not found" });
      }
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  },
];

const uploadImageRoute = [
  uploadImage.upload.single("image"), // multer middleware for handling single file upload
  async (req, res) => {
    try {
      const image = req.file;
      const { userId } = req.body;

      // Check if image is provided
      if (!image) {
        return res.status(400).json({ message: "No file uploaded" });
      }

      // Find the user by userId in the database
      const user = await retrieveOneUser({ _id: userId });

      // Check if user exists
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Update the user record with the image details
      user.images = {
        data: fs.readFileSync(image.path), // Read the image file
        contentType: image.mimetype,
      };

      // Save the updated user record
      const updatedUser = await updateOneUser({ _id: userId }, { user });

      res.status(200).json({
        message: "File uploaded successfully and user updated",
        filename: req.file.filename,
        user: updatedUser,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
];

const login = [
  async (req, res) => {
    try {
      const { email, password } = req.body;

      // Retrieve user from the database based on email and password
      const user = await retrieveOneUser({ email, password });

      // If user exists, return success response with user data and login token
      if (user) {
        return res.status(200).json({
          message: "User logged in successfully",
          user: user,
          // Assuming the login token is already stored in the user object
        });
      } else {
        // Return error response for invalid credentials
        return res.status(400).json({ message: "Invalid credentials" });
      }
    } catch (error) {
      // Handle internal server error
      console.error("Error:", error);y
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },
];

const userDomain = {
  createUser,
  getUsers,
  deleteuser,
  updateUser,
  uploadImageRoute,
  login,
};

module.exports = userDomain;
