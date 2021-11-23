import React, { Fragment } from "react";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FotoPerfil from "../images/FotoPerfil.png";

const FriendMobile = ({ name, username }) => {
  return (
    <Fragment>
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="more">
            <MoreHorizIcon />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar alt={username + "-photo"} src={FotoPerfil} />
        </ListItemAvatar>
        <ListItemText primary={name} secondary={username} />
      </ListItem>
      <Divider />
    </Fragment>
  );
};
export default FriendMobile;
