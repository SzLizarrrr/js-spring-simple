import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class Auth extends Component {

    componentWillMount() {
      if(!this.props.loggedIn) {
        this.props.history.push('/login');
      }
    }

    render() {
      return  <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { loggedIn: state.loggedIn };
  }

  return connect(mapStateToProps)(Auth);

}