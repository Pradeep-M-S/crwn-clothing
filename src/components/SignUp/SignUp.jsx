import React from "react";
import { connect } from "react-redux"
import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../FormInput/FormInput";
import { signUpStart } from "../../redux/user/user-actions"
import "./SignUp.scss";
import { VscSignIn } from "react-icons/vsc";
import { IconContext } from "react-icons";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { signUpStart } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }
    signUpStart({ displayName, email, password });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <IconContext.Provider value={{ size: "28px" }}>
        <div className="sign-up">
          <h2 className="title">I do not have an account</h2>
          <span>Sign up with E-Mail and Password</span>
          <form className="sign-up-form" onSubmit={this.handleSubmit}>
            <FormInput
              type="text"
              name="displayName"
              value={displayName}
              label="Name"
              handleChange={this.handleChange}
              required
            ></FormInput>
            <FormInput
              type="email"
              name="email"
              value={email}
              label="Email"
              handleChange={this.handleChange}
              required
            ></FormInput>
            <FormInput
              type="password"
              name="password"
              value={password}
              label="Password"
              handleChange={this.handleChange}
              required
            ></FormInput>
            <FormInput
              type="password"
              name="confirmPassword"
              label="Confirm Password"
              value={confirmPassword}
              handleChange={this.handleChange}
              required
            ></FormInput>
            <CustomButton type="submit">
              <VscSignIn className="icon" />
              Sign Up
            </CustomButton>
          </form>
        </div>
      </IconContext.Provider>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);
