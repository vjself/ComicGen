import React, { Component } from "react";
import {
  setTitle,
  setText,
  balloonToggleHandle,
  setBackground,
  setChar,
  setPanelNumber,
  setPanels,
  saveUserPanel,
  resetFields,
  saveUserComic
} from "../../../redux/userToolsReducer";
import { connect } from "react-redux";

class ToolBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  fieldController = () => {
    this.props.saveUserPanel();
    this.props.resetFields();
  };

  render() {
    const {
      titleInput,
      balloonInput,
      char,
      panelBackground,
      balloonToggle,
      setPanels
    } = this.props;

    return (
      <div>
        ToolBox
        <div>
          <div className="selectors">
            <input
              maxLength="1"
              placeholder="How many panels?"
              type="text"
              onChange={e => {
                e.target.value.length <= 1 && setPanels(e.target.value);
              }}
            />
          </div>
          <div>
            Panel Select:
            <select>
              {this.props.panels.map((e, i) => {
                this.props.setPanelNumber(i);
                return <option name={i}>{i}</option>;
              })}
            </select>
          </div>
          <div>
            <input
              placeholder="Title..."
              type="text"
              value={titleInput}
              onChange={e => {
                this.props.setTitle(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              placeholder="Text..."
              type="text"
              value={balloonInput}
              onChange={e => this.props.setText(e.target.value)}
            />
          </div>
          <div>
            <input
              placeholder="Character..."
              type="text"
              value={char}
              onChange={e => this.props.setChar(e.target.value)}
            />
          </div>
          <div>
            <input
              placeholder="Background..."
              type="text"
              value={panelBackground}
              onChange={e => {
                this.props.setBackground(e.target.value);
              }}
            />
          </div>
          <div className="balloon-toggle">
            <h2>Balloon?</h2>
            <button
              onClick={() => this.props.balloonToggleHandle(!balloonToggle)}
            >
              {this.props.balloonToggle === true ? "On" : "Off"}
            </button>
          </div>
          <div>
            <button onClick={this.fieldController}>Confirm</button>
          </div>
          <div>
            <button onClick={this.props.saveUserComic}>SaveComic</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    user: reduxState.userToolsReducer.user,
    titleInput: reduxState.userToolsReducer.titleInput,
    balloonInput: reduxState.userToolsReducer.balloonInput,
    panelBackground: reduxState.userToolsReducer.panelBackground,
    balloonToggle: reduxState.userToolsReducer.balloonToggle,
    char: reduxState.userToolsReducer.char,
    panels: reduxState.userToolsReducer.panels
  };
};

const mapDispatchToProps = {
  setTitle,
  setText,
  balloonToggleHandle,
  setBackground,
  setChar,
  setPanelNumber,
  setPanels,
  saveUserPanel,
  resetFields,
  saveUserComic
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolBox);
