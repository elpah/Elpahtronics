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
    // console.log(paymentIntent);
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
