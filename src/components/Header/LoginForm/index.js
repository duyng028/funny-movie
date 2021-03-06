import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doLoginRegisterRequest } from '../../../actions';
import './styles.scss';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  _onFormSubmit = event => {
    event.preventDefault();
    const { loginRegister } = this.props;
    const { email, password } = this.state;
    loginRegister({ email, password });
  };

  _onEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  _onPasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  _validateInputs = () => {
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { email, password } = this.state;
    console.log('reg.test(email)', reg.test(email));
    return reg.test(email) && password.length > 0;
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="login-form">
        <form onSubmit={this._onFormSubmit}>
          <input className="input-field" id="email" placeholder="Email" value={email} onChange={this._onEmailChange} />
          <input className="input-field" id="password" placeholder="Password" value={password} onChange={this._onPasswordChange} type="password" />
          <button className="button primary-button" disabled={!this._validateInputs()}>
            Login/Register
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { loginRegister: doLoginRegisterRequest }
)(LoginForm);
