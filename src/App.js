import "./App.css";
import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TopbarLandingPage from "./components/TopbarLandingPage";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Box>
      <Footer>
        <TopbarLandingPage />
        <Container>
          <Typography>Content...</Typography>
        </Container>
      </Footer>
    </Box>
  );
}
