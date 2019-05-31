import React, { Component } from "react";
import "./Dashboard.css";
import Cloudinary from "../Cloudinary/Cloudinary";
import axios from "axios";

//import the user's comic creations

export default class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      comics: [],
      edit: false
    };
    this.getOne = this.getOne.bind(this);
  }
  componentDidMount() {
    this.getOne();
  }
  getOne() {
    axios.get("/api/dashComics/").then(res => {
      this.setState({
        comic: res.data
      });
    });
  }

  render() {
    const { comic } = this.state;
    return (
      // This will be to conditionally render the user profile or other profiles
      // <div>
      //     {
      //         ?
      //         :
      //     }
      // </div>

      // This is for everything on the dashboard page
      <div class="Dashboard">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <h1>Dashboard</h1>

        {/* This is for all of the user's comics */}
        <div class="Comic-Creations">
          <br />
          <br />
          <br />
          <h2>Comic Creations</h2>
          <br />
          <Cloudinary />
        </div>

        {/* This is for the comic boxes */}
        <div class="Comic-Boxes">
          {/* Individual boxes */}
          <div class="flex-container">Box 1</div>
          <div class="flex-container">Box 2</div>
        </div>
      </div>
    );
  }
}
