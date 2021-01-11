import React, { Component } from "react";
import "./contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="image-container linkedin">
          <img src="/linkedin.png" alt="linkedin logo"></img>
          <a
            href="https://www.linkedin.com/in/kyle-macri/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="overlay">
              <div className="text">
                https://www.linkedin.com/in/kyle-macri/
              </div>
            </div>
          </a>
        </div>
        <div className="image-container gmail">
          <img src="/gmail.png" alt="gmail logo"></img>
          <a href="mailto:kyle@kylemacri.com" target="_blank" rel="noreferrer">
            <div className="overlay">
              <div className="text">kyle@kylemacri.com</div>
            </div>
          </a>
        </div>
        <div className="image-container github">
          <img src="/github.png" alt="github logo"></img>{" "}
          <a
            href="https://github.com/kmacri12"
            target="_blank"
            rel="noreferrer"
          >
            <div className="overlay">
              <div className="text">https://github.com/kmacri12</div>
            </div>
          </a>
        </div>
      </div>
    );
  }
}
