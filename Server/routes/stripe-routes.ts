import Router from "express";
import "dotenv/config";
import express from "express";
const stripeRouter = Router();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-08-01",
});

stripeRouter.get("/config", (req, res) => {
  res.send({ publishableKey: process.env.STRIPE_PUBLISHABLE_KEY });
});

stripeRouter.post("/create-payment-intent", async (req, res) => {
  const { amount } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "eur",
      automatic_payment_methods: {
        enabled: true,
      },
    });
    res.json({ client_secret: paymentIntent.client_secret });
  } catch (e) {
    console.log(e);
  }
});

stripeRouter.post("/create-new-order", async (req, res) => {
  const { email, address, cart, totalPrice } = req.body;
  try {
    const newOrder = {
      orderNumber: generateOrderNumber(),
      items: cart,
      totalPrice: totalPrice,
      shippingAddress: address,
      status: "order confirmed",
      emailAddress: email,
    };
    console.log(newOrder);
  } catch (e) {
    console.log(e);
  }
});

// stripeRouter.post(
//   "/webhook",
//   express.raw({ type: "application/json" }),
//   (request, response) => {
//     const sig = request.headers["stripe-signature"];

//     let event;

//     try {
//       event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
//     } catch (err: any) {
//       response.status(400).send(`Webhook Error: ${err.message}`);
//       return;
//     }

//     // Handle the event
//     switch (event.type) {
//       case "payment_intent.succeeded":
//         const paymentIntentSucceeded = event.data.object;
//         // Then define and call a function to handle the event payment_intent.succeeded
//         break;
//       // ... handle other event types
//       default:
//         console.log(`Unhandled event type ${event.type}`);
//     }
//     // Return a 200 response to acknowledge receipt of the event
//     response.send();
//   }
// );

stripeRouter.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  (request, response) => {
    let endpointSecret;
    endpointSecret =
      "whsec_dc19beb0c03e3abdfd182fa896ec805078ae97d7a7af52d1b529ae4f92f1ae84";

    const sig = request.headers["stripe-signature"];
    let data;
    let event;
    let eventType;

    //verify later for sec reasons. skip now till figure out error
    if (endpointSecret) {
      try {
        event = stripe.webhooks.constructEvent(
          request.body,
          sig,
          endpointSecret
        );
        console.log("webhook verified");
      } catch (err: any) {
        response.status(400).send(`Webhook Error: ${err.message}`);
        return;
      }
    } else {
      data = request.body.data.object;
      eventType = request.body.type;
    }
    if (eventType === "checkout.session.completed") {
    }
    // // Handle the event
    // if (event.type === "payment_intent.succeeded") {
    //   const paymentIntentSucceeded = event.data.object;
    //   console.log(paymentIntentSucceeded);
    //   // Then define and call a function to handle the event payment_intent.succeeded
    // } else {
    //   // ... handle other event types
    //   console.log(`Unhandled event type ${event.type}`);
    // }

    // // Return a 200 response to acknowledge receipt of the event
    response.send().end();
  }
);

// Function to generate order number
function generateOrderNumber(): string {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";

  let orderNumber = "";

  orderNumber += "44";

  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    orderNumber += letters.charAt(randomIndex);
  }
  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    orderNumber += numbers.charAt(randomIndex);
  }
  const randomIndex = Math.floor(Math.random() * letters.length);
  orderNumber += letters.charAt(randomIndex);
  return orderNumber;
}

export default stripeRouter;
