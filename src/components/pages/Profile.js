import React from "react";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import FotoPerfil from "../../images/FotoPerfil.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import QrCodeIcon from "@mui/icons-material/QrCode";
import CheckIcon from "@mui/icons-material/Check";

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
          Perfil
        </Typography>
      </Box>

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
                  @ignacio.cuellar
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
            <Paper
              sx={{
                width: "100%",
              }}
            >
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      sx={{ backgroundColor: theme.palette.primary.dark }}
                    >
                      <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Nombre"
                    secondary="Juan Rodriguez"
                    secondaryTypographyProps={{
                      color: theme.palette.primary.dark,
                      paddingLeft: 2,
                    }}
                  />
                </ListItem>

                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      sx={{ backgroundColor: theme.palette.primary.dark }}
                    >
                      <EmailIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Mail"
                    secondary="juan.rodriguez@gmail.com"
                    secondaryTypographyProps={{
                      color: theme.palette.primary.dark,
                      paddingLeft: 2,
                    }}
                  />
                </ListItem>

                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      sx={{ backgroundColor: theme.palette.primary.dark }}
                    >
                      <QrCodeIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Pase de movilidad"
                    secondary="Sí"
                    secondaryTypographyProps={{
                      color: theme.palette.primary.dark,
                      paddingLeft: 2,
                    }}
                  />
                </ListItem>

                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      sx={{ backgroundColor: theme.palette.primary.dark }}
                    >
                      <CheckIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Ultimo PCR"
                    secondary="12/11/2021 - Negativo"
                    secondaryTypographyProps={{
                      color: theme.palette.primary.dark,
                      paddingLeft: 2,
                    }}
                  />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default Profile;
