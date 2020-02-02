import React from "react";
import "./SignInSignUp.scss";
import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/sign-up";
const SignInSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUp;
