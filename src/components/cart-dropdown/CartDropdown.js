import React from "react";
import "./CartDropdown.scss";
import CustomButton from "../custom-button/CustomButton";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <CustomButton>Go To Checkout</CustomButton>
      </div>
    </div>
  );
};

export default CartDropdown;
