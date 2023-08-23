import "dotenv/config";
import * as paypal from "../paypal-api";
import Router from "express";
const paypalRouter = Router();
import { createOrder } from "../ordersdb/db";

paypalRouter.post("/create-paypal-order", async (req, res) => {
  try {
    const order = await paypal.createOrder(req.body);
    res.json(order);
  } catch (err: any) {
    res.status(500).send(err.message);
  }
});

paypalRouter.post("/capture-paypal-order", async (req, res) => {
  const { orderID, cart, totalPrice } = req.body;
  try {
    const captureData = await paypal.capturePayment(orderID);
    const shippingAddress = captureData.purchase_units[0].shipping;
    const emailAddress = captureData.payer.email_address;
    const orderId = captureData.id;
    const newOrder = {
      orderNumber: orderId,
      items: cart,
      totalPrice: totalPrice,
      shippingAddress: shippingAddress,
      status: "order confirmed",
      emailAddress: emailAddress,
      paymentMethod: "Paypal",
      orderDate: "",
      expectedDelivery: "",
    };
    createOrder(newOrder);
    res.json({ captureData });
  } catch (err: any) {
    res.status(500).send(err.message);
  }
});

export default paypalRouter;
