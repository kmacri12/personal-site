import React, { Component } from "react";
import { Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./projects.css";

export default class Projects extends Component {
  render() {
    return (
      <div className="projects-container">
        <h2>Projects</h2>
        <p className="">
          Due to the private nature of these school and work projects, I am only
          able to share a small bit of information about each.
        </p>
        <Accordion defaultActiveKey="5" id="accordion">
          <Card className="roof">
            <Accordion.Toggle as={Card.Header} eventKey="5">
              <h3>AI Roof Identification</h3>
              <div className="description">
                <p>
                  This project was{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://careers.travelers.com/2020/12/07/technology-data-analytics-teams-recognized-for-focus-on-innovation/"
                  >
                    recognized
                  </a>{" "}
                  by{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://careers.travelers.com/2020/12/07/technology-data-analytics-teams-recognized-for-focus-on-innovation/"
                  >
                    Gartner
                  </a>{" "}
                  as a finalist for their 2020 Gartner Eye on Innovation Award.
                </p>
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="5">
              <Card.Body className="card-body">
                <p className="ai-description">
                  <b>Travelers</b> — When shopping for a quote on a home
                  insurance policy, many homeowners are confused by the question
                  asking about the shape of the roof of their house. Yet, roof
                  shape is an important risk factor for insurers to consider, as
                  certain roof shapes are more susceptible to damage from high
                  winds, tornadoes and hurricanes. To solve this problem, the
                  Travelers technology team introduced the AI Roof Shape Model.
                  By using a combination of AI-driven analytics and aerial
                  imagery to deliver highly accurate information about roof
                  shapes, this new system delivers faster policy pricing
                  recommendations to agents and brokers. The detailed evaluation
                  of a house’s roof shape provided by this model will improve
                  underwriting accuracy in assessing risk, which could bring up
                  to a $5 million in annual savings.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="asteroids">
            <Accordion.Toggle as={Card.Header} eventKey="4">
              <h3>Stock Trading Supervised Learner</h3>
              <div className="description">
                <p>
                  The goal of this project was to use a{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://en.wikipedia.org/wiki/Supervised_learning"
                  >
                    Supervised Learner
                  </a>{" "}
                  to create an algorithm that can decide when it is the right
                  time to buy and sell stocks based on historical stock
                  performance.
                </p>
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body className="card-body">
                <img
                  src="/images/Experiment1.png"
                  alt="Supervised Learner Performance"
                ></img>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="asteroids">
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <h3>Asteroids (Kalman Filter)</h3>
              <div className="description">
                <p>
                  The goal of this project was to use a{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://en.wikipedia.org/wiki/Kalman_filter"
                  >
                    Kalman Filter
                  </a>{" "}
                  to navigate a 'spaceship' through a field of 'asteroids'. At
                  each timestep, you are given a data structure containing a
                  list of asteroids (grey dots) and their current (x,y)
                  coordinates. Using this information alone, I was able to
                  implement a Kalman Filter to project the location of each
                  asteroid at the next timestep by calculating its speed,
                  acceleration, and trajectory. Using this information, I was
                  able to navigate a spaceship (black triangle) through the
                  field of asteroids to the finish line (green area).
                </p>
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body className="card-body">
                <img
                  src="/images/Asteroids.gif"
                  alt="Asteroids project demo"
                ></img>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="mars-glider">
            <Accordion.Toggle as={Card.Header} eventKey="1">
              <h3>Mars Glider (Particle Filter)</h3>
              <div className="description">
                <p>
                  This goal of this project was to create an implementation of a{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://en.wikipedia.org/wiki/Particle_filter"
                  >
                    Particle Filter
                  </a>{" "}
                  to locate the (x,y) coordinates of a 'spaceship' on 'Mars'.
                  You are given the topographic map of Mars, where the
                  background color shades represent the different elevations
                  above sea level, and the current distance-to-ground radar
                  reading from the spaceship. Using just the radar readings at
                  each timestep, I was able to accurately predict (purple dot)
                  the location of the spaceship (red triangle) at the next
                  timestep using a Particle Filter.
                </p>
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="card-body">
                <img
                  src="/images/Glider.gif"
                  alt="Mars Gilder project demo"
                ></img>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="gem-finder">
            <Accordion.Toggle as={Card.Header} eventKey="2">
              <h3>Gem Finder (Graph SLAM)</h3>
              <div className="description">
                <p>
                  This goal of this project was to use{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://medium.com/@krunalkshirsagar/graph-slam-a-noobs-guide-to-simultaneous-localization-and-mapping-aaff4ee91dee"
                  >
                    Graph SLAM
                  </a>{" "}
                  to locate the (x,y) coordinates and navigate to specified
                  'gems' on a map to retrieve them. A robot uses sensors at each
                  timestep to estimate each gems location and calculating a path
                  to its destination.
                </p>
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body className="card-body">
                <img
                  src="/images/GemFinder_SLAM.gif"
                  alt="Gem Finder project demo"
                ></img>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="rocket">
            <Accordion.Toggle as={Card.Header} eventKey="3">
              <h3>Rocket (PID Controller)</h3>
              <div className="description">
                <p>
                  This goal of this project was to implement a{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://en.wikipedia.org/wiki/PID_controller"
                  >
                    PID Controller
                  </a>{" "}
                  to control a rocket's thrusters to allow for a proper takeoff
                  and safe landing.
                </p>
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body className="card-body">
                <img
                  src="/images/RocketPID.png"
                  alt="Rocket PID project demo"
                ></img>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}
