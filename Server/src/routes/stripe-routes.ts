import Router from "express";
import "dotenv/config";
import { createOrder } from "../ordersdb/db";
import {
  getDate,
  sendOrderEmail,
  generateOrderNumber,
} from "./generalFunctions";

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
  const { email, address, cart, totalPrice, fbId } = req.body;
  try {
    const orderNumber = generateOrderNumber();
    const newOrder = {
      fbId: fbId,
      orderNumber: orderNumber,
      items: cart,
      totalPrice: totalPrice,
      shippingAddress: address,
      status: "order confirmed",
      emailAddress: email.toLowerCase(),
      paymentMethod: "visa",
      orderDate: getDate().orderDate,
      expectedDelivery: getDate().expectedDelivery,
      deliveryOptions: "fedex",
    };
    createOrder(newOrder);
    sendOrderEmail(email, orderNumber, cart, totalPrice);
    res.send(newOrder);
  } catch (e) {
    console.log(e);
  }
});

export default stripeRouter;
