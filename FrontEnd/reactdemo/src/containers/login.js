import React, {Component} from 'react';
import { connect } from 'react-redux';
import { login } from "../actions/actions-auth";

class Login extends Component {

  login = () => {
    this.props.login();
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="container">
        <h2>Login Page</h2>
        <button className="btn btn-primary" onClick={this.login}>Click to Login</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { loggedIn: state.loggedIn };
}

export default connect(mapStateToProps, {login})(Login);