import React from "react";
import { Box, FormControl, FormLabel, Input } from "@mui/joy";

export default function CustomPassword({ label, ...props }) {
  return (
    <FormControl sx={{ width: "100%" }}>
      <FormLabel>{label}</FormLabel>
      <Box>
        <Input {...props} />
      </Box>
    </FormControl>
  );
}
