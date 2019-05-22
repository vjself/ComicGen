import React, { Component } from "react";
import Header from "./components/Header/Header";
import routes from "./routes";
import Comic from './components/Comic/Comic.js'
import "./ComicGen.css";


export default class ComicGen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div>{routes}</div>
      </div>
    );
  }
}
