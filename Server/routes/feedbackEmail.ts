import "dotenv/config";
import Router from "express";
const feedbackEmail = Router();
import { sendFeedbackEmail } from "./generalFunctions";

feedbackEmail.post("/feedback-email", async (req, res) => {
  const { firstName, lastName, email, subject, message, checked } = req.body;

  try {
    await sendFeedbackEmail(firstName, email, subject, message);
    res.status(200).send("Feedback email sent successfully");
  } catch (err: any) {
    console.error("Error sending feedback email:", err);
    res.status(500).send(err.message);
  }
});

export default feedbackEmail;
