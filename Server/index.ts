import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/products';

import { preSeedData } from './productsDb/db';

dotenv.config();


if (process.env.PRESEED === 'True') {
  preSeedData();
}

const app = express();

const port = process.env.PORT;
app.use(express.json());
app.use(cors());
app.use('/api/products', router);
app.listen(port, () => console.log(`listening on port ${port}`));
export default app;
