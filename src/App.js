import React, { Component } from "react";
// import { Switch, Route, Redirect, withRouter } from "react-router-dom";

//Components
import SideNav from "./Components/SideNav";
import ElementsCollection from "./Components/ElementsCollection";
import Background from "./Components/Background.js";

//Redux
import { connect } from "react-redux";
import * as actionCreators from "./Store/actions";

class App extends Component {
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
      <>
        <div className="bg" style={{ background: this.props.bgColor }} />
        <SideNav />

        <footer className="container-fluid text-center">
          <section className="row">
            <div className="col-sm-1">
              <button type="button" className="btn btn-default btn-arrow-left">
                <span
                  className="glyphicon glyphicon-arrow-left"
                  aria-hidden="true"
                />
              </button>
            </div>

            {this.state.isElement ? <ElementsCollection /> : <Background />}

            <div className="col-sm-1">
              <button type="button" className="btn btn-default btn-arrow-right">
                <span
                  className="glyphicon glyphicon-arrow-right"
                  aria-hidden="true"
                />
              </button>
            </div>
            <div className="col-sm-2">
              <input type="button" value={this.props.selectedGroup} />
            </div>

            <div className="col-sm-1">
              <div className="row">
                <input
                  type="button"
                  onClick={this.selectGroup}
                  value="خلفيات"
                />
              </div>
              <br />
              <div className="row">
                <input
                  type="button"
                  onClick={this.selectGroup}
                  value="حيوانات"
                />
              </div>
            </div>

            <div className="col-sm-1">
              <div className="row">
                <input type="button" onClick={this.selectGroup} value="أشخاص" />
              </div>
            </div>
          </section>
        </footer>
      </>
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
)(App);
