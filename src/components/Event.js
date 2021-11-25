import React, { Fragment } from "react";
import { useTheme } from "@mui/material/styles";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";

const Event = ({ primary, secondary, icon, from, to }) => {
  const theme = useTheme();
  return (
    <NavLink to="/event" style={{ textDecoration: "none", color: "black" }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>{icon}</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={primary}
          secondary={secondary}
          secondaryTypographyProps={{
            color: theme.palette.primary.dark,
          }}
        />
        <ListItemText
          edge="end"
          primary={from + " - " + to}
          sx={{ textAlign: "right", pr: 2 }}
        />
      </ListItem>
      <Divider />
    </NavLink>
  );
};

export default Event;
