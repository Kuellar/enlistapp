import React, { Fragment } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FotoPerfil from "../images/FotoPerfil.png";
import { NavLink } from "react-router-dom";

const FriendMobile = ({ name, username }) => {
  return (
    <Fragment>
      <ListItem
        secondaryAction={
          <NavLink to="/friend">
            <IconButton edge="end" aria-label="more">
              <MoreHorizIcon />
            </IconButton>
          </NavLink>
        }
        divider={true}
      >
        <ListItemAvatar>
          <Avatar alt={username + "-photo"} src={FotoPerfil} />
        </ListItemAvatar>
        <ListItemText primary={name} secondary={username} />
      </ListItem>
    </Fragment>
  );
};
export default FriendMobile;
