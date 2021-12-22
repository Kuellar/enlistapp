import React, { useState } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import FotoPerfil from "../../images/FotoPerfil.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import EditIcon from "@mui/icons-material/Edit";
import Title from "../Title";
import ProfileInfo from "../ProfileInfo";
import ProfileCard from "../ProfileCard";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const PCRstatus = [
  { label: "Positivo" },
  { label: "Negativo" },
  { label: "Esperando resultado" },
];

const DateStringtoString = (date) => {
  var newDate = new Date(date);
  var day = newDate.getDate() + 1;
  var month = newDate.getMonth() + 1;
  var year = newDate.getFullYear();

  return day + "/" + month + "/" + year;
};

const paseStatus = [{ label: "Sí" }, { label: "No" }];

const Profile = () => {
  // Modal PCR
  const [PCRUserStatus, setPCRUserStatus] = useState("Negativo");
  const [PCRUserDate, setPCRUserDate] = useState("2021-11-12");

  const handleChangePCRStatus = (event) => {
    setPCRUserStatus(event.target.value);
  };
  const handleChangePCRDate = (event) => {
    setPCRUserDate(event.target.value);
  };

  const [openPCR, setOpenPCR] = useState(false);

  const handleClickOpenPCR = () => {
    setOpenPCR(true);
  };

  const handleClosePCR = (value) => {
    setOpenPCR(false);
  };

  // Modal Pase
  const [paseUserStatus, setPaseUserStatus] = useState("Sí");

  const handleChangePaseStatus = (event) => {
    setPaseUserStatus(event.target.value);
  };

  const [openPase, setOpenPase] = useState(false);

  const handleClickOpenPase = () => {
    setOpenPase(true);
  };

  const handleClosePase = (value) => {
    setOpenPase(false);
  };

  return (
    <Box>
      <Title
        Title="Perfil"
        titleIcon={AccountCircleIcon}
        // actionIcon={EditIcon}
      />

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
            <ProfileCard photo={FotoPerfil} username="ignacio.cuellar" />
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
              name="Ignacio Cuellar"
              mail="ignaciocuellar@gmail.com"
              pase={paseUserStatus ? paseUserStatus : "No notifica"}
              pcr={
                !(PCRUserDate && PCRUserStatus)
                  ? "No notifica"
                  : DateStringtoString(PCRUserDate) + " - " + PCRUserStatus
              }
            />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          my: 1,
          width: { xs: 180, sm: "auto" },
          ml: "auto",
          mr: { xs: 4, md: 6, lg: 8, xl: 10 },
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="flex-end"
          spacing={2}
        >
          <Button variant="contained" onClick={handleClickOpenPase}>
            Actualizar pase
          </Button>
          <Button variant="contained" onClick={handleClickOpenPCR}>
            Actualizar PCR
          </Button>
        </Stack>
      </Box>
      <Dialog onClose={handleClosePase} open={openPase}>
        <DialogTitle>Actualizar pase de movilidad</DialogTitle>
        <Divider />
        <Box sx={{ mx: 3, mt: 2 }}>
          <Box sx={{ textAlign: "center" }}>
            <TextField
              id="outlined-select-status-pase"
              select
              label="Estado pase de movilidad"
              value={paseUserStatus}
              onChange={handleChangePaseStatus}
              helperText="Selecciona el estado de tú pase de movilidad"
            >
              {paseStatus.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </Box>
        <DialogActions>
          <Button onClick={handleClosePase}>Guardar cambios</Button>
        </DialogActions>
      </Dialog>
      <Dialog onClose={handleClosePCR} open={openPCR}>
        <DialogTitle>Actualizar PCR</DialogTitle>
        <Divider />
        <Box sx={{ mx: 3, mt: 2 }}>
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <TextField
              id="datePCR"
              label="Fecha PCR"
              type="date"
              value={PCRUserDate}
              onChange={handleChangePCRDate}
              sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <TextField
              id="outlined-select-status-pcr"
              select
              label="Estado PCR"
              value={PCRUserStatus}
              onChange={handleChangePCRStatus}
              helperText="Selecciona el estado de tú último PCR"
            >
              {PCRstatus.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </Box>
        <DialogActions>
          <Button onClick={handleClosePCR}>Guardar cambios</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
export default Profile;
