import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import EventIcon from "@mui/icons-material/Event";
import EditIcon from "@mui/icons-material/Edit";
import Title from "../Title";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import FriendsListMobile from "../FriendsListMobile";
import IconButton from "@mui/material/IconButton";
import MapTwoToneIcon from "@mui/icons-material/MapTwoTone";
import Link from "@mui/material/Link";

const FriendsListData = [
  {
    name: "Juan",
    username: "@Juan1",
  },
  {
    name: "Pedro",
    username: "@Pedro1",
  },
  {
    name: "Marcelo",
    username: "@Marcelo1",
  },
  {
    name: "Juan",
    username: "@Juan2",
  },
  {
    name: "Pedro",
    username: "@Pedro2",
  },
  {
    name: "Marcelo",
    username: "@Marcelo2",
  },
  {
    name: "Juan",
    username: "@Juan3",
  },
  {
    name: "Pedro",
    username: "@Pedro3",
  },
  {
    name: "Marcelo",
    username: "@Marcelo3",
  },
  {
    name: "Juan",
    username: "@Juan4",
  },
];

const EventInfo = () => {
  return (
    <Box>
      <Title Title="Evento" titleIcon={EventIcon} actionIcon={EditIcon} />
      <Box sx={{ px: { xs: 1, sm: 2, md: 5, xl: 10 }, pt: 2 }}>
        <Typography variant="h5">10 Invitados</Typography>
        <Box sx={{}}>
          <FriendsListMobile data={FriendsListData} event={true} />
        </Box>
        <Divider sx={{ pb: 1 }} />
        <Typography variant="h5">Lugar</Typography>
        <Grid container sx={{ px: { xs: 0, sm: 1, md: 2 } }}>
          <Grid item xs={9}>
            <Typography variant="h6">Estadio Nacional</Typography>
            <Typography variant="body2">Comuna: Ñuñoa</Typography>
            <Typography variant="body2">Calle: Av. Grecia 1700</Typography>
          </Grid>
          <Grid item xs={3}>
            <IconButton
              color="primary"
              component="span"
              sx={{ width: "100%", ml: "auto", mr: "auto" }}
            >
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://www.google.com/maps/place/Estadio+Nacional+Julio+Mart%C3%ADnez+Pr%C3%A1danos/@-33.4623082,-70.6184358,15z/data=!4m9!1m2!2m1!1sgoogle+maps+estadio+nacional!3m5!1s0x9662cfed639ab813:0xb92488060556a1df!8m2!3d-33.4646281!4d-70.6106762!15sChxnb29nbGUgbWFwcyBlc3RhZGlvIG5hY2lvbmFsIgOIAQFaEiIQZXN0YWRpbyBuYWNpb25hbJIBB3N0YWRpdW2wAQA"
              >
                <MapTwoToneIcon fontSize="large" />
              </Link>
            </IconButton>
            <Box sx={{ width: "100%", textAlign: "center" }}>
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://www.google.com/maps/place/Estadio+Nacional+Julio+Mart%C3%ADnez+Pr%C3%A1danos/@-33.4623082,-70.6184358,15z/data=!4m9!1m2!2m1!1sgoogle+maps+estadio+nacional!3m5!1s0x9662cfed639ab813:0xb92488060556a1df!8m2!3d-33.4646281!4d-70.6106762!15sChxnb29nbGUgbWFwcyBlc3RhZGlvIG5hY2lvbmFsIgOIAQFaEiIQZXN0YWRpbyBuYWNpb25hbJIBB3N0YWRpdW2wAQA"
              >
                Ver mapa
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ pb: 1 }} />
        <Typography variant="h5">Horario</Typography>
        <Box sx={{ px: { xs: 0, sm: 1, md: 2 } }}>
          <Typography variant="body2">Desde: 24/10/2021 - 18:00</Typography>
          <Typography variant="body2">Hasta: 24/10/2021 - 19:00</Typography>
        </Box>
        <Divider sx={{ pb: 1 }} />
        <Typography variant="h5">Especificación</Typography>
        <Box sx={{ px: { xs: 0, sm: 1, md: 2 } }}>
          <Typography variant="body2">
            Requiere pase de movilidad: Sí
          </Typography>
          <Typography variant="body2">Vestimenta: Formal</Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default EventInfo;
