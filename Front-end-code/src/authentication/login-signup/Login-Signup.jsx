import { Box, Typography } from "@mui/joy";
import React, { useState } from "react";

import "./Login-Signup.css";
import CustomInput from "../../component/customElement/CustomInput";
import CustomButton from "../../component/customElement/CustomeButton";

export default function LoginSignup() {
  const [toggle, setToggle] = useState(false);
  const toggleStyle = () => {
    setToggle(!toggle);
  };

  const handleSignUp = () => {
    // Make API call for sign up
    axios
      .post("your_api_endpoint/signup", {
        // Pass data for sign up
        username: "exampleUsername",
        email: "example@example.com",
        password: "examplePassword",
        // Add more fields as needed
      })
      .then((response) => {
        console.log(response.data); // Handle success response
        // Update UI or perform actions after successful sign up
      })
      .catch((error) => {
        console.error(error); // Handle error response
        // Update UI or perform actions if sign up fails
      });
  };

  const handleSignIn = () => {
    // Make API call for sign in
    axios
      .post("your_api_endpoint/signin", {
        // Pass data for sign in
        username: "exampleUsername",
        password: "examplePassword",
        // Add more fields as needed
      })
      .then((response) => {
        console.log(response.data); // Handle success response
        // Update UI or perform actions after successful sign in
      })
      .catch((error) => {
        console.error(error); // Handle error response
        // Update UI or perform actions if sign in fails
      });
  };
  return (
    <Box className="parent">
      <Box
        className={toggle ? "boxingRight" : "boxingLeft"}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        <Typography
          className="welcome"
          sx={{
            fontSize: "60px",
            fontWeight: "700",
            color: "white",
            marginLeft: toggle ? "50px" : "0px",
          }}
        >
          {" "}
          {toggle ? "Join us now" : "Welcome"}
        </Typography>
      </Box>
      <Box className="signin">
        {" "}
        <Box
          className="container"
          sx={{ visibility: !toggle ? "hidden" : "visible" }}
        >
          <CustomInput type="text" name="email" placeholder="Username" />
          <CustomInput type="email" name="email" placeholder="Email" />
          <CustomInput type="password" name="email" placeholder="Password" />
          <CustomInput
            type="text"
            name="email"
            placeholder="Confirm password"
          />
          <CustomButton label="Sign Up" />
          <Typography>
            Already have an account?{" "}
            <span style={{ fontWeight: "700" }} onClick={toggleStyle}>
              {" "}
              Sign in here
            </span>
          </Typography>
        </Box>
      </Box>
      <Box
        className="signup"
        sx={{ visibility: toggle ? "hidden" : "visible" }}
      >
        {" "}
        <Box className="container2">
          <CustomInput
            type="text"
            name="email"
            placeholder="Username"
            size="lg"
          />
          <CustomInput
            type="password"
            name="email"
            placeholder="Password"
            size="lg"
          />

          <CustomButton
            label="Sign In"
            onClick={() => {
              alert("Logged in succesfully");
            }}
          />
          <Box>
            <Typography sx={{ fontWeight: "700", textAlign: "center" }}>
              Forgot password?
            </Typography>
            <Typography>
              Already have an account?{" "}
              <span onClick={toggleStyle} style={{ fontWeight: "700" }}>
                Sign up here
              </span>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
