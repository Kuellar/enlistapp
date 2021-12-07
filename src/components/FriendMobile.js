import React, { Fragment, useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FotoPerfil from "../images/FotoPerfil.png";
import MenuFriend from "./MenuFriend";

const FriendMobile = ({ name, username, event }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = username + "menu-mobile";
  return (
    <Fragment>
      <ListItem
        secondaryAction={
          <IconButton
            edge="end"
            aria-label={username}
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleMenuOpen}
          >
            <MoreHorizIcon />
          </IconButton>
        }
        divider={true}
      >
        <ListItemAvatar>
          <Avatar alt={username + "-photo"} src={FotoPerfil} />
        </ListItemAvatar>
        <ListItemText primary={name} secondary={username} />
      </ListItem>
      <MenuFriend
        anchorEl={anchorEl}
        menuId={menuId}
        isOpen={isMenuOpen}
        closeHandler={handleMenuClose}
        event={event}
      />
    </Fragment>
  );
};
export default FriendMobile;
