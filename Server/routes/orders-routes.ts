import "dotenv/config";
import Router from "express";
const ordersRouter = Router();

import { getOrdersByFbId, getOrderByOrderNumber } from "../ordersdb/db";

ordersRouter.get("/orders-by-fbId", async (req, res) => {
  const { fbId } = req.query;

  try {
    if (typeof fbId !== "string") {
      return res.status(400).send("Invalid fbId");
    }

    const orders = await getOrdersByFbId(fbId);

    if (!orders || orders.length === 0) {
      return res.status(404).send("No orders found");
    }

    res.status(200).json(orders);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

ordersRouter.get("/orders-by-order-number", async (req, res) => {
  const { orderNumber } = req.query;

  try {
    if (typeof orderNumber !== "string") {
      return res.status(400).send("Invalid fbId");
    }

    const order = await getOrderByOrderNumber(orderNumber);

    if (!order) {
      return res.status(404).send("No orders found");
    }

    res.status(200).json(order);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

export default ordersRouter;
