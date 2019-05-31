import React, { Component } from "react";
import arnold from "./Chars/arnold.png";
import anabelle from "./Chars/anabelle.png";
import beavis from "./Chars/beavis.png";
import goku from "./Chars/goku.png";
import pup from "./Chars/pup.png";
import plains from "./Chars/plains.jpg";
import clouds from "./Chars/clouds.jpeg";
import desert from "./Chars/desert.png";
import jungle from "./Chars/jungle.jpg";

import {
  setText,
  setBackground,
  setChar,
  setPanelNumber,
  setPanels,
  saveUserPanel,
  resetFields,
  renderComic
} from "../../../redux/userToolsReducer";
import { connect } from "react-redux";
import "./ToolBox.css";

class ToolBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  fieldController = () => {
    this.props.saveUserPanel();
    this.props.resetFields();
  };

  panelController = panel => {
    this.props.setPanelNumber(panel);
    this.props.resetFields();
  };

  render() {
    const { balloonInput, setPanels } = this.props;
    return (
      <div className="tool-box">
        <h2 id="toolbox-h">ToolBox</h2>
        {this.props.panels.length !== 0 ? (
          <div className="panel-select" id="ps">
            <select onChange={e => this.panelController(e.target.value)}>
              <option>--Select a Panel--</option>
              {this.props.panels.map((e, i) => {
                return <option name={i}>{i + 1}</option>;
              })}
            </select>
          </div>
        ) : (
          <div className="panel-select">
            <select
              id="panel-num"
              onChange={e => {
                e.target.value.length <= 1 && setPanels(+e.target.value);
              }}
            >
              <option>--How many panels?---</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </div>
        )}
        <div>
          <input
            className="txt-input"
            placeholder="Insert Dialogue Here..."
            type="text"
            value={balloonInput}
            onChange={e =>
              this.props.panelNumber.length
                ? this.props.setText(e.target.value)
                : alert("You must select a panel before moving forward.")
            }
          />
        </div>
        <div className="panel-select">
          <select
            onChange={e => {
              this.props.setChar(e.target.value);
            }}
          >
            <option>--Select Character--</option>
            <option value={arnold}>Arnold</option>
            <option value={anabelle}>Anabelle</option>
            <option value={pup}>Mr. Dog</option>
            <option value={goku}>Goku</option>
            <option value={beavis}>Beavis</option>
          </select>
        </div>
        <div className="panel-select">
          <select
            onChange={e => {
              this.props.setBackground(e.target.value);
            }}
          >
            <option>--Select an environment--</option>
            <option value={plains}>Plains</option>
            <option value={jungle}>Jungle</option>
            <option value={clouds}>Sky</option>
            <option value={desert}>Desert</option>
          </select>
        </div>
        <div className="confirm-btn">
          <button id="c-btn" onClick={this.fieldController}>
            Confirm Panel
          </button>
        </div>
        <div className="save-btn">
          <button id="c-btn" onClick={this.props.renderComic}>
            Render Comic
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    user: reduxState.userToolsReducer.user,
    balloonInput: reduxState.userToolsReducer.balloonInput,
    panelBackground: reduxState.userToolsReducer.panelBackground,
    char: reduxState.userToolsReducer.char,
    panels: reduxState.userToolsReducer.panels,
    panelNumber: reduxState.userToolsReducer.panelNumber
  };
};

const mapDispatchToProps = {
  setText,
  setBackground,
  setChar,
  setPanelNumber,
  setPanels,
  saveUserPanel,
  resetFields,
  renderComic
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolBox);
