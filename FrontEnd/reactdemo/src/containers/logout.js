import React, {Component} from 'react';
import { connect } from 'react-redux';
import { logout } from "../actions/actions-auth";

class Logout extends Component {

  logout = () => {
    this.props.logout();
    this.props.history.push('/login');
  }

  render() {
    return (
      <div className="container">
        <h2>Logout Page</h2>
        <button className="btn btn-primary" onClick={this.logout}>Click to Logout</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { loggedIn: state.loggedIn };
}

export default connect(mapStateToProps, {logout})(Logout);