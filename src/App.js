import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

//Components
import LandingPage from "./Components/LandingPage";

//Redux
// import { connect } from "react-redux";
// import * as actionCreators from "./Store/actions";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/home" component={LandingPage} />

          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
