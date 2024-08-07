import Router from "express";
import {
  getAllProducts,
  getProductByCategory,
  getProductById,
} from "../productsdb/db";

const productRouter = Router();

productRouter.get("/", async (_req, res) => {
  res.send("product route");
});

productRouter.get("/available/:category", async (req, res) => {
  const { category } = req.params;
  const products = await getProductByCategory(category.trim().toLowerCase());

  if (products) {
    res.json(products);
  }
});
productRouter.get("/available", async (_req, res) => {
  const products = await getAllProducts();
  res.json(products);
});

productRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await getProductById(id);
  res.json(product);
});

export default productRouter;
