import Router from "express";
import "dotenv/config";
import express from "express";
import { createUser } from "../usersdb/db";

const userRouter = Router();

userRouter.post("/create-user", async (req, res) => {
  const { fbId, userEmailAddress, dob } = req.body;
  try {
    const newUser = {
      fbId: fbId,
      userEmailAddress: userEmailAddress,
      dob: dob,
      orders: [],
    };
  } catch (error) {
    console.log(error);
  }
});

export default userRouter;
