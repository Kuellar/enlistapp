import React from "react";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FotoPerfil from "../../images/FotoPerfil.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Profile = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box
        sx={{
          height: 60,
          backgroundColor: theme.palette.primary.dark,
          display: "flex",
          alignItems: "center",
          color: "white",
        }}
      >
        <AccountCircleIcon fontSize="large" sx={{ ml: 3 }} />
        <Typography variant="h5" component="h2" sx={{ ml: 1 }}>
          Profile
        </Typography>
      </Box>

      <Box sx={{ p: 5 }}>
        <Card sx={{ maxWidth: 200 }}>
          <CardMedia component="img" image={FotoPerfil} alt="Foto perfil" />
          <CardContent>
            <Typography variant="body1">@ignacio.cuellar</Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};
export default Profile;
