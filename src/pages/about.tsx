import React, { Component } from "react";
import "./about.css";

export default class About extends Component {
  render() {
    const isMobile = window.innerWidth < 500;

    return (
      <div className={`about ${isMobile ? "mobile" : ""}`}>
        <div className="pic-and-links">
          {isMobile && <h2>About Me</h2>}
          <div className="portrait">
            <img
              src="/images/Kyle_Zion.jpg"
              alt="Me at Zion National Park"
            ></img>
          </div>
          <div className="contact">
            <div className="spacer"></div>
            <div className="image-container linkedin">
              <img src="/images/linkedin.png" alt="linkedin logo"></img>
              <a
                href="https://www.linkedin.com/in/kyle-macri/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="overlay">
                  <div className="text">
                    linkedin.com/<br></br>in/kyle-macri
                  </div>
                </div>
              </a>
            </div>
            <div className="image-container gmail">
              <img src="/images/gmail.png" alt="gmail logo"></img>
              <a
                href="mailto:kyle@kylemacri.com"
                target="_blank"
                rel="noreferrer"
              >
                <div className="overlay">
                  <div className="text">
                    kyle@<br></br>kylemacri.com
                  </div>
                </div>
              </a>
            </div>
            <div className="image-container github">
              <img src="/images/github.png" alt="github logo"></img>{" "}
              <a
                href="https://github.com/kmacri12"
                target="_blank"
                rel="noreferrer"
              >
                <div className="overlay">
                  <div className="text">
                    github.com<br></br>/kmacri12
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="bio">
          {!isMobile && <h2>About Me</h2>}
          <p>
            Hey! I'm Kyle. I like building interesting software and solving
            challenging problems.
          </p>
          <p>
            Currently, I'm employed as a Software Engineer at Travelers
            Insurance, working mainly with Python, building AI pipelines. I've
            worked on some great projects here, including one utilizing AI and
            satellite imagery to provide information about the roof shape of a
            house. It was even recognized by{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.gartner.com/en/about/awards/eye-on-innovation"
            >
              Gartner
            </a>{" "}
            as a finalist for the{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://careers.travelers.com/2020/12/07/technology-data-analytics-teams-recognized-for-focus-on-innovation/"
            >
              2020 Eye on Innovation Award
            </a>
            !
          </p>
          <p>
            I also had the chance to{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/feed/update/urn:li:activity:6631655005537525760/"
            >
              {" "}
              represent Travelers
            </a>{" "}
            at the 2019 Georgia Tech{" "}
            <a target="_blank" rel="noreferrer" href="https://2019.hack.gt/">
              HackGT
            </a>{" "}
            event. I served as a mentor to students participating in the
            hackathon, offering advice and assistance with code when needed.
          </p>
          <p>
            Prior to Travelers, I worked at Google mainly as a Corporate
            Engineering Support Technician. Working in a super fast-paced
            environment kept me learning every day. I also spent a few months
            working as a Technical Project Manager, helping to decide which
            computer hardware other Googlers use every day!
          </p>
          <p>
            Outside of work, I am pursuing my Master's of Science in Computer
            Science degree from Georgia Tech, specializing in Machine Learning.
          </p>
          <div className="interests-skills">
            <div className="interests">
              <h3>Interests</h3>
              <ul>
                <li>Any and all techology</li>
                <li>AI/ML</li>
                <li>Computer hardware</li>
                <li>Tech ethics</li>
                <li>Basketball</li>
                <li>Video Games</li>
                <li>Dogs</li>
                <li>Nature</li>
              </ul>
            </div>
            <div className="skills">
              <h3>Skills</h3>
              <ul>
                <li>Python</li>
                <li>JavaScript</li>
                <ul className="sublist">
                  <li>React</li>
                  <li>Node.js</li>
                  <li>Angular</li>
                </ul>
                <li>C#</li>
                <li>Git</li>
                <li>SQL</li>
                <li>Hadoop</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
