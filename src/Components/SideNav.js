import React, { Component } from "react";

class SideNav extends Component {
  render() {
    const element = this.props.element;
    const videoURL = element.meta.link;
    const elementText = element.meta.text;
    return (
      <div className="container-fluid">
        <div className="col-sm-8 text-center">
          <div className="col-sm-4 sidenav">
            <div className="well">
              <iframe width="120" height="120" src={videoURL} title="vid" />
            </div>

            <div className="well">
              <p>{elementText}</p>
            </div>

            <div className="well">
              <div className="row">
                <video autoPlay width="200" height="200" />
              </div>
              <br />

              <div className="row">
                <div className="col-sm-6 text-center">
                  <input
                    type="button"
                    value="Start"
                    onClick={console.log("stop")}
                    style={{
                      height: 30,
                      maxWidth: 50
                    }}
                  />
                </div>
                <div className="col-sm-6 text-center">
                  <input
                    id="clickMe"
                    type="button"
                    value="Stop"
                    onClick={console.log("stop")}
                    style={{
                      height: 30,
                      maxWidth: 50
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SideNav;
