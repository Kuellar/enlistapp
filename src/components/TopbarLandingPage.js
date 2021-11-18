import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

const TopbarLandingPage = () => {
  const theme = useTheme();
  return (
    <AppBar
      position="static"
      sx={{ boxShadow: "none", pt: 3, pb: 3 }}
      color="transparent"
      // variant="dense"
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, ml: 3 }}>
          <Link to="/">
            <img src={Logo} alt="Logo" width="50" height="50" />
          </Link>
        </Box>
        <Link to="/login">
          <Button
            color="inherit"
            variant="text"
            disableElevation={true}
            sx={{
              textTransform: "none",
              textDecoration: "none",
              mr: 1,
              color: theme.palette.text.secondary,
            }}
          >
            Log in
          </Button>
        </Link>
        <Link to="/signup">
          <Button
            color="inherit"
            variant="contained"
            sx={{
              textTransform: "none",
              textDecoration: "none",
              mr: 3,
              color: theme.palette.text.primary,
            }}
          >
            Sign up
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};
export default TopbarLandingPage;
