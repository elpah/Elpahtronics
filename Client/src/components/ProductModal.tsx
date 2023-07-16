import React, { useState } from "react";
import styled from "styled-components";
import Product from "../productType";

type Props = {
  productId?: string;
  productName: string;
  productDescription: string;
  productPrice: string;
  productImage: string;
  onClose: () => void;
};

export default function ProductModal({
  productId,
  productName,
  productDescription,
  productPrice,
  productImage,
  onClose,
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
    <ProductModalDiv>
      <ProductCardDiv>
        <CloseButton onClick={onClose}>X</CloseButton> {/* Close button */}
        <ImageDiv>
          <Image src={productImage} alt="Product Image" />
        </ImageDiv>
        <DetailsDiv>
          <ProductName>{productName}</ProductName>
          <ProductDescription>{productDescription}</ProductDescription>
          <ProductPrice>{productPrice}</ProductPrice>
          <QuantityContainer>
            <QuantityButton onClick={handleDecrement}>-</QuantityButton>
            <QuantityText>{quantity}</QuantityText>
            <QuantityButton onClick={handleIncrement}>+</QuantityButton>
          </QuantityContainer>
          <AddToCartButton
            onClick={() => console.log("add to cart button clicked")}
          >
            Add to Cart
          </AddToCartButton>
        </DetailsDiv>
      </ProductCardDiv>
    </ProductModalDiv>
  );
}

const ProductModalDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const ProductCardDiv = styled.div`
  width: 90%;
  max-width:900px;
  margin: auto;
  background-color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    width: 70%;
  }
  @media (min-width: 1198px) {
    width: 60%;
    height:450px;


`;

const ImageDiv = styled.div`
  background-color: RGB(245, 245, 245);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

const Image = styled.img`
  object-fit: cover;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  font-size: 16px;
  border: none;
  background-color: transparent;
  color: #888;
  cursor: pointer;
`;

const DetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const ProductName = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ProductPrice = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const QuantityButton = styled.button`
  padding: 5px 10px;
  font-size: 18px;
  border: none;
  background-color: #f5f5f5;
  color: #888;
  cursor: pointer;
`;

const QuantityText = styled.p`
  margin: 0 10px;
  font-size: 18px;
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
