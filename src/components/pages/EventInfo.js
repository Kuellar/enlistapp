import React from "react";
import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
import EventIcon from "@mui/icons-material/Event";
import EditIcon from "@mui/icons-material/Edit";
import Title from "../Title";

const EventInfo = () => {
  return (
    <Box>
      <Title Title="Evento" titleIcon={EventIcon} actionIcon={EditIcon} />
    </Box>
  );
};
export default EventInfo;
