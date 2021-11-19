import React from "react";
// import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";

const Topbar = ({ menuHandler }) => {
  //   const theme = useTheme();
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
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        ></Typography>
        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          // aria-controls={menuId}
          // aria-haspopup="true"
          // onClick={handleProfileMenuOpen}
          sx={{ color: "white" }}
        >
          <MailIcon fontSize="medium" />
        </IconButton>
        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          // aria-controls={menuId}
          // aria-haspopup="true"
          // onClick={handleProfileMenuOpen}
          sx={{ color: "white", ml: 1 }}
        >
          <NotificationsIcon fontSize="medium" />
        </IconButton>
        <Link to="/Profile">
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            // aria-controls={menuId}
            // aria-haspopup="true"
            // onClick={handleProfileMenuOpen}
            sx={{ color: "white", ml: 1 }}
          >
            <AccountCircleIcon fontSize="large" />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
};
export default Topbar;
