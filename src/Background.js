import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Colors from "./Colors.js";

class Background extends Component {
  render() {
    const elementsButtons = this.props.group.map(element => (
      <div className="col-sm-2">
        {
          <Colors
            key={element.color}
            element={element}
            selectElement={this.props.selectBg}
          />
        }
      </div>
    ));

    return <div className="row">{elementsButtons}</div>;
  }
}

export default Background;
