import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";

const InputIcon = ({
  leftIcon: IconComponent,
  label,
  width,
  handler,
  delay,
}) => {
  const theme = useTheme();
  const [timeoutID, setTimeoutID] = useState(null);

  const setDelay = (value) => {
    var id = setTimeout(
      () => {
        handler(value);
      },
      delay ? delay : 0
    );
    setTimeoutID(id);
  };

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
        onChange={(event) => {
          timeoutID && clearTimeout(timeoutID);
          setDelay(event.target.value ? event.target.value : "");
        }}
      />
    </Box>
  );
};
export default InputIcon;
