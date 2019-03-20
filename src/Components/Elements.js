import React, { Component } from "react";
import posed from "react-pose";

const Box = posed.div({
  draggable: true,
  dragBounds: {
    top: "-450%",
    bottom: "450%",
    left: "-600%",
    right: "750%"
  }
});
class Elements extends Component {
  state = {
    objs: [],
    y: 0,
    x: 0,
    counter: 1
  };

  componentDidUpdate(prevState) {
    if (prevState.x !== this.state.x) {
      // let item = { x: this.state.x, y: this.state.y };
      // console.log(this.state.objs);
    }
  }

  addObj = elementText => {
    let objs = (
      <Box
        style={{ position: "fixed", bottom: " 450px", left: "550px" }}
        className="box"
        onValueChange={{
          y: y => this.setState({ y: y }),
          x: x => this.setState({ x: x })
        }}
      />
    );
    this.setState({
      objs: this.state.objs.concat({ objs: objs, id: this.state.counter }),
      counter: this.state.counter + 1
    });
  };
  render() {
    const element = this.props.element;
    // const videoURL = element.meta.link;
    const elementText = element.meta.text;
    let boxes = this.state.objs.map(box => box.objs);
    // console.log("obj", elementsadded.objs);
    return (
      <div className="col-sm-1">
        <div className="row">
          <button
            className="button"
            value={elementText}
            onClick={() => {
              this.props.selectElement(element);
              this.addObj(elementText);
            }}
          >
            {elementText}
          </button>
        </div>
        {boxes}
      </div>
    );
  }
}
export default Elements;
