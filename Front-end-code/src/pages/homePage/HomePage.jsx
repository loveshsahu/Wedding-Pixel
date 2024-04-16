import { Box, Typography } from "@mui/joy";
import React from "react";
import "./HomePage.css";
import Header from "../header/Header.jsx";
import About from "../about/About.jsx";
import palace from "../../assets/images/palace.jpg";
import cloud from "../../assets/images/cloud.webp";

export default function HomePage() {
  return (
    <Box
      className="Homeparent"
      sx={{ background: `url(${cloud})`, backgroundSize: "cover" }}
    >
      <Header />
      <Box
        id="home"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box className="leftBox">
          <Typography
            sx={{ fontSize: "80px", fontWeight: "bold", color: "white" }}
          >
            Hello
          </Typography>
          <Typography
            sx={{
              fontSize: "25px",
              fontWeight: "bold",
              color: "#FC6736",
            }}
          >
            WELCOME TO WEDDING-PIXEL
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#0C2D57",
              fontWeight: "bold",
              marginTop: "10px",
            }}
          >
            Wedding Pixels is a website where couples can share their wedding
            photos. Here, they have the opportunity to organize their special
            moments and share them privately with their friends and family.
          </Typography>
        </Box>
        <Box className="rightBox">
          {" "}
          <img
            style={{ width: "800px", marginRight: "50px", marginTop: "50px" }}
            src={palace}
          />
        </Box>
      </Box>
      <About />
    </Box>
  );
}
