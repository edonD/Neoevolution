import React from "react";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripeSecretKey = process.env.STRIPE_SECRET;
const stripePromise = loadStripe(stripeSecretKey);

function index() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: "{{CLIENT_SECRET}}",
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      {/* <CheckoutForm /> */}
    </Elements>
  );
}

export default index;
