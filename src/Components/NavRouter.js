import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter } from "react-router-dom";

//Components
import SideNav from "./SideNav";

// Action
// import * as actionCreators from "../Store/actions";

class NavRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={this.props.match.path} component={SideNav} />
      </Switch>
    );
  }
}

export default withRouter(
  connect(
    null,
    null
  )(NavRouter)
);
