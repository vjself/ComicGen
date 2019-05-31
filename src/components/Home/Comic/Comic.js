import React, { Component } from "react";
import { Strip, Panel, Character, Balloon } from "react-komik";
import { connect } from "react-redux";
import bub from "../ToolBox/Chars/icon.svg";
import { saveUserComic, setTitle } from "../../../redux/userToolsReducer";
import "./Comic.css";
import Axios from "axios";

class Comic extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  saveUserComic = () => {
    Axios.post("/api/user/comic", {
      title: this.props.titleInput,
      panels: this.props.userComic
    }).then(res => {
      console.log("Front end Res--", res.data);
      this.props.saveUserComic(res.data);
    });
  };

  render() {
    console.log(this.props.userSavedComic);
    let panelInstance = this.props.userComic.map((panel, index) => {
      return (
        <Panel key={index} background={panel.bg}>
          <Balloon
            image={bub}
            top="30"
            left="20"
            text={panel.balloonText}
            align="left"
            height="100"
          />
          <Character image={panel.char} align="right" scale="0.1" />
        </Panel>
      );
    });
    return (
      <div className="comic-container">
        <>
          {this.props.userComic.length > 0 ? (
            <Strip title={this.props.titleInput} column="2">
              {panelInstance}
              <button id="save-settings" onClick={this.saveUserComic}>
                Save to Library
              </button>
            </Strip>
          ) : (
            <div
              style={{
                height: "500px",
                width: "500px",
                boxShadow: "2px 2px 5px grey"
              }}
            >
              <h2 id="temp">Comic will render here.</h2>
            </div>
          )}
        </>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    titleInput: reduxState.userToolsReducer.titleInput,
    userComic: reduxState.userToolsReducer.userComic
  };
};

const mapDispatchToProps = {
  saveUserComic,
  setTitle
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comic);
