import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Box } from "@mui/joy";
import Login from "./authentication/login-signup/Login-Signup";

import HomePage from "./pages/homePage/HomePage"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<HomePage />} />
        {/* <Route path="/sendOtp" element={<SendOtp />} />
        <Route path="/loginPhone" element={<LoginOtp />} />
        <Route path="/landing-page" element={<LandingPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
