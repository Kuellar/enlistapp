import "./App.css";
import React from "react";
import { Link } from "react-router-dom";
// import Routes from "./components/Routes";

export default function App() {
  return (
    <div>
      <h1>Landing Page</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">LandingPage</Link> | <Link to="/Home">Home</Link> |{" "}
        <Link to="/Profile">Profile</Link>
      </nav>
    </div>
  );
}
