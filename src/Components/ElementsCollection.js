import React, { Component } from "react";
import Elements from "./Elements";

class ElementsCollection extends Component {
  render() {
    const elementsButtons = this.props.group.map(element => (
      <Elements
        key={element.element}
        element={element}
        selectElement={this.props.selectElement}
      />
    ));

    return <div className="row">{elementsButtons}</div>;
  }
}

export default ElementsCollection;
