import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Resume from "../pages/resume";
import Title from "./title";
import "./header.css";
import TimelinePage from "../pages/timeline";
import Contact from "../pages/contact";
import Projects from "../pages/projects";
import Education from "../pages/education";
import About from "../pages/about";

export default class Header extends Component {
  render() {
    const pdf = "/files/KyleMacri_Resume.pdf";

    return (
      <div>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
        <Title />
        <Router>
          <div>
            <nav>
              <ul className="links">
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/career">Career</Link>
                </li>
                <li>
                  <Link to="/education">Education</Link>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li className="download-link">
                  <Link to={pdf} target="_blank" download>
                    <i className="material-icons">get_app</i> Resume
                  </Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/career" component={TimelinePage} />
              <Route path="/education" component={Education} />
              <Route path="/resume" component={Resume} />
              <Route path="/projects" component={Projects} />
              <Route path="/" component={About} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
