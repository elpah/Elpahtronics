import { MongoClient } from 'mongodb';

require('dotenv').config();

const uri = process.env.MONGO_URI;
if (!uri) {
  throw new Error('MongoDB URI is not defined in the environment variables');
}

const client = new MongoClient(uri);

export default client;
