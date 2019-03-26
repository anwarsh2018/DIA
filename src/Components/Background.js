import React, { Component } from "react";
import Colors from "./Colors.js";

//Redux
import { connect } from "react-redux";

class Background extends Component {
  render() {
    const elementsButtons = this.props.currentGroup.map(element => (
      <Colors element={element} key={element.color} />
    ));

    return <div className="row">{elementsButtons}</div>;
  }
}

const mapStateToProps = state => {
  return {
    currentGroup: state.groups.currentGroup
  };
};

export default connect(
  mapStateToProps,
  null
)(Background);
