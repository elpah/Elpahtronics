import * as mongoDB from "mongodb";
import client from "../db/client";
import { v4 as uuidv4 } from "uuid";
let db: mongoDB.Db;

const connectToDatabase = async () => {
  if (!db) {
    await client.connect();
    db = client.db("elpahtronicsDb");
  }
  return db;
};
type Order = {
  orderId?: string;
  orderNumber: string;
  items: {
    name: string;
    quantity: number;
  }[];
  totalPrice: string;
  shippingAddress: {
    recipient_name: string;
    line1: string;
    city: string;
    state: string;
    postal_code: string;
    country_code: string;
  };
  status: string;
  emailAddress: string;
  paymentMethod: string;
  orderDate: string;
  expectedDelivery: string;
};
const createOrder = async (order: Order) => {
  const newOrder = {
    orderId: uuidv4(),
    orderNumber: order.orderNumber,
    items: order.items,
    totalPrice: order.totalPrice,
    shippingAddress: order.shippingAddress,
    status: order.status,
    emailAddress: order.emailAddress,
    orderDate: order.orderDate,
    expectedDelivery: order.expectedDelivery,
  };
  const db = await connectToDatabase();
  const col: mongoDB.Collection = db.collection("orders");
  await col.insertOne(newOrder);
  return newOrder;
};
//for Admin to get all orders
const getAllOrders = async () => {
  const db = await connectToDatabase();
  const col: mongoDB.Collection = db.collection("orders");
  const orders = await col.find({}).toArray();
  return orders;
};
//for client to view order.
const getOrderById = async (orderId: string) => {
  const db = await connectToDatabase();
  const col: mongoDB.Collection = db.collection("orders");
  const order = await col.findOne({ orderId });
  return order;
};
const getOrderByOrderNumber = async (orderNumber: string) => {
  const db = await connectToDatabase();
  const col: mongoDB.Collection = db.collection("orders");
  const order = await col.findOne({ orderNumber });
  return order;
};

export { createOrder, getAllOrders, getOrderById, getOrderByOrderNumber };
