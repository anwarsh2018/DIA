import React, { Component } from "react";
import Colors from "./Colors.js";

class Background extends Component {
  render() {
    const elementsButtons = this.props.group.map(element => (
      <div className="col-sm-2" key={element.color}>
        <Colors element={element} selectElement={this.props.selectBackground} />
      </div>
    ));

    return <div className="row">{elementsButtons}</div>;
  }
}

export default Background;
