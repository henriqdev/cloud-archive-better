import React, { Component } from "react";

class InputDefault extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }
  render() {
    return (
    <div>
      <input />
    </div>
  )}
}

export default InputDefault;
