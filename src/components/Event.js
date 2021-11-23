import React from "react";
import { useTheme } from "@mui/material/styles";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";

const Event = ({ primary, secondary, icon, from, to }) => {
  const theme = useTheme();
  return (
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
  );
};

export default Event;
