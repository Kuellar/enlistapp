import React from "react";
import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
import EventIcon from "@mui/icons-material/Event";
import Title from "../Title";

const CreateEvent = () => {
  return (
    <Box>
      <Title Title="Crear evento" titleIcon={EventIcon} />
    </Box>
  );
};
export default CreateEvent;
