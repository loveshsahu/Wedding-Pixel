const express = require("express");
const app = express();
const port = 3000;
const dbConnection = require("./database/db");
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
const userRoute = require("./routes/user");
const adminRoute = require("./routes/admin");

app.use(express.json());

dbConnection
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.use("/user", userRoute);
app.use("/admin", adminRoute);

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
