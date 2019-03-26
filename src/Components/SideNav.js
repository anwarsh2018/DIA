import React, { Component } from "react";

//Redux
import { connect } from "react-redux";
// import * as actionCreators from "../Store/actions";

class SideNav extends Component {
  render() {
    const element = this.props.currentElement;
    const videoURL = element.meta.link;
    const elementText = element.meta.text;
    return (
      <div>
        <iframe
          width="150"
          height="150"
          className="mt-3 mx-auto"
          src={videoURL}
          title="vid"
        />
        <h3 className="text-center">{elementText}</h3>
        <video autoPlay width="150" height="150" className="mx-auto" />
        <div className="row">
          <input
            type="button"
            value="Start"
            onClick={() => console.log("stop")}
            className="col-5 mx-auto btn btn-info mb-2"
          />
          <input
            id="clickMe"
            type="button"
            value="Stop"
            onClick={() => console.log("stop")}
            className="col-5 mx-auto btn btn-info mb-2"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentElement: state.groups.currentElement
  };
};

export default connect(
  mapStateToProps,
  null
)(SideNav);
