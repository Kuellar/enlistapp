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
// import MenuTopbar from "./MenuTopbar";
import MenuTopbarMobile from "./MenuTopbarMobile";
import Menu from "@mui/material/Menu";
import Badge from "@mui/material/Badge";

const Topbar = ({ menuHandler }) => {
  // const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  // const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // const handleProfileMenuOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    // setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const [anchorElNotification, setAnchorElNotification] = useState(null);
  const openNotification = Boolean(anchorElNotification);
  const handleClickNotification = (event) => {
    setAnchorElNotification(event.currentTarget);
  };
  const handleCloseNotification = () => {
    setAnchorElNotification(null);
  };

  const [anchorElMail, setAnchorElMail] = useState(null);
  const openMail = Boolean(anchorElMail);
  const handleClickMail = (event) => {
    setAnchorElMail(event.currentTarget);
  };
  const handleCloseMail = () => {
    setAnchorElMail(null);
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
            onClick={handleClickMail}
          >
            <Badge badgeContent={"0"} color="secondary">
              <MailIcon fontSize="medium" />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="notifications"
            sx={{ color: "white", ml: 1 }}
            onClick={handleClickNotification}
          >
            <Badge badgeContent={"0"} color="secondary">
              <NotificationsIcon fontSize="medium" />
            </Badge>
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
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            edge="end"
            aria-label="notifications"
            sx={{ color: "white", ml: 1 }}
            onClick={handleClickNotification}
          >
            <Badge badgeContent={"0"} color="secondary">
              <NotificationsIcon fontSize="medium" />
            </Badge>
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
      {/* <MenuTopbar
        anchorEl={anchorEl}
        menuId={menuId}
        isOpen={isMenuOpen}
        closeHandler={handleMenuClose}
      /> */}

      <MenuTopbarMobile
        anchorEl={mobileMoreAnchorEl}
        menuId={menuId}
        isOpen={isMobileMenuOpen}
        closeHandler={handleMenuClose}
      />

      <Menu
        id="basic-menu"
        anchorEl={anchorElNotification}
        open={openNotification}
        onClose={handleCloseNotification}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Box sx={{ m: 1 }}>No tienes notificaciones</Box>
      </Menu>

      <Menu
        id="basic-menu"
        anchorEl={anchorElMail}
        open={openMail}
        onClose={handleCloseMail}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Box sx={{ m: 1 }}>No tienes mensajes nuevos</Box>
      </Menu>
    </AppBar>
  );
};
export default Topbar;
