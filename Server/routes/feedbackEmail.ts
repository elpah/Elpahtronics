import "dotenv/config";
import Router from "express";
const feedbackEmail = Router();
import { sendFeedbackEmail } from "./generalFunctions";

feedbackEmail.post("/feedback-email", async (req, res) => {
  const { name, email, subject, message } = req.body;
  try {
    await sendFeedbackEmail(name, email, subject, message);
    res.status(200).send("Feedback email sent successfully");
  } catch (err: any) {
    console.error("Error sending feedback email:", err);
    res.status(500).send(err.message);
  }
});

export default feedbackEmail;
