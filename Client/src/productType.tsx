export default interface Product {
  productId: string;
  productName: string;
  productDescription: string;
  category: string;
  productPrice: string;
  productImage: string;
  quantity?: number;
}
