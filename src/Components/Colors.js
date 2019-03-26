import React, { Component } from "react";

//Redux
import { connect } from "react-redux";
import * as actionCreators from "../Store/actions";

class Colors extends Component {
  render() {
    return (
      <button
        className="btn btn-outline-light m-2 col-3"
        value={this.props.element.color}
        onClick={() => {
          this.props.selectBackground(this.props.element.color);
        }}
      >
        {this.props.element.color}
      </button>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  selectBackground: background =>
    dispatch(actionCreators.selectBackground(background))
});

export default connect(
  null,
  mapDispatchToProps
)(Colors);
