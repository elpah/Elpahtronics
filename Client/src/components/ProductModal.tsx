import React from "react";
import styled from "styled-components";
import Product from "../productType";

type Props = {
  productId?: string;
  productName: string;
  productDescription: string;
  productPrice: string;
  productImage: string;
  onClose: () => void; // Add onClose prop for close button
};

export default function ProductModal({
  productId,
  productName,
  productDescription,
  productPrice,
  productImage,
  onClose,
}: Props) {
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
            <QuantityButton>-</QuantityButton>
            <QuantityText>0</QuantityText>
            <QuantityButton>+</QuantityButton>
          </QuantityContainer>
          <AddToCartButton>Add to Cart</AddToCartButton>
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
  margin: auto;
  background-color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  font-size: 18px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
`;
