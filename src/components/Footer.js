import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Copyright from "./Copyright";

const Footer = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      {props.children}
      <Box
        component="footer"
        sx={{
          height: "64px",
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          {/* <Typography variant="body1">
            My sticky footer can be found here.
          </Typography> */}
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;