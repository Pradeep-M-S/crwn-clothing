import React, { Component } from "react";
import "./SignIn.scss";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import { signInWithGoogle } from "../../firebase/firebase.utility";
import { AiFillGoogleCircle } from "react-icons/ai";
import { VscSignIn } from "react-icons/vsc";
import { IconContext } from "react-icons";
import { auth } from "../../firebase/firebase.utility";
class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value }, console.log(this.state));
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return (
      <IconContext.Provider value={{ size: "28px" }}>
        <div className="sign-in" style={{ textAlign: "center" }}>
          <h2 className="title">i already have an account</h2>
          <span>Sign up with E-Mail and Password</span>
          <form onSubmit={this.handleSubmit}>
            <FormInput
              name="email"
              type="email"
              handleChange={this.handleChange}
              value={this.state.email}
              label="Email"
              required
            />
            <FormInput
              name="password"
              type="password"
              value={this.state.password}
              required
              label="Password"
              handleChange={this.handleChange}
            />
            <CustomButton type="submit">
              <VscSignIn className="icon" />
              Sign In
            </CustomButton>
            <CustomButton
              type="submit"
              onClick={signInWithGoogle}
              color="#4285F4"
            >
              <AiFillGoogleCircle className="icon" />
              Sign in - Google
            </CustomButton>
          </form>
        </div>
      </IconContext.Provider>
    );
  }
}

export default SignIn;
