import React, { Component } from "react";

class Elements extends Component {
  render() {
    const element = this.props.element;
    const elementText = element.meta.text;

    return (
      <button
        className="btn btn-outline-light col-3 m-2"
        value={elementText}
        onClick={() => {
          this.props.selectElement(element);
        }}
      >
        {elementText}
      </button>
    );
  }
}
export default Elements;
