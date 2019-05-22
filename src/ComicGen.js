import React, { Component } from "react";
import Header from "./components/Header/Header";
import routes from "./routes";
import Comic from './components/Comic/Comic.js'
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
        {routes}
        <Comic />
      </div>
    );
  }
}
