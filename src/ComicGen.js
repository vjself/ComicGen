import React, { Component } from "react";
import routes from "./routes";
import "./App.css";

export default class ComicGen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <div>{routes}</div>
      </div>
    );
  }
}
