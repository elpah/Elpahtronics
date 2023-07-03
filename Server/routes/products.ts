import Router from 'express';
import { getAllProducts, getProductById, updateProduct,} from '../productsDb/db';

const router = Router();

router.get('/', async (req, res) => {
res.send("Hello")
});

router.get('/available', async (_req, res) => {
  const products = await getAllProducts();
  res.json(products);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await getProductById(id);
  res.json(product);
  console.log('here', product);
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { date } = req.body;
  const product = await updateProduct(id, date);
  return res
    .set('Content-Type', 'application/json')
    .status(200)
    .json(product);
});


export default router;
