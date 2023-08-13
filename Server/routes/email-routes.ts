// import "dotenv/config";
// import * as paypal from "../paypal-api";
// import Router from "express";
// const paypalRouter = Router();

// paypalRouter.post("/create-paypal-order", async (req, res) => {
//   try {
//     const order = await paypal.createOrder(req.body);
//     res.json(order);
//   } catch (err: any) {
//     res.status(500).send(err.message);
//   }
// });

// paypalRouter.post("/capture-paypal-order", async (req, res) => {
//   const { orderID, cart, totalPrice } = req.body;
//   try {
//     const captureData = await paypal.capturePayment(orderID);
//     const shippingAddress = captureData.purchase_units[0].shipping;
//     // console.log("Address:", shippingAddress); // Log the response
//     const newOrder = {
//       orderNumber: orderID,
//       items: cart,
//       totalPrice: totalPrice,
//       shippingAddress: shippingAddress,
//       status: "order confirmed",
//     };
//     console.log(newOrder);
//     res.json(`${captureData} paid`);
//   } catch (err: any) {
//     res.status(500).send(err.message);
//   }
// });

// export default paypalRouter;
