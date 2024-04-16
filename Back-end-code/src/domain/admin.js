 const express = require("express");
const app = express();
app.use(express.json());
const Admin = require("../models/admin");
const AdminService = require("../services/admin-service");
const uploadImage=require("../middleware/uploadImage")
const {
  createOneAdmin,
  deleteOneAdmin,
  retrieveOneAdmin,
  updateOneAdmin,
  retrieveManyAdmin,
} = AdminService;
const { generateToken, verifyToken } = require("../middleware/jwt.middleware");

const creatingAdmin = async (req, res) => {
  try {
    const { firstName, lastName, address, password, email, phoneNumber } =
      req.body; 
    const existingAdmin = await retrieveOneAdmin({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: "Admin already exists" });
    } else {
      const createAdmin = await createOneAdmin({
        firstName,
        lastName,
        address,
        password,
        email,
        phoneNumber,
      });
      const token = generateToken(createAdmin);
      const updateAdmin = await updateOneAdmin({
        _id: createAdmin._id,
        loginToken: token,
      });
      res
        .status(200)
        .json({ message: "Admin created successfully", data: createAdmin });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { creatingAdmin };

const adminDomain = { creatingAdmin };
module.exports = adminDomain;
