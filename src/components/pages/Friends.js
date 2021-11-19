import React from "react";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import GroupIcon from "@mui/icons-material/Group";

const Friends = () => {
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
        <GroupIcon fontSize="large" sx={{ ml: 3 }} />
        <Typography variant="h5" component="h2" sx={{ ml: 1 }}>
          Friends list
        </Typography>
      </Box>

      <Box sx={{ p: 5 }}>
        <Typography variant="body1">Content...</Typography>
      </Box>
    </Box>
  );
};
export default Friends;
