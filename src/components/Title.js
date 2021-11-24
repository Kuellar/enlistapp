import React from "react";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

const Title = ({
  Title,
  titleIcon: IconTitle,
  actionIcon: IconAction,
  actionHandler,
}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: 60,
        backgroundColor: theme.palette.primary.dark,
        display: "flex",
        alignItems: "center",
        color: "white",
      }}
    >
      <IconTitle fontSize="large" sx={{ ml: 3 }} />
      <Typography variant="h5" component="h2" sx={{ ml: 1 }}>
        {Title}
      </Typography>
      {!!IconAction && (
        <IconButton
          aria-label="Icon action title"
          component="span"
          size="large"
          sx={{ color: "white", ml: "auto", mr: 3 }}
          onClick={
            actionHandler
              ? actionHandler
              : () => {
                  console.log("Click");
                }
          }
        >
          <IconAction fontSize="large" />
        </IconButton>
      )}
    </Box>
  );
};

export default Title;
