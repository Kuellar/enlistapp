import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import EventIcon from "@mui/icons-material/Event";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MapTwoToneIcon from "@mui/icons-material/MapTwoTone";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Title from "../Title";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import RemoveIcon from "@mui/icons-material/Remove";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import FotoPerfil from "../../images/FotoPerfil.png";
import AddIcon from "@mui/icons-material/Add";
import { Link as LinkReal } from "react-router-dom";

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

const CreateEvent = () => {
  // Friends invited
  const [friends, setFriends] = useState([]);
  const [openFriendModal, setOpenFriendModal] = useState(false);

  const handleClickOpenFriendModal = () => {
    setOpenFriendModal(true);
  };

  const handleCloseFriendModal = () => {
    setOpenFriendModal(false);
  };

  return (
    <Box>
      <Title Title="Crear evento" titleIcon={EventIcon} />
      <Box sx={{ px: { xs: 1, sm: 2, md: 5, xl: 10 }, pt: 2 }}>
        <Box sx={{ pr: { xs: 0, sm: 1, md: 2 } }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="h5">Nombre del evento:</Typography>
            <TextField label="Nombre" variant="outlined" />
          </Stack>
        </Box>

        <Divider sx={{ pb: 1 }} />

        <Stack
          direction="row"
          justifyContent="flex-start"
          spacing={1}
          alignItems="center"
        >
          <Typography variant="h5">
            {friends.length} {friends.length === 1 ? "invitado" : "invitados"}
          </Typography>
          <IconButton
            color="primary"
            aria-label="add friend"
            component="span"
            onClick={handleClickOpenFriendModal}
          >
            <AddCircleIcon fontSize={"large"} />
          </IconButton>
        </Stack>
        <Box>
          <List sx={{ height: "30vh", overflow: "scroll" }}>
            {friends?.map((friend, i) => (
              <ListItem
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label={friend.username}
                    aria-haspopup="true"
                    onClick={() => {
                      var arr = [...friends];
                      arr.splice(i, 1);
                      setFriends(arr);
                    }}
                  >
                    <RemoveIcon />
                  </IconButton>
                }
                divider={true}
              >
                <ListItemAvatar>
                  <Avatar alt={friend.username + "-photo"} src={FotoPerfil} />
                </ListItemAvatar>
                <ListItemText
                  primary={friend.name}
                  secondary={friend.username}
                />
              </ListItem>
            ))}
          </List>
        </Box>

        <Divider sx={{ pb: 1 }} />

        <Grid container sx={{ pr: { xs: 0, sm: 1, md: 2 } }}>
          <Grid item xs={9} sx={{ pt: 2 }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography variant="h5">Dirección:</Typography>
              <TextField label="Dirección" variant="outlined" multiline />
            </Stack>
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

        <Typography variant="h5">Horario:</Typography>
        <Box sx={{ px: { xs: 0, sm: 1, md: 2 }, pt: 1 }}>
          <Grid container sx={{ pl: 3 }}>
            <Grid item xs={12} sm={6} sx={{ pb: { xs: 3 } }}>
              <TextField
                type="datetime-local"
                label="Desde"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="datetime-local"
                label="Hasta"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ pb: 1 }} />

        <Stack direction="row" spacing={2} alignItems="center" sx={{ pt: 2 }}>
          <Typography variant="h5">Especificación:</Typography>
          <TextField label="Especificación" variant="outlined" multiline />
        </Stack>
        <Box sx={{ mt: 3, float: "right", mr: { xs: 1, sm: 5 } }}>
          <LinkReal to="/events">
            <Button variant="contained">Crear</Button>
          </LinkReal>
        </Box>
      </Box>
      {/* MODAL */}
      <Dialog onClose={handleCloseFriendModal} open={openFriendModal}>
        <DialogTitle>Invitar amigo</DialogTitle>
        <Divider />
        <List sx={{ height: "30vh", overflow: "scroll" }}>
          {FriendsListData?.map(
            (friend, i) =>
              friends.indexOf(friend) === -1 && (
                <ListItem
                  secondaryAction={
                    <IconButton
                      edge="end"
                      aria-label={friend.username}
                      aria-haspopup="true"
                      onClick={() => {
                        setFriends([...friends, friend]);
                      }}
                    >
                      <AddIcon />
                    </IconButton>
                  }
                  divider={true}
                >
                  <ListItemAvatar>
                    <Avatar alt={friend.username + "-photo"} src={FotoPerfil} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={friend.name}
                    secondary={friend.username}
                  />
                </ListItem>
              )
          )}
        </List>
        <DialogActions>
          <Button onClick={handleCloseFriendModal} autoFocus>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
export default CreateEvent;
