import React, { Component } from "react";
import logo from "../logo.svg";
import "./home.css";
import About from "./about";
import Header from "../components/header";
import Title from "../components/title";

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        This is the Homepage
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      </div>
    );
  }
}
