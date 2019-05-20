import React, { Component } from "react";
import {
  setTitle,
  setText,
  balloonToggle,
  setBackground
} from "../../redux/userToolsReducer";
import { connect } from "react-redux";

export default class ToolBox extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        ToolBox
        <div>
           <select>
              <option>
                 1
              </option>
              <option>
                 2
              </option>
              <option>
                 3
              </option>
              <option>
                 4
              </option>
           </select>
           <input placeholder="Title..." type="text" value={this.props.titleInput} onChange={e => {
              this.props.setTitle(e.target.value)
           }} />
           <input placeholder="Text..." type="text" value={} onChange={e => [
              this.props.setText(e.target.value)
           ]} />
           <input placeholder="Background..." type="text" value={this.props.panelBackground} onChange={e => {
              this.props.setBackground(e.target.value)
           }} />
        </div>
      </div>
    );
  }
}



const mapStateToProps = reduxState => {
   return {
     user: reduxState.user,
     userComic:reduxState.userComic
   };
 };
 
 const mapDispatchToProps = {
    setTitle,
    setText,
    balloonToggle,
    setBackground
 };
 
 export default 
   connect(
     mapStateToProps,
     mapDispatchToProps
   )(ToolBox)
 