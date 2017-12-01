import React, { Component } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import PendingPage from '../PendingPage';
import './auth.css';

export default class AuthPrompt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideAlert: false
    };
    this.checkAuth = this.checkAuth.bind(this);
  }

  checkAuth(val) {
    if (val === "meow") {
      this.setState({hideAlert: true});
      this.props.checkReady(true);
    }
  }

  render() {
    return(
      <div>
        <SweetAlert
        	input
        	inputType="password"
        	title="Password"
        	required
          show={!this.state.hideAlert}
          validationMsg="You must enter a password!"
        	onConfirm={this.checkAuth}
          confirmBtnText="SUBMIT"
          confirmBtnBsStyle='primary'
        />
        <PendingPage />
      </div>
    );
  }
}
