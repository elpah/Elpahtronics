import React from 'react';
import styled from 'styled-components';

const CartCardItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ImageDiv = styled.div`
  width: 120px;
  min-width: 100px;
  height: 100px;
  border-radius: 8px;
  overflow: hidden;
  margin-right: 10px;
  @media (min-width: 500px) {
    width: 200px;
    display: flex;
    justify-content: center;
  }
  @media (min-width: 768px) {
    width: 250px;
  }
  @media (min-width: 1198px) {
    width: 130px;
  }
`;
const Image = styled.img`
  width: 120px;
  margin: auto;

  object-fit: cover;

  height: 100%;
`;

const ProductDetailsDiv = styled.div`
  flex: 1;
  padding-left: 10px;
`;

const ProductHeader = styled.h2`
  font-size: 20px;
  margin-bottom: 5px;
  color: #333;
  @media (max-width: 300px) {
    font-size: 15px;
  }
`;

const Paragraph = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
  color: #666;
  @media (max-width: 300px) {
    font-size: 14px;
  }
`;

const QuantityDiv = styled.div`
  font-size: 16px;
  margin-bottom: 5px;
  color: #444;
  display: flex;
  padding: 10px;
`;

const PriceDiv = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #222;
  @media (max-width: 300px) {
    font-size: 14px;
  }
`;

const RemoveButton = styled.button`
  margin-right: 10px;
  color: rgb(32, 33, 36);
  border: none;
  background-color: transparent;

  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: #b71c1c;
    background-color: transparent;
  }
  @media (max-width: 300px) {
    margin-left: 10px;
    padding: 5px 8px;
  }
`;
const QuantityDivContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  font-size: 16px;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 10%;
  background-color: #f0f0f0;
  color: #333;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #e0e0e0;
  }
`;

interface Props {
  productId: string;
  productImage: string;
  productName: string;
  productDetails: string;
  quantity: number;
  price: string;
  handleDecrement: (productId: string) => void;
  handleIncrement: (productId: string) => void;
  handleRemove: (productId: string) => void;
}

export default function CartCard({
  productId,
  productImage,
  productName,
  productDetails,
  quantity,
  price,
  handleDecrement,
  handleIncrement,
  handleRemove,
}: Props) {
  return (
    <CartCardItemContainer>
      <ImageDiv>
        <Image src={productImage} alt="productImage" />
      </ImageDiv>
      <ProductDetailsDiv>
        <ProductHeader>{productName}</ProductHeader>
        <Paragraph>{productDetails}</Paragraph>
        <QuantityDivContainer>
          {' '}
          <Button
            onClick={e => {
              e.preventDefault();
              handleDecrement(productId);
            }}
          >
            -
          </Button>
          <QuantityDiv>{quantity}</QuantityDiv>
          <Button
            onClick={e => {
              e.preventDefault();
              handleIncrement(productId);
            }}
          >
            +
          </Button>
        </QuantityDivContainer>
        <PriceDiv>{price}</PriceDiv>
      </ProductDetailsDiv>
      <RemoveButton
        onClick={e => {
          e.preventDefault();
          handleRemove(productId);
        }}
      >
        X
      </RemoveButton>
    </CartCardItemContainer>
  );
}
