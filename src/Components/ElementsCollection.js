import React, { Component } from "react";
import Elements from "./Elements";
import Loading from "./Loading";

//Redux
import { connect } from "react-redux";
import * as actionCreators from "../Store/actions";

class ElementsCollection extends Component {
  render() {
    if (!this.props.currentGroup) {
      return <Loading />;
    } else {
      const elementsButtons = this.props.currentGroup.map((element, idx) => (
        <Elements
          key={element.element + idx}
          element={element}
          selectElement={this.props.selectElement}
        />
      ));

      return <div className="row p-1 m-2 mx-auto">{elementsButtons}</div>;
    }
  }
}

const mapStateToProps = state => {
  return {
    currentGroup: state.groups.currentGroup
  };
};

const mapDispatchToProps = dispatch => ({
  selectElement: element => dispatch(actionCreators.selectElement(element))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ElementsCollection);
