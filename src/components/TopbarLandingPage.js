import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Dialog from "@mui/material/Dialog";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import Signup from "./Signup";
import Login from "./Login";

const TopbarLandingPage = () => {
  const theme = useTheme();
  const [openRegister, setOpenRegister] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  const handleClickOpenRegister = () => {
    setOpenRegister(true);
  };

  const handleClickOpenLogin = () => {
    setOpenLogin(true);
  };

  const handleClose = () => {
    setOpenRegister(false);
    setOpenLogin(false);
  };

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
          onClick={handleClickOpenLogin}
        >
          Iniciar sesión
        </Button>
        <Button
          color="inherit"
          variant="contained"
          sx={{
            textTransform: "none",
            textDecoration: "none",
            mr: 3,
            color: theme.palette.text.primary,
          }}
          onClick={handleClickOpenRegister}
        >
          Regístrate
        </Button>
      </Toolbar>
      <Dialog onClose={handleClose} open={openRegister}>
        <Box sx={{ my: 3 }}>
          <Signup />
        </Box>
      </Dialog>
      <Dialog onClose={handleClose} open={openLogin}>
        <Box sx={{ my: 3 }}>
          <Login />
        </Box>
      </Dialog>
    </AppBar>
  );
};
export default TopbarLandingPage;
