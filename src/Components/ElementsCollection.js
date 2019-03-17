import React, { Component } from "react";
import Elements from "./Elements";

class ElementsCollection extends Component {
  state = {
    objs: []
  };
  render() {
    const elementsButtons = this.props.group.map(element => (
      <div>
        {
          <Elements
            key={element.element}
            element={element}
            selectElement={this.props.selectElement}
          />
        }
      </div>
    ));

    return <div className="row">{elementsButtons}</div>;
  }
}

export default ElementsCollection;
