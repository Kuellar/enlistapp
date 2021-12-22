import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter, Routes, Route } from "react-router-dom";
import Events from "./components/pages/Events";
import EventInfo from "./components/pages/EventInfo";
import Friends from "./components/pages/Friends";
import FriendProfile from "./components/pages/FriendProfile";
import Profile from "./components/pages/Profile";
import Layout from "./components/Layout";
import { blueGrey, deepOrange } from "@mui/material/colors";
import CreateEvent from "./components/pages/CreateEvent";

const theme = createTheme({
  palette: {
    primary: blueGrey,
    secondary: deepOrange,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/" element={<Layout />}>
            <Route path="events" element={<Events />} />
            <Route path="event" element={<EventInfo />} />
            <Route path="event/new" element={<CreateEvent />} />
            <Route path="profile" element={<Profile />} />
            <Route path="friends" element={<Friends />} />
            <Route path="friend" element={<FriendProfile />} />
          </Route>
          <Route
            path="*"
            element={
              <main>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
