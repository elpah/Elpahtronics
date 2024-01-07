import "dotenv/config";
import Router from "express";
const feedbackEmail = Router();
import { sendFeedbackEmail } from "./generalFunctions";

feedbackEmail.post("/feedback-email", async (req, res) => {
  try {
    // const order = await paypal.createOrder(req.body);
    // res.json(order);
  } catch (err: any) {
    res.status(500).send(err.message);
  }
});

export default feedbackEmail;
