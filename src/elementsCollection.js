import React, { Component } from "react";
import "./App.css";
import Elements from "./elements";

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

    {
      /*<div className="col-sm-1">
          <div className="row">
            <input type="button" value="C7" />
          </div>
          <br />
          <div className="row">
            <input type="button" value="C8" />
          </div>
        </div>
        <div className="col-sm-1">
          <div className="row">
            <input type="button" value="C5" />
          </div>
          <br />
          <div className="row">
            <input type="button" value="C6" />
          </div>
        </div>
        <div className="col-sm-1">
          <div className="row">
            <input type="button" value="C3" />
          </div>
          <br />
          <div className="row">
            <input type="button" value="C4" />
          </div>
        </div>
        <div className="col-sm-1">
          <div className="row">
            <input type="button" value="C1" />
          </div>
          <br />
          <div className="row">
            <input type="button" value="C2" />
          </div>
        </div>*/
    }
  }
}

export default ElementsCollection;
