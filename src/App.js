import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Sidenav from "./sidenav";
import ElementsCollection from "./elementsCollection";
import groups from "./data";
import Background from "./Background.js";

class App extends Component {
  state = {
    currentGroup: groups["أشخاص"],
    currentElement: groups["أشخاص"][0],
    selected: "أشخاص",
    bgColor: "lightBlue",
    iselement: true
  };

  selectGroup = event => {
    const group = groups[event.target.value];
    this.setState({ currentGroup: group, selected: event.target.value });
    if (event.target.value === "خلفيات") this.setState({ iselement: false });
    else this.setState({ iselement: true });
  };

  selectElement = element => this.setState({ currentElement: element });
  selectBg = bg => this.setState({ bgColor: bg });

  render() {
    console.log(this.state.iselement);
    return (
      <>
        <div className="bg" style={{ background: this.state.bgColor }} />
        <Sidenav element={this.state.currentElement} />

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

            {this.state.iselement ? (
              <ElementsCollection
                group={this.state.currentGroup}
                selectElement={this.selectElement}
              />
            ) : (
              <Background
                group={this.state.currentGroup}
                selectBg={this.selectBg}
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
              <input type="button" value={this.state.selected} />
            </div>

            {/*<div className="col-sm-2">
              <div className="row">
                <input type="button" value="خلفيات" />
              </div>
              <br />

              <div className="row">
                <input type="button" value="ألوان" />
              </div>
            </div>*/}

            <div className="col-sm-1">
              <div className="row">
                <input
                  type="button"
                  onClick={this.selectGroup}
                  value="خلفيات"
                  isTrue={false}
                />
              </div>
              <br />
              <div className="row">
                <input
                  type="button"
                  onClick={this.selectGroup}
                  value="حيوانات"
                  isTrue={true}
                />
              </div>
            </div>

            <div className="col-sm-1">
              <div className="row">
                <input
                  type="button"
                  onClick={this.selectGroup}
                  value="أشخاص"
                  isTrue={true}
                />
              </div>
              <br />
              <div className="row">
                <input
                  type="button"
                  onClick={this.selectGroup}
                  value="حيوانات"
                  isTrue={true}
                />
              </div>
            </div>
          </section>
        </footer>
      </>
    );
  }
}

export default App;
