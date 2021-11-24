import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FotoPerfil from "../../images/FotoPerfil.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Title from "../Title";
import ProfileInfo from "../ProfileInfo";

const FriendProfile = () => {
  return (
    <Box>
      <Title Title="Amigo" titleIcon={AccountCircleIcon} />

      <Box sx={{ p: { xs: 0, sm: 1, md: 2 } }}>
        <Grid container>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              p: { xs: 1, sm: 2 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Card
              sx={{
                width: "100%",
                maxWidth: 300,
                margin: "auto",
              }}
            >
              <CardMedia
                component="img"
                image={FotoPerfil}
                alt="Foto perfil"
                sx={{ maxHeight: 300, maxWidth: 300 }}
              />
              <CardContent>
                <Typography variant="body1" sx={{ textAlign: "center" }}>
                  @Juan.Pedro
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              p: { xs: 1, sm: 2 },
              pr: { md: 2, lg: 4, xl: 6 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ProfileInfo
              name="Juan Rodriguez"
              mail="juan.rodriguez@gmail.com"
              pase="Sí"
              pcr="12/11/2021 - Negativo"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default FriendProfile;
