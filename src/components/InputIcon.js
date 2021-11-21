import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";

const InputIcon = ({ leftIcon: IconComponent, label, width }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        pr: 1,
        display: "flex",
        alignItems: "flex-end",
        background: theme.palette.primary.main,
        borderRadius: 3,
        width: width,
      }}
    >
      <IconComponent
        fontSize="large"
        sx={{
          color: "primary.contrastText",
          mx: 1,
          my: 0.5,
        }}
      />
      <Divider orientation="vertical" flexItem light={true} sx={{ mr: 1 }} />
      <TextField
        id="search-input"
        label={label}
        variant="standard"
        fullWidth
        InputLabelProps={{
          sx: {
            color: "primary.contrastText",
            pb: 2,
          },
        }}
        inputProps={{
          sx: {
            color: "primary.contrastText",
            borderBottomColor: "primary.contrastText",
          },
        }}
      />
    </Box>
  );
};
export default InputIcon;
