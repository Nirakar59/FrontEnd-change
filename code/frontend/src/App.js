// MainApp.js (or any other appropriate component where you want to set up routing)
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainRouter from "./routes";

export default function MainApp() {
  return (
    <Router>
      <MainRouter />
    </Router>
  );
}
