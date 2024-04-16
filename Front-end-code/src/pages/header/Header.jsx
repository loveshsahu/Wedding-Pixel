// Header.js
import React from "react";
import { Box, Typography, Switch, Tooltip } from "@mui/joy";
import "./Header.css";

export default function Header() {
  const handleScrollToAbout = () => {
    const scrollToAbout = document.getElementById("about");
    scrollToAbout.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToMyHome = () => {
    const scrollToAbout = document.getElementById("home");

    scrollToAbout.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToMyUser = () => {
    window.open("http://localhost:5173/", "_blank");
  };
  return (
    <Box
      sx={{
        position: "fixed",
        top: "0px",
        zIndex: "10000",
        cursor: "pointer",
        display: "flex",
        gap: "0px",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#40A2E3",
        padding: "15px 15px 15px 15px",
      }}
    >
      <Typography
        sx={{ color: "white", fontWeight: "500", marginLeft: "10px" }}
        level="h2"
      >
        WEDDING-PIXEL
      </Typography>
      <div
        style={{
          display: "flex",
          gap: "30px",
          justifyContent: "space-between",
          alignItems: "center",
          marginRight: "100px",
        }}
      >
        <a className="navlinks" onClick={handleScrollToMyHome}>
          HOME{" "}
        </a>
        <a className="navlinks" onClick={handleScrollToAbout}>
          ABOUT{" "}
        </a>
        <a className="navlinks" onClick={handleScrollToMyUser}>
          USER
        </a>
        <a className="navlinks">CONTACT</a>
      </div>
    </Box>
  );
}
