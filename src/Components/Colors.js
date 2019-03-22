import React, { Component } from "react";

//Redux
import { connect } from "react-redux";
import * as actionCreators from "../Store/actions";

class Colors extends Component {
  render() {
    return (
      <div className="col-sm-1">
        <div className="row">
          <button
            className="button"
            value={this.props.element.color}
            onClick={() => {
              this.props.selectBackground(this.props.element.color);
            }}
          >
            {this.props.element.color}
          </button>
        </div>
      </div>
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
