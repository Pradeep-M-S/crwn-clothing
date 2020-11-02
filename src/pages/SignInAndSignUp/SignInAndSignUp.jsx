import React from "react";
import "./SignInAndSignUp.scss";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
const SignInAndSignUp = () => {
  return (
    <div className="signinandsignup">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
