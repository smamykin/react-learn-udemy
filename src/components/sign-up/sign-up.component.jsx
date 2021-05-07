import React from 'react';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";

import './sign-up.styles.scss';
import {signUpStart} from "../../redux/user/user.actions";
import {connect} from "react-redux";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  }

  handleSubmit = async event => {
    event.preventDefault();

    const {displayName, email, password, confirmPassword } = this.state;
    const {signUpStart} = this.props;

    if (password !== confirmPassword) {
      alert("pasword don't match")
      return;
    }

    signUpStart({displayName, email, password });
  }

  handleChange = event => {
    const {name, value} = event.target;

    this.setState({[name]: value})
  }

  render() {
    const {displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>SIgn up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
          />
          <FormInput
            type='text'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
          />
          <CustomButton type='submit'> SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProp = dispatch => ({
  signUpStart: (newUserData) => dispatch(signUpStart(newUserData))
});

export default connect(null, mapDispatchToProp)(SignUp);