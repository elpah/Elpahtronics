import "dotenv/config"; // loads variables from .env file
import express from "express";
import * as paypal from "../paypal-api";
import Router from "express";
const paypalRouter = Router();

// parse post params sent in body in json format

paypalRouter.post("/create-paypal-order", async (req, res) => {
  try {
    const order = await paypal.createOrder(req.body);
    res.json(order);
  } catch (err: any) {
    res.status(500).send(err.message);
  }
});

paypalRouter.post("/capture-paypal-order", async (req, res) => {
  const { orderID } = req.body;
  try {
    const captureData = await paypal.capturePayment(orderID);
    res.json(captureData);
  } catch (err: any) {
    res.status(500).send(err.message);
  }
});

export default paypalRouter;
