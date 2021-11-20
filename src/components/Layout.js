import React from "react";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Outlet } from "react-router";
import Menu from "./Menu";
import Topbar from "./Topbar/Topbar";
import { grey } from "@mui/material/colors";

const Layout = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  return (
    <div>
      <React.Fragment key={"left"}>
        <Topbar menuHandler={toggleDrawer} />
        <Grid container sx={{ backgroundColor: grey[200], height: "93vh" }}>
          <Grid item sm={1} md={2} />
          <Grid item xs={12} sm={10} md={8}>
            <Box
              component="main"
              sx={{ backgroundColor: "white", height: "93vh" }}
            >
              <Outlet />
            </Box>
          </Grid>
          <Grid item sm={1} md={2} />
        </Grid>
        <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
          <Menu setOpen={setOpen} />
        </Drawer>
      </React.Fragment>
    </div>
  );
};
export default Layout;
