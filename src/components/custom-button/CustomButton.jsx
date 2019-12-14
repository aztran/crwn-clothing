import React from "react";
import "./CustomButton.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherprops }) => {
  return (
    <button
      className={`custom-button ${isGoogleSignIn ? "google-sign-in" : ""}`}
      {...otherprops}
    >
      {children}
    </button>
  );
};

export default CustomButton;
