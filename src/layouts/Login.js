import React, { Component } from "react";
import InputDefault from '../components/utils/InputDefault';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickName: 'Frozen',
      password: '1234'
    }
  }
  render() {
    const {
      state
    } = this
    return (
    <div>
      Login
      <p>nickName: { state.nickName }</p>
      <InputDefault text={state.nickName} />
      <p>password: { state.password }</p>
    </div>
  )}
}

export default Login;
