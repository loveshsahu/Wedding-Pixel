import React from "react";
import { Box, Typography } from "@mui/joy";
import "./About.css";
import cloud from "../../assets/images/cloud.webp";

export default function user() {
  return (
    <Box
      id="about"
      sx={{
        width: "100%",
        height: "100vh",
        border: "none",
        objectFit: "cover",
        background: `url(${cloud})`,
        backgroundSize: "cover",
      }}
    >
      <Typography
        sx={{
          fontSize: "40px",
          fontWeight: "bold",
          color: "#FC6736",
          // marginLeft: "100px",
          // marginTop: "-100px",
        }}
      >
        ABOUT US
      </Typography>
      <Typography
        sx={{
          fontSize: "20px",
          fontWeight: "bold",
          color: "#0C2D57",
          padding: "50px",
        }}
      >
        Wedding Pixels is a unique online platform designed for couples to share
        their cherished wedding memories with friends and family. Here, users
        have the exclusive opportunity to curate and organize their special
        moments in one convenient space. <br /> <br />
        Upon selecting a specific wedding event, users can upload their own
        photos. Through advanced matching algorithms, if a user's uploaded photo
        matches with the event, they gain access to the entire collection of
        photos associated with that wedding. This seamless process ensures that
        users can easily retrieve their own photos and relive the magic of the
        event.
        <br />
        <br /> With Wedding Pixels, users can download their matched photos,
        allowing them to preserve and cherish these precious memories for years
        to come. It's more than just a platform; it's a digital sanctuary for
        preserving and sharing the joy of weddings with loved ones.
      </Typography>
    </Box>
  );
}
