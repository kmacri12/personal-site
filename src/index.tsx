import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
