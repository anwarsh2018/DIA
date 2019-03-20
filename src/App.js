import React, { Component } from "react";
// import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import groups from "./data";

//Components
import SideNav from "./Components/SideNav";
import ElementsCollection from "./Components/ElementsCollection";
import Background from "./Components/Background.js";

//Redux
import { connect } from "react-redux";
import * as actionCreators from "./Store/actions";

class App extends Component {
  state = {
    currentGroup: groups["أشخاص"],
    currentElement: groups["أشخاص"][0],
    selectedGroup: "أشخاص",
    bgColor: "lightBlue",
    isElement: true
  };

  selectGroup = event => {
    const group = groups[event.target.value];
    this.setState({ currentGroup: group, selectedGroup: event.target.value });
    if (event.target.value === "خلفيات") this.setState({ isElement: false });
    else this.setState({ isElement: true }); //Still not sure what this is for
  };

  selectElement = element => this.setState({ currentElement: element });
  selectBackground = bg => this.setState({ bgColor: bg });

  render() {
    return (
      <>
        <div className="bg" style={{ background: this.state.bgColor }} />
        <SideNav element={this.state.currentElement} />

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

            {this.state.isElement ? (
              <ElementsCollection
                group={this.state.currentGroup}
                selectElement={this.selectElement}
              />
            ) : (
              <Background
                group={this.state.currentGroup}
                selectBackground={this.selectBackground}
              />
            )}

            <div className="col-sm-1">
              <button type="button" className="btn btn-default btn-arrow-right">
                <span
                  className="glyphicon glyphicon-arrow-right"
                  aria-hidden="true"
                />
              </button>
            </div>
            <div className="col-sm-2">
              <input type="button" value={this.state.selectedGroup} />
            </div>

            <div className="col-sm-1">
              <div className="row">
                <input
                  type="button"
                  onClick={this.selectGroup}
                  value="خلفيات"
                  //isTrue={false}
                />
              </div>
              <br />
              <div className="row">
                <input
                  type="button"
                  onClick={this.selectGroup}
                  value="حيوانات"
                  //isTrue={true}
                />
              </div>
            </div>

            <div className="col-sm-1">
              <div className="row">
                <input
                  type="button"
                  onClick={this.selectGroup}
                  value="أشخاص"
                  //isTrue={true}
                />
              </div>
            </div>
          </section>
        </footer>
      </>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     position: state.auth.position,
//     currentGroup: state.groups.currentGroup,
//     currentElement: state.groups.currentElement,
//     selectedGroup: state.groups.selectedGroup,
//     bgColor: state.groups.bgColor
//   };
// };

const mapDispatchToProps = dispatch => ({
  selectGroup: groupName => dispatch(actionCreators.selectGroup(groupName)),
  selectElement: element => dispatch(actionCreators.selectElement(element)),
  selectBackground: background =>
    dispatch(actionCreators.selectBackground(background))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
