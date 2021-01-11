import React, { Component } from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import "./timeline.css";

export default class TimelinePage extends Component {
  render() {
    return (
      <div className="tl">
        <Timeline>
          <TimelineItem
            key="001"
            dateText="06/2017 – Present"
            dateInnerStyle={{ background: "#e41e26" }}
            style={{ color: "#e41e26" }}
            className="travelers"
          >
            <div className="image-container">
              <img
                src="/TravelersLogo.png"
                alt="Travelers Insurance Logo"
              ></img>
              <div className="overlay">
                <div className="text">
                  The Travelers Companies, Inc.
                  <br />
                  Hartford, CT
                </div>
              </div>
            </div>
            <h3>Software Engineer I</h3>
            <h4>10/2020 - Present</h4>
            <p>TODO fill this in.</p>
            <h3>Associate Software Engineer</h3>
            <h4>12/2018 - 10/2020</h4>
            <p>TODO fill this in.</p>
            <h3>Software Programmer</h3>
            <h4>06/2017 - 12/2018</h4>
            <p>TODO fill this in.</p>
          </TimelineItem>
          <TimelineItem
            key="002"
            dateText="07/2016 – 06/2017"
            dateInnerStyle={{ background: "#4285f4" }}
            style={{ color: "#4285f4" }}
            className="google"
          >
            <div className="image-container">
              <img src="/GoogleLogo.png" alt="Google Logo"></img>
              <div className="overlay">
                <div className="text">
                  Google LLC
                  <br />
                  Ann Arbor, MI / New York, NY
                </div>
              </div>
            </div>
            <h3>Technical Project Manager</h3>
            <h4>03/2017 - 06/2017</h4>
            <p>TODO fill this in.</p>
            <h3>Corporate Engineering Support Technician</h3>
            <h4>07/2016 - 03/2017</h4>
            <p>TODO fill this in.</p>
          </TimelineItem>
          <TimelineItem
            key="003"
            dateText="06/2015 – 08/2015"
            dateInnerStyle={{ background: "#e38a21" }}
            style={{ color: "#e38a21" }}
            className="optum"
          >
            <div className="image-container">
              <img src="/OptumUHGLogo.png" alt="Optum/UHG Logo"></img>
              <div className="overlay">
                <div className="text">
                  UnitedHealth Group Inc. / Optum
                  <br />
                  Hartford, CT
                </div>
              </div>
            </div>
            <h3>IT Security Intern</h3>
            <h4>06/2015 - 08/2015</h4>
            <p>TODO fill this in.</p>
          </TimelineItem>
          <TimelineItem
            key="004"
            dateText="08/2014 – 05/2016"
            dateInnerStyle={{ background: "#141c2c" }}
            style={{ color: "#141c2c" }}
            className="uconn"
          >
            <div className="image-container">
              <img
                src="/UConnSOBLogo.png"
                alt="UConn School of Business Logo"
              ></img>{" "}
              <div className="overlay">
                <div className="text">
                  UConn School of Business IT
                  <br />
                  Storrs, CT
                </div>
              </div>
            </div>
            <h3>Senior Technician</h3>
            <h4>01/2015 - 06/2016</h4>
            <p>TODO fill this in.</p>
            <h3>IT Technician</h3>
            <h4>08/2014 - 01/2015</h4>
            <p>TODO fill this in.</p>
          </TimelineItem>
        </Timeline>
      </div>
    );
  }
}
