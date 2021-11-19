import React from "react";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Outlet } from "react-router";
import Menu from "./Menu";
import Topbar from "./Topbar";
import { grey } from "@mui/material/colors";
import Footer from "./Footer";

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
        <Footer>
          <Topbar menuHandler={toggleDrawer} />
          <Grid container sx={{ backgroundColor: grey[200], height: "87vh" }}>
            <Grid item sm={1} md={2} />
            <Grid item xs={12} sm={10} md={8}>
              <Box
                component="main"
                sx={{ backgroundColor: "white", height: "87vh" }}
              >
                <Outlet />
              </Box>
            </Grid>
            <Grid item sm={1} md={2} />
          </Grid>
          <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
            <Menu setOpen={setOpen} />
          </Drawer>
        </Footer>
      </React.Fragment>
    </div>
  );
};
export default Layout;
