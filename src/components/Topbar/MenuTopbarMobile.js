import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import Mail from "@mui/icons-material/Mail";
import SettingsIcon from "@mui/icons-material/Settings";
import { NavLink } from "react-router-dom";

const MenuTopbarMobile = ({ anchorEl, menuId, isOpen, closeHandler }) => {
  return (
    <Menu
      anchorEl={anchorEl}
      id={menuId}
      keepMounted
      open={isOpen}
      onClose={closeHandler}
    >
      <NavLink to="/profile" style={{ textDecoration: "none", color: "black" }}>
        <MenuItem onClick={closeHandler}>
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Perfil</ListItemText>
        </MenuItem>
      </NavLink>
      <MenuItem onClick={closeHandler}>
        <ListItemIcon>
          <Mail fontSize="small" />
        </ListItemIcon>
        <ListItemText>Mensajes</ListItemText>
      </MenuItem>
      <MenuItem onClick={closeHandler}>
        <ListItemIcon>
          <SettingsIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Configuración</ListItemText>
      </MenuItem>
      <Divider />
      <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>
        <MenuItem>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Cerrar sesión</ListItemText>
        </MenuItem>
      </NavLink>
    </Menu>
  );
};
export default MenuTopbarMobile;
