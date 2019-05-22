import React, { Component } from "react";
import {
  setTitle,
  setText,
  balloonToggleHandle,
  setBackground,
  setChar,
  setUserComic
} from "../../../redux/userToolsReducer";
import { connect } from "react-redux";

class ToolBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numOptions: []
    };
  }

  render() {
    const {
      titleInput,
      balloonInput,
      charInput,
      panelBackground,
      balloonToggle
    } = this.props;
    const { numOptions } = this.state;
    let chosenPanelNum = function() {
      let arr = [];
      for (let i = 1; i <= numOptions; i++) {
        arr.push(i);
      }
      return arr;
    };
    let mofo = chosenPanelNum();
    console.log(this.props.panels);
    return (
      <div>
        ToolBox
        <div>
          <div className="selectors">
            <input
              maxLength="1"
              type="text"
              onChange={e => {
                e.target.value.length <= 1 &&
                  this.setState({
                    numOptions: e.target.value
                  });
              }}
            />
          </div>
          <div>
            Panel Select:
            <select>
              {mofo.map(element => {
                return <option name={element}>{element}</option>;
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
              value={charInput}
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
          <div>
            <button
              onClick={() => this.props.balloonToggleHandle(!balloonToggle)}
            >
              Balloon?
            </button>
          </div>
          <div>
            <button onClick={this.props.setUserComic}>Confirm</button>
          </div>
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
    setChar: reduxState.setChar,
    panels: reduxState.panels
  };
};

const mapDispatchToProps = {
  setTitle,
  setText,
  balloonToggleHandle,
  setBackground,
  setChar,
  setUserComic
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolBox);
