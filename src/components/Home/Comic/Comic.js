import React, { Component } from "react";
import { Strip, Panel, Character, Balloon } from "react-komik";
import { connect } from "react-redux";
import bub from "../ToolBox/Chars/icon.svg";
import "./Comic.css";

class Comic extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log(this.props.userComic);
    let panelInstance = this.props.userComic.map((panel, index) => {
      console.log(panel);
      return (
        <Panel key={index} background={panel.bg}>
          <Balloon
            image={bub}
            top="20"
            left="10"
            text={panel.balloonText}
            align="left"
            height="100"
          />
          <Character image={panel.char} align="right" scale="0.2" />
        </Panel>
      );
    });
    return (
      <div className="comic-container">
        <>
          {this.props.userComic.length > 0 && (
            <Strip title="" column="2">
              {panelInstance}
            </Strip>
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

export default connect(
  mapStateToProps,
  null
)(Comic);
