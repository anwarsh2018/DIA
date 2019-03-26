import React, { Component } from "react";

//Components
import SideNav from "./SideNav";
import ElementsCollection from "./ElementsCollection";
import Background from "./Background.js";

//Redux
import { connect } from "react-redux";
import * as actionCreators from "../Store/actions";

class LandingPage extends Component {
  state = {
    isElement: true
  };

  selectGroup = event => {
    this.props.selectGroup(event.target.value);
    if (event.target.value === "خلفيات") this.setState({ isElement: false });
    else this.setState({ isElement: true }); //Still not sure what this is for
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-9" style={{ background: this.props.bgColor }}>
            <p>iuhiuh</p>
          </div>
          <div className="col-3">
            <SideNav />
          </div>
        </div>

        <div className="bg-dark row">
          <div className="col-6">
            <div className="row">
              {this.state.isElement ? <ElementsCollection /> : <Background />}
            </div>
          </div>

          <div className="col-3 p-3">
            <input
              type="button"
              value={this.props.selectedGroup}
              className="btn btn-info m-auto"
            />
          </div>

          <div className="col-3 p-3">
            <div className="row mb-3">
              <input
                type="button"
                className="btn btn-info mx-auto col-5"
                onClick={this.selectGroup}
                value="خلفيات"
              />
              <input
                type="button"
                className="btn btn-info mx-auto col-5"
                onClick={this.selectGroup}
                value="حيوانات"
              />
            </div>
            <input
              type="button"
              className="btn btn-info mx-auto col-5"
              onClick={this.selectGroup}
              value="أشخاص"
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentGroup: state.groups.currentGroup,
    selectedGroup: state.groups.selectedGroup,
    bgColor: state.groups.backgroundColor
  };
};

const mapDispatchToProps = dispatch => ({
  selectGroup: groupName => dispatch(actionCreators.selectGroup(groupName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);
