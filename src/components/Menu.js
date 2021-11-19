import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink } from "react-router-dom";
import Divider from "@mui/material/Divider";

const menuItems = [
  {
    name: "Home",
    icon: <HomeIcon />,
    link: "/home",
  },
  {
    name: "Friends",
    icon: <GroupIcon />,
    link: "/friends",
  },
  {
    name: "Profile",
    icon: <PersonIcon />,
    link: "/profile",
  },
];

const Menu = ({ setOpen }) => {
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };
  return (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((item) => (
          <NavLink
            to={item.link}
            key={item.name}
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          </NavLink>
        ))}
      </List>
      <Divider />
      <List>
        <NavLink
          to="/"
          style={{ textDecoration: "none", color: "black" }}
          key="logout"
        >
          <ListItem button>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </NavLink>
      </List>
    </Box>
  );
};
export default Menu;
