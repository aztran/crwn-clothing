import React from "react";
import "./CustomButton.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherprops
}) => {
  return (
    <button
      className={`custom-button ${isGoogleSignIn ? "google-sign-in" : ""} ${
        inverted ? "inverted" : ""
      }`}
      {...otherprops}
    >
      {children}
    </button>
  );
};

export default CustomButton;
