import React, { Component } from "react";
import ToolBox from "./ToolBox/ToolBox";
import Comic from "./Comic/Comic";
import "./Home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="home-cont">
        <h3>START NOW CREATE YOUR OWN COMIC STRIP!</h3>
        <div className="dash-container">
          <ToolBox />
          <Comic />
        </div>
      </div>
    );
  }
}
