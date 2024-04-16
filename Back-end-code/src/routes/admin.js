const express = require("express"); // Import 'Router' from 'express'
const Admindomain = require("../domain/admin.js");

const adminRoute = express.Router(), // Initialize a new router instance

 { creatingAdmin } = Admindomain;

 adminRoute.post("/createAdmin", creatingAdmin);


module.exports = adminRoute; // Export the router instance
