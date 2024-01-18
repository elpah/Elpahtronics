import Router from "express";
import "dotenv/config";
import { createUser, getUserByFbId } from "../usersdb/db";
const userRouter = Router();

userRouter.post("/create-user", async (req, res) => {
  const { name, userEmailAddress, userDob, fbId, userPhoneNumber } = req.body;
  try {
    const newUser = {
      userName: name,
      fbId: fbId,
      userEmailAddress: userEmailAddress,
      userDob: userDob,
      orders: [],
      userPhoneNumber: userPhoneNumber,
    };
    createUser(newUser);
    res.status(200).json({ message: "user created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

userRouter.post("/get-user", async (req, res) => {
  const { fbId } = req.body;
  try {
    const user = await getUserByFbId(fbId);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

export default userRouter;
