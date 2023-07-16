import React, { useState } from "react";
import styled from "styled-components";
import Product from "../productType";

interface Props {
  productId?: string;
  productName: string;
  productPrice: string;
  productDescription: string;
  productImage: string;
  quantity?: number;
  handleCardClick: () => void;
}

export default function ProductCard({
  productName,
  productPrice,
  productDescription,
  productImage,
  handleCardClick,
}: Props) {
  const [quantity, setQuantity] = useState<number>(1);
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  return (
    <ProductCardContainerDiv>
      <ImageDiv onClick={handleCardClick}>
        <Image src={productImage} alt="productImage" />
      </ImageDiv>
      <WithoutImageDiv>
        <NamePrice onClick={handleCardClick}>
          <H2>{productName}</H2>
          <H2>{productPrice}</H2>
        </NamePrice>
        <Description onClick={handleCardClick}>
          {productDescription}
        </Description>
        <QuantityAddToCartDiv>
          {/* <QuantityDiv>
            <AddSubtractButton onClick={handleDecrement}>-</AddSubtractButton>
            <Quantity>{quantity}</Quantity>
            <AddSubtractButton onClick={handleIncrement}>+</AddSubtractButton>
          </QuantityDiv> */}
          <AddToCartButton
            onClick={() => console.log("add to cart button clicked")}
          >
            Add to cart
          </AddToCartButton>
        </QuantityAddToCartDiv>
      </WithoutImageDiv>
    </ProductCardContainerDiv>
  );
}
const ProductCardContainerDiv = styled.div`
  margin: 30px auto 30px;
  width: 90%;
  background-color: #fff;
  border-radius: 4px;
`;
const ImageDiv = styled.div`
  background-color: RGB(245, 245, 245);
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`;
const Image = styled.img`
  height: 250px;
  object-fit: contain;
  border-radius: 10px 10px 0 0;
`;
const WithoutImageDiv = styled.div``;

const NamePrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;
const H2 = styled.h2`
  font-size: 22px;
  font-weight: 600;
  margin: 0;
`;
const Description = styled.p`
  font-size: 20px;
  margin-bottom: 8px;
`;
const QuantityAddToCartDiv = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const QuantityDiv = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
`;
const AddSubtractButton = styled.button`
  padding: 8px;
  border: none;
  background-color: #f5f5f5;
  color: #888;
  cursor: pointer;
  font-size: 20px;
`;
const Quantity = styled.p`
  margin: 0 8px;
  font-size: 20px;
`;
const AddToCartButton = styled.button`
  padding: 8px 16px;
  border: 1px solid black;
  border-radius: 20px;
  background-color: transparent;
  color: black;
  cursor: pointer;
  font-size: 20px;

  &:hover {
    background-color: black;
    color: white;
  }
`;
