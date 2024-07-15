import * as mongoDB from "mongodb";
import client from "../db/client";
import { v4 as uuidv4 } from "uuid";
let db: mongoDB.Db;
const connectToDatabase = async () => {
  if (!db) {
    await client.connect();
    db = client.db("elpahtronicsdb");
  }
  return db;
};
type User = {
  userId?: string;
  fbId: string;
  userName: string;
  userEmailAddress: string;
  userPhoneNumber: string;
  userDob: string;
  orders?: string[];
};

const createUser = async (user: User) => {
  const newUser = {
    userId: uuidv4(),
    userName: user.userName,
    fbId: user.fbId,
    userEmailAddress: user.userEmailAddress,
    userPhoneNumber: user.userPhoneNumber,
    userDob: user.userDob,
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
