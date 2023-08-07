import Router from "express";
import {
  getAllProducts,
  getProductByCategory,
  getProductById,
  updateProduct,
} from "../productsDb/db";

const productRouter = Router();

productRouter.get("/", async (req, res) => {
  res.send("Hello");
});

productRouter.get("/available/:category", async (req, res) => {
  const { category } = req.params;
  const products = await getProductByCategory(category.trim().toLowerCase());

  if (products) {
    console.log("here", products);
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
  console.log("here", product);
});

productRouter.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { date } = req.body;
  const product = await updateProduct(id, date);
  return res.set("Content-Type", "application/json").status(200).json(product);
});

export default productRouter;
