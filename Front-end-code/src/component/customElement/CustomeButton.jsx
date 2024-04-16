import React from "react";
import { Box, FormControl, FormLabel, Input, Button } from "@mui/joy";

export default function CustomButton({ label, ...props }) {
  return (
    <FormControl sx={{ width: "100%" }}>
      <Button sx={{ backgroundColor: "#40A2E3" }} {...props}>
        {label}
      </Button>
    </FormControl>
  );
}
