import React, { useState } from "react";
// import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
// import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";
import MenuTopbar from "./MenuTopbar";
import MenuTopbarMobile from "./MenuTopbarMobile";

const Topbar = ({ menuHandler }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "account-menu";
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={menuHandler(true)}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <IconButton
            size="large"
            edge="end"
            aria-label="mails"
            sx={{ color: "white" }}
          >
            <MailIcon fontSize="medium" />
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="notifications"
            sx={{ color: "white", ml: 1 }}
          >
            <NotificationsIcon fontSize="medium" />
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            sx={{ color: "white", ml: 1 }}
          >
            <AccountCircleIcon fontSize="large" />
          </IconButton>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            edge="end"
            aria-label="notifications"
            sx={{ color: "white", ml: 1 }}
          >
            <NotificationsIcon fontSize="medium" />
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            sx={{ color: "white", ml: 1 }}
          >
            <AccountCircleIcon fontSize="large" />
          </IconButton>
        </Box>
      </Toolbar>
      <MenuTopbar
        anchorEl={anchorEl}
        menuId={menuId}
        isOpen={isMenuOpen}
        closeHandler={handleMenuClose}
      />

      <MenuTopbarMobile
        anchorEl={mobileMoreAnchorEl}
        menuId={menuId}
        isOpen={isMobileMenuOpen}
        closeHandler={handleMenuClose}
      />
    </AppBar>
  );
};
export default Topbar;
