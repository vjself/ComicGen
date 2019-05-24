import React, { Component } from "react";
import { Strip, Panel, Character, Balloon } from "react-komik";
import { connect } from "react-redux";
import "./Comic.css";

class Comic extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log(this.props);
    let panelInstance = this.props.userComic.map((panel, index) => {
      console.log(panel);
      return (
        <Panel key={index} background={panel.bg}>
          <Character image={panel.char}>
            {panel.balloonBool === true && <Balloon text={panel.balloonText} />}
          </Character>
        </Panel>
      );
    });
    return (
      <div className="comic-container">
        <div />
        <Strip title="" column="2">
          {panelInstance}
        </Strip>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  console.log(reduxState);
  return {
    titleInput: reduxState.userToolsReducer.titleInput,
    userComic: reduxState.userToolsReducer.userComic
  };
};

export default connect(
  mapStateToProps,
  null
)(Comic);
