import "dotenv/config";
import Router from "express";
const ordersRouter = Router();

import { getOrdersByFbId } from "../ordersdb/db";

ordersRouter.get("/orders-by-fbId", async (req, res) => {
  const { fbId } = req.query;

  try {
    console.log("Received fbId:", fbId);
    console.log("Type of fbId:", typeof fbId);

    if (typeof fbId !== "string") {
      return res.status(400).send("Invalid fbId");
    }

    const orders = await getOrdersByFbId(fbId);

    if (!orders || orders.length === 0) {
      return res.status(404).send("No orders found");
    }

    console.log("Orders:", orders);
    res.status(200).json(orders);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("Internal Server Error");
  }
});

export default ordersRouter;
