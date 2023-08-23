import Router from "express";
import "dotenv/config";
import express from "express";
import { createOrder } from "../ordersdb/db";

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

  // let hours = currentDate.getHours();
  // let minutes = currentDate.getMinutes();
  // let seconds = currentDate.getSeconds();
  try {
    const orderNumber = generateOrderNumber();
    const newOrder = {
      orderNumber: orderNumber,
      items: cart,
      totalPrice: totalPrice,
      shippingAddress: address,
      status: "order confirmed",
      emailAddress: email,
      paymentMethod: "stripe",
      orderDate: getDate().orderDate,
      expectedDelivery: getDate().expectedDelivery,
    };
    // createOrder(newOrder);
    res.send(newOrder);
    //next Step, save order to db and send the order number to frontend
  } catch (e) {
    console.log(e);
  }
});
function getDate() {
  let currentDate = new Date();
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth() + 1;
  let day = currentDate.getDate();

  let deliveryDate = new Date(year, month - 1, day + 10); // Use a new Date object to calculate the correct delivery date
  let deliveryYear = deliveryDate.getFullYear();
  let deliveryMonth = deliveryDate.getMonth() + 1;
  let deliveryDay = deliveryDate.getDate();

  return {
    orderDate: `${day}-${month}-${year}`,
    expectedDelivery: `${deliveryDay}-${deliveryMonth}-${deliveryYear}`,
  };
}

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
