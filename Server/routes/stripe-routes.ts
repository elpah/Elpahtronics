import Router from "express";
import "dotenv/config";
const stripeRouter = Router();
const stripe = require("stripe")(
  "sk_test_51NeD0XJdD69kDqchvJHiNaefHSZGtjVlivGIvN9cpRt04tB8SCc1UfLXgYfe3tBfTpAI0B0WKS25rdWNPGbd8KIl00vFOeE2Al"
);

async function paymentIntentFunction() {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: "eur",
    automatic_payment_methods: {
      enabled: true,
    },
  });
  return paymentIntent;
}
stripeRouter.get("/secret", async (req, res) => {
  const intent = await paymentIntentFunction();
  res.json({ client_secret: intent.client_secret });
});

export default stripeRouter;
