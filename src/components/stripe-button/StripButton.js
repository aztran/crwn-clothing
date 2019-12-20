import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_uvKh8OS0rsXotL2eE1eORJk0009Bs1n4Ck";

  const onToken = token => {
    console.log(token);
    alert("payment successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing"
      billingAddress
      shippingAddress
      //   image="https://svgshare.com/i/CUz.svg"
      description={`Your Total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripButton;
