import React from "react";
import StripeCheckout from "react-stripe-checkout";
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HDnhsDo4oDyzQeKbDLPGGTEm0srO0HhDn43GlRTLnNEkFNqDbHSaaZV52KDKfSg1vs22jlWY7H5YtoDMdUZ4LyE004mtRyg1C";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Success");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN CLothing Ltd"
      billingAddress
      shippingAddress
      image="https://stripe.com/img/documentation/checkout/marketplace.png"
      description={`Your Price is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    ></StripeCheckout>
  );
};

export default StripeCheckoutButton;
