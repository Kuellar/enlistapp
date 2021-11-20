import React from "react";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import EventIcon from "@mui/icons-material/Event";

import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

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
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
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
      <Box
        sx={{
          height: 60,
          backgroundColor: theme.palette.primary.dark,
          display: "flex",
          alignItems: "center",
          color: "white",
        }}
      >
        <EventIcon fontSize="large" sx={{ ml: 3 }} />
        <Typography variant="h5" component="h2" sx={{ ml: 1 }}>
          Eventos
        </Typography>
      </Box>

      <Box
        sx={{
          pt: { xs: 0, sm: 2 },
          pl: { sm: 2, md: 4, lg: 6, xl: 10 },
          pr: { sm: 2, md: 4, lg: 6, xl: 10 },
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
            style={{ backgroundColor: "white", color: "black" }}
          >
            <TabPanel value={value} index={0}>
              <Box sx={{ height: 300 }}>Tus eventos</Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Box sx={{ height: 300 }}>Próximos</Box>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Box sx={{ height: 300 }}>Archivados</Box>
            </TabPanel>
          </SwipeableViews>
        </AppBar>
      </Box>
    </Box>
  );
};
export default Events;
