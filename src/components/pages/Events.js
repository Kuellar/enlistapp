import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import EventIcon from "@mui/icons-material/Event";
import Title from "../Title";

import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import List from "@mui/material/List";
import Event from "../Event";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import AddIcon from "@mui/icons-material/Add";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const Events = () => {
  const theme = useTheme();

  // TABS
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box>
      <Title
        Title="Eventos"
        titleIcon={EventIcon}
        actionIcon={AddIcon}
        actionHandler={() => {
          window.location.href = "enlistapp/#/event/new";
        }}
      />

      <Box
        sx={{
          pt: { xs: 0, sm: 2 },
          pl: { sm: 5, md: 10, lg: 15, xl: 30 },
          pr: { sm: 5, md: 10, lg: 15, xl: 30 },
        }}
      >
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs"
          >
            <Tab label="Tus eventos" {...a11yProps(0)} />
            <Tab label="Próximos" {...a11yProps(1)} />
            <Tab label="Archivados" {...a11yProps(2)} />
          </Tabs>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
            style={{ backgroundColor: "white", color: "black", height: "75vh" }}
          >
            <TabPanel value={value} index={0}>
              <List>
                <Event
                  primary="Partido"
                  secondary="21/11/2021"
                  icon={<SportsVolleyballIcon />}
                  from="21:00"
                  to="22:00"
                />
                <Event
                  primary="Bingo familiar"
                  secondary="22/11/2021"
                  icon={<FamilyRestroomIcon />}
                  from="21:00"
                  to="22:00"
                />
              </List>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <List>
                <Event
                  primary="Partido"
                  secondary="21/11/2021"
                  icon={<SportsVolleyballIcon />}
                  from="21:00"
                  to="22:00"
                />
                <Event
                  primary="Bingo familiar"
                  secondary="22/11/2021"
                  icon={<FamilyRestroomIcon />}
                  from="21:00"
                  to="22:00"
                />
              </List>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <List>
                <Event
                  primary="Partido"
                  secondary="21/11/2021"
                  icon={<SportsVolleyballIcon />}
                  from="21:00"
                  to="22:00"
                />
                <Event
                  primary="Bingo familiar"
                  secondary="22/11/2021"
                  icon={<FamilyRestroomIcon />}
                  from="21:00"
                  to="22:00"
                />
              </List>
            </TabPanel>
          </SwipeableViews>
        </AppBar>
      </Box>
    </Box>
  );
};
export default Events;
