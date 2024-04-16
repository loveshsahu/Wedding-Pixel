const express = require("express"); // Import 'Router' from 'express'
const Userdomain = require("../domain/user.js");

const userRoute = express.Router(), // Initialize a new router instance

 { createUser,getUsers,deleteuser,updateUser,uploadImageRoute ,login} = Userdomain;

userRoute.post("/createUser", createUser);
userRoute.get("/userList", getUsers);
userRoute.delete("/deleteUser", deleteuser);
userRoute.put("/updateUser", updateUser);
userRoute.post("/uploadImage", uploadImageRoute);
userRoute.post("/loginUser", login);

module.exports = userRoute; // Export the router instance
