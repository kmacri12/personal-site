import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../pages/home";
import Resume from "../pages/resume";
import Title from "./title";
import "./header.css";
import TimelinePage from "../pages/timeline";
import Contact from "../pages/contact";
import Projects from "../pages/projects";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Title />
        <Router>
          <div>
            <nav>
              <ul className="links">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/timeline">Timeline</Link>
                </li>
                <li>
                  <Link to="/resume">Resume</Link>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/timeline" component={TimelinePage} />
              <Route path="/resume" component={Resume} />
              <Route path="/" component={Home} />
              <Route path="/contact" component={Contact} />
              <Route path="/projects" component={Projects} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
