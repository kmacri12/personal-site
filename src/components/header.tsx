import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../pages/about";
import Home from "../pages/home";
import Resume from "../pages/resume";
import Title from "./title";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Title />
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/resume">Resume</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/resume" component={Resume} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
