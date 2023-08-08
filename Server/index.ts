import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import productRouter from "./routes/products";
import paypalRouter from "./routes/paypal-routes";
import * as paypal from "/Users/elpah/Desktop/ElpahtronicsNew/Elpahtronics/Server/paypal-api";
import { preSeedData } from "./productsDb/db";

dotenv.config();

if (process.env.PRESEED === "True") {
  preSeedData();
}

const app = express();

const port = process.env.PORT;
app.use(express.json());
app.use(cors());
app.use("/api/products", productRouter);
app.use("/api/paypalPaymentTest", paypalRouter);

app.listen(port, () => console.log(`listening on port ${port}`));
export default app;
