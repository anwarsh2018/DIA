import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class Colors extends Component {
  render() {
    return (
      <div className="col-sm-1">
        <div className="row">
          <button
            className="btn btn-primary"
            value={this.props.element.color}
            onClick={() => {
              this.props.selectElement(this.props.element.color);
            }}
          >
            {this.props.element.color}
          </button>
        </div>
      </div>
    );
  }
}
export default Colors;
