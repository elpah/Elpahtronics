import * as mongoDB from 'mongodb';
import client from '../db/client';
const data = require('../db/preSeedProductData.json');

let db: mongoDB.Db;

const connectToDatabase = async () => {
  if (!db) {
    await client.connect();
    db = client.db('elpahtronicsDb');
  }
  return db;
};

const getAllProducts = async () => {
  const db = await connectToDatabase();
  const col: mongoDB.Collection = db.collection('products');
  const products = await col.find({}).toArray();
  return products;
};

const getProductByCategory = async (category:string) => {
  const db = await connectToDatabase();
  const col: mongoDB.Collection = db.collection('products');
  const products = await col.find({category}).toArray();
  return products;
};

const getProductById = async (id:string) => {
  const db = await connectToDatabase();
  const col: mongoDB.Collection = db.collection('products');
  const product = await col.findOne({ id });
  return product;
};

const updateProduct = async (id:string, date:string) => {
  const db = await connectToDatabase();
  const col: mongoDB.Collection = db.collection('products');
  const updateSitter = await col.updateOne({ id }, { $push: { bookings: date } });
  console.log('updated', updateSitter);
  return updateSitter;
};

const preSeedData = async () => {
  const db = await connectToDatabase();
  const col: mongoDB.Collection = db.collection('products');
  col.deleteMany();
  col.insertMany(data);
};

export { getAllProducts, getProductById,getProductByCategory, updateProduct, preSeedData,};

