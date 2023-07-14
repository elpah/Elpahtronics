import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { productCover } from "../assets/images/exportImages";
import Footer from "../components/Footer";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
import Product from "../productType";
import ProductModal from "../components/ProductModal";

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [productModalVisibility, setProductModalVisibility] =
    useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetchProducts();
    console.log(products);
  }, []);

  const fetchProducts = async () => {
    const response = await fetch(
      "http://localhost:8000/api/products/available"
    );
    const results: Product[] = await response.json();
    setProducts(results);
  };

  const handleCardClick = (product: Product) => {
    setSelectedProduct(product);
    setProductModalVisibility(true);
  };
  return (
    <ProductPageContainer>
      <HeaderDiv>
        <HeaderContainer>
          <ChildDivCenter>
            <Header>Get 5% cashback on 200$</Header>
            <Paragraph>
              Shopping is a bit of a relaxing hobby for me, which is sometimes
              troubling for the bank balance.
            </Paragraph>
            <Button
              buttonName="Learn More"
              onClick={() => console.log("redirect to my Github Profile")}
            />
          </ChildDivCenter>
        </HeaderContainer>
      </HeaderDiv>
      {/* <form>
        <label>Select Product Category</label>
        <select id="dropdown" name="dropdown">
          <option value="option1">Furniture</option>
          <option value="option2">Bags</option>
          <option value="option3">Books</option>
          <option value="option2">Tech</option>
          <option value="option3">Sneakers</option>
          <option value="option3">Travel</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
      <h1>Product Category</h1> */}
      <h1>{"All Products"}</h1>
      {productModalVisibility && (
        <ProductModal
          onClose={() => setProductModalVisibility(false)}
          productName={selectedProduct?.productName || ""}
          productDescription={selectedProduct?.productDescription || ""}
          productPrice={selectedProduct?.productPrice || ""}
          productImage={selectedProduct?.productImage || ""}
        />
      )}
      <ProductCardContainer>
        {products.map((product) => (
          <ProductCard
            key={product.productId}
            productName={product.productName}
            productDescription={product.productDescription}
            productPrice={product.productPrice}
            productImage={product.productImage}
            handleCardClick={() => handleCardClick(product)}
          />
        ))}
      </ProductCardContainer>
      <Footer />
    </ProductPageContainer>
  );
}

const ProductPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const HeaderDiv = styled.div`
  height: 400px;
  width: 100%;
  background: url(${productCover}) no-repeat;
  background-size: cover;
  @media (min-width: 768px) {
    height: 500px;

    margin: auto;
  }
  @media (min-width: 1198px) {
    height: 700px;
  }
`;

const HeaderContainer = styled.div`
  width: 90%;
  height: 400px;
  max-width: 1400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    height: 500px;
    align-items: flex-end;
  }
  @media (min-width: 1198px) {
    height: 700px;
  }
`;
const ChildDivCenter = styled.div`
  max-width: 90%;
  width: 400px;
  height: 250px;
  padding: 25px 20px 20px;
  border-radius: 35px 0 10px;
  background-color: rgb(200, 78, 64);
  overflow: auto;
  @media (max-width: 384px) {
    padding: 20px 15px 10px;
  }
  @media (min-width: 340px) and (max-width: 390px) {
    padding-top: 40px;
  }
  @media (min-width: 768px) {
    width: 420px;
    height: 350px;
    padding-top: 60px;
    padding-left: 35px;
  }
  @media (min-width: 1198px) {
    width: 650px;
    height: 420px;
    padding-top: 70px;
    padding-left: 60px;
    padding-right: 40px;
  }
`;

const Header = styled.h1`
  color: rgb(229, 214, 110);
  font-size: 25px;
  @media (max-width: 384px) {
    font-size: 20px;
  }
  @media (max-width: 280px) {
    font-size: 18px;
  }
  @media (min-width: 768px) {
    font-size: 30px;
  }
  @media (min-width: 1198px) {
    font-size: 40px;
  }
`;
const Paragraph = styled.p`
  color: rgb(229, 214, 110);
  font-size: 18px;
  margin-top: 20px;

  @media (max-width: 354px) {
    font-size: 15px;
  }
  @media (max-width: 280px) {
    font-size: 13px;
  }
  @media (min-width: 768px) {
    font-size: 20px;
  }
  @media (min-width: 1198px) {
    font-size: 30px;
  }
`;
const ProductCardContainer = styled.div`
  width: 90%;
  max-width: 1400px;
  display: grid;
  grid-gap: 8px;
  margin: auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

   @media (min-width: 1198px) {
    grid-template-columns: repeat(3, 1fr);

`;
