import React, { Fragment } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import PersonIcon from "@mui/icons-material/Person";
import { NavLink } from "react-router-dom";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";

const MenuFriend = ({ anchorEl, menuId, isOpen, closeHandler, event }) => {
  return (
    <Menu
      anchorEl={anchorEl}
      id={menuId}
      keepMounted
      open={isOpen}
      onClose={closeHandler}
    >
      <NavLink to="/friend" style={{ textDecoration: "none", color: "black" }}>
        <MenuItem onClick={closeHandler}>
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Ver Perfil</ListItemText>
        </MenuItem>
      </NavLink>
      {!event && (
        <Fragment>
          <Divider />
          <MenuItem onClick={closeHandler}>
            <ListItemIcon>
              <PersonRemoveIcon fontSize="small" color="warning" />
            </ListItemIcon>
            <ListItemText>Eliminar</ListItemText>
          </MenuItem>
          <MenuItem onClick={closeHandler}>
            <ListItemIcon>
              <PersonOffIcon fontSize="small" color="warning" />
            </ListItemIcon>
            <ListItemText>Bloquear</ListItemText>
          </MenuItem>
        </Fragment>
      )}
    </Menu>
  );
};
export default MenuFriend;
