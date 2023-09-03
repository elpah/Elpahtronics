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
type User = {
  userId?: string;
  fbId: string;
  userName: string;
  userEmailAddress: string;
  dob: string;
  orders?: string[];
};

const createUser = async (user: User) => {
  const newUser = {
    userId: uuidv4(),
    userName: user.userName,
    fbId: user.fbId,
    userEmailAddress: user.userEmailAddress,
    dob: user.dob,
    orders: [],
  };
  const db = await connectToDatabase();
  const col: mongoDB.Collection = db.collection("users");
  await col.insertOne(newUser);
  return newUser;
};

const getUserByFbId = async (fbId: string) => {
  const db = await connectToDatabase();
  const col: mongoDB.Collection = db.collection("users");
  const user = await col.findOne({ fbId });
  return user;
};

export { createUser, getUserByFbId };
