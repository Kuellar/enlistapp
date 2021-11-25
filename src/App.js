import "./App.css";
import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TopbarLandingPage from "./components/TopbarLandingPage";
import Footer from "./components/Footer";
import Logo from "./images/logoLanding.png";
import { TextLoop } from "react-text-loop-next";

export default function App() {
  return (
    <Box>
      <Footer>
        <TopbarLandingPage />
        <Container sx={{ textAlign: "center" }}>
          <Box
            sx={{
              width: { xs: "100%", sm: 400 },
              ml: "auto",
              mr: "auto",
              pt: { xs: 10, sm: 20 },
            }}
          >
            <img
              src={Logo}
              alt="Logo EnlistApp"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
          <Typography
            variant="body1"
            align="center"
            sx={{ fontSize: { xs: 20, sm: 30 } }}
          >
            Reunirse con los amigos nunca ha sido tan{" "}
            <TextLoop springConfig={{ stiffness: 180, damping: 12 }}>
              <span style={{ color: "#455a64" }}>fácil</span>
              <span style={{ color: "#455a64" }}>rápido</span>
              <span style={{ color: "#455a64" }}>seguro</span>
            </TextLoop>
          </Typography>
        </Container>
      </Footer>
    </Box>
  );
}
