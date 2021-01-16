import React, { Component } from "react";
import "./title.css";

export default class Title extends Component {
  render() {
    return (
      <div
        className="title"
        style={{ backgroundImage: "url(/images/tech_bkg.png)" }}
      >
        <img src="/images/KyleMacri.png" alt="logo"></img>
      </div>
    );
  }
}
