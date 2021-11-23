import React from "react";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import GroupIcon from "@mui/icons-material/Group";
import SearchIcon from "@mui/icons-material/Search";
import InputIcon from "../InputIcon";
// import Divider from "@mui/material/Divider";

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
          Lista de amigos
        </Typography>
      </Box>

      <Box sx={{ pt: 1, px: { xs: 1, sm: 3, md: 5, lg: 10 } }}>
        <Grid container>
          <Grid
            item
            xs={0}
            sm={5}
            sx={{ display: { xs: "none", sm: "inline" } }}
          >
            <Typography variant="h5" component="h2" sx={{ ml: 1, mt: 2 }}>
              16 Amigos
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "flex-end" },
              p: 1,
            }}
            xs={12}
            sm={7}
          >
            <InputIcon
              label="Buscar amigo"
              leftIcon={SearchIcon}
              width={{ xs: 800, sm: 200, md: 300 }}
            />
          </Grid>
          <Grid item xs={12} sm={0}>
            <Typography
              variant="h5"
              component="h2"
              sx={{ ml: 1, mt: 2, display: { sm: "none" } }}
            >
              16 Amigos
            </Typography>
          </Grid>
        </Grid>
        {/* <Divider sx={{ my: 2 }} /> */}
      </Box>
    </Box>
  );
};
export default Friends;
