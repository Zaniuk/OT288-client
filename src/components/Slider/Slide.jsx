import { Box, Typography } from "@mui/material";
import React from "react";
import "./Slider.css";
export default function Slide({ imageUrl, text, index, next }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box className="img-wrapper">
        <img
          className="img-slide"
          src={imageUrl}
          alt={`Novedad ${index + 1}`}
        />
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography component="h2" variant="subtitle1" textAlign="center">
          {text}
        </Typography>
      </Box>
    </Box>
  );
}
