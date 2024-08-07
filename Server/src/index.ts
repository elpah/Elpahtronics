import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import productRouter from "./routes/products";
import paypalRouter from "./routes/paypal-routes";
import stripeRouter from "./routes/stripe-routes";
import userRouter from "./routes/users-routes";
import feedbackEmail from "./routes/feedbackEmail";
import ordersRouter from "./routes/orders-routes";
// import { preSeedData } from "./productsdb/db";
dotenv.config();

// if (process.env.PRESEED === "True") {
//   preSeedData();
// }

const app = express();
app.use(cors());

const port = process.env.PORT || 8000;
app.use(express.json());
app.use("/api/products", productRouter);
app.use("/api/paypalPaymentTest", paypalRouter);
app.use("/api/stripePaymentTest", stripeRouter);
app.use("/api/users", userRouter);
app.use("/api/sendEmail", feedbackEmail);
app.use("/api/orders", ordersRouter);

app.listen(port, () => console.log(`listening on port ${port}`));
export default app;
