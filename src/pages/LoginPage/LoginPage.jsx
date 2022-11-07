import { Box, Typography } from "@mui/material";
import React from "react";
import Form from "../../components/Form/Form";

const LogingPage = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1B70BB",
      }}
    >
      <Box sx={{ bgcolor: "background.default", padding: "25px" }}>
        <Typography
          variant="h1"
          textAlign="center"
          sx={{ fontSize: "24px", fontWeight: "bold", color: "#1B70BB" }}
        >
          Kuhne-naquel
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LogingPage;
