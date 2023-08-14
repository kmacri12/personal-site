import React, { Component } from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import "./education.css";

export default class Education extends Component {
  render() {
    return (
      <div className="tl">
        <Timeline>
          <TimelineItem
            key="001"
            dateText="01/2020 – 05/2023"
            dateInnerStyle={{ background: "#000000" }}
            style={{ color: "#000000" }}
            className="gatech"
          >
            <div className="image-container">
              <img src="/images/GeorgiaTech.png" alt="Georgia Tech Logo"></img>
              <div className="overlay">
                <div className="text">
                  Georgia Institute of Technology
                  <br />
                  Atlanta, GA
                </div>
              </div>
            </div>
            <h3>Master of Science in Computer Science</h3>
            <h4>Machine Learning Specialization</h4>
            <h5>4.0 GPA</h5>
          </TimelineItem>
          <TimelineItem
            key="002"
            dateText="08/2012 – 05/2016"
            dateInnerStyle={{ background: "#141c2c" }}
            style={{ color: "#141c2c" }}
            className="uconn-edu"
          >
            <div className="image-container">
              <img src="/images/UConnLogo.png" alt="UConn Logo"></img>
              <div className="overlay">
                <div className="text">
                  University of Connecticut
                  <br />
                  Storrs, CT
                </div>
              </div>
            </div>
            <h3>Bachelor of Science</h3>
            <h4>Management Information Systems Major</h4>
            <h4>Computer Science Minor</h4>
          </TimelineItem>
        </Timeline>
      </div>
    );
  }
}
