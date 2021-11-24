import React from "react";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FotoPerfil from "../images/FotoPerfil.png";
import { NavLink } from "react-router-dom";

const Friend = ({ name, username }) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        backgroundColor: theme.palette.grey[100],
        m: { sm: 1, md: 2 },
      }}
    >
      <CardMedia component="img" alt={username + "-photo"} image={FotoPerfil} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {username}
        </Typography>
      </CardContent>
      <CardActions sx={{ float: "right", mt: -5 }}>
        <NavLink to="/friend">
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </NavLink>
      </CardActions>
    </Card>
  );
};
export default Friend;
