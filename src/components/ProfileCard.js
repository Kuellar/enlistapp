import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const ProfileCard = ({ photo, username }) => {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 300,
        margin: "auto",
      }}
    >
      <CardMedia
        component="img"
        image={photo}
        alt="Foto perfil"
        sx={{ maxHeight: 300, maxWidth: 300 }}
      />
      <CardContent>
        <Typography variant="body1" sx={{ textAlign: "center" }}>
          @{username}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default ProfileCard;
