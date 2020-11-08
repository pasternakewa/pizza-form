import React, { Component } from "react";
import CheckBox from "./CheckBox";

class Checkboxes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      extrasState: [],
      extras: [
        { id: "sos BBQ", value: "sos BBQ", isChecked: false },
        { id: "sos aioli", value: "sos aioli", isChecked: false },
        { id: "sos czosnkowy", value: "sos czosnkowy", isChecked: false }
      ]
    };
  }

  handleCheckChieldElement = (event) => {
    let extras = this.state.extras;
    extras.forEach((extra) => {
      if (extra.value === event.target.value) {
        extra.isChecked = event.target.checked;
        let newExtrasState = this.state.extrasState.filter(
          (el) => el !== extra.value
        );

        if (this.state.extrasState.includes(extra.value)) {
          this.setState({
            ...extras,
            extrasState: newExtrasState
          });
        } else {
          this.setState({
            ...extras,
            extrasState: [...this.state.extrasState, extra.value]
          });
        }
      }
    });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.extras.map((fruite) => {
            return (
              <CheckBox
                handleCheckChieldElement={this.handleCheckChieldElement}
                {...fruite}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Checkboxes;
