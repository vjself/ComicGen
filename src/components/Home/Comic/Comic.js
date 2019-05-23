import React, { Component } from "react";
import { Strip, Panel, Character, Balloon } from "react-komik";
import { connect } from "react-redux";

class Comic extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    // let panelInstance = this.props.panels.map((panel, index) => {
    //   return (
    //     <Panel key={index} background={panel.panelBackground}>
    //       <Character image={panel.char}>
    //         <Balloon text={panel.baloonText} />
    //       </Character>
    //     </Panel>
    //   );
    // });
    return (
      <div className="comic-container">
        <Strip title={"Title"} column="2">
          {/* {panelInstance} */}
        </Strip>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    title: reduxState.titleInput,
    panels: reduxState.panels
  };
};

export default connect(
  mapStateToProps,
  null
)(Comic);
