import React, { Component } from "react";
import Colors from "./Colors.js";

//Redux
import { connect } from "react-redux";

class Background extends Component {
  render() {
    const elementsButtons = this.props.currentGroup.map(element => (
      <div className="col-sm-2" key={element.color}>
        <Colors element={element} />
      </div>
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
