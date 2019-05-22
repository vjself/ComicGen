import React, { Component } from "react";
import {
  setTitle,
  setText,
  balloonToggle,
  setBackground,
  setChar
} from "../../redux/userToolsReducer";
import { connect } from "react-redux";

class ToolBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.titleInput);
    return (
      <div>
        ToolBox
        <div>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
          <input
            placeholder="Title..."
            type="text"
            value={this.props.titleInput}
            onChange={e => {
              this.props.setTitle(e.target.value);
            }}
          />
          <input
            placeholder="Text..."
            type="text"
            value={this.props.balloonInput}
            onChange={e => this.props.setText(e.target.value)}
          />
          <input
            placeholder="Character..."
            type="text"
            value={this.props.char}
            onChange={e => this.props.setText(e.target.value)}
          />
          <input
            placeholder="Background..."
            type="text"
            value={this.props.panelBackground}
            onChange={e => {
              this.props.setBackground(e.target.value);
            }}
          />
          <button onChange={this.props.setUserComic}>Confirm?</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    user: reduxState.user,
    userComic: reduxState.userComic,
    titleInput: reduxState.titleInput,
    balloonInput: reduxState.balloonInput,
    panelBackground: reduxState.panelBackground,
    balloonToggle: reduxState.balloonToggle,
    char:reduxState.char
  };
};

const mapDispatchToProps = {
  setTitle,
  setText,
  balloonToggle,
  setBackground,
  setChar
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolBox);
