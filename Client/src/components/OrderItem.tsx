import React from 'react';
import styled from 'styled-components';

export default function OrderItem() {
  return (
    <OrderItems>
      <SingleOrderItem>
        <ImgNameDiv>
          <ItemImage src="" alt="" />
          <ItemName>Book</ItemName>
        </ImgNameDiv>
        <ItemQuantity>Quantity:1</ItemQuantity>
        <ItemPrice>Price: 20 Euros</ItemPrice>
      </SingleOrderItem>
    </OrderItems>
  );
}

const ItemImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ItemName = styled.p`
  margin: 0;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const ItemQuantity = styled.p`
  margin-left: 5px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const ItemPrice = styled.p`
  margin: 0;
  margin-left: 20px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const ImgNameDiv = styled.div`
  display: flex;
  align-items: center;
`;

const OrderItems = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
`;

const SingleOrderItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  min-width: 80%;
  justify-content: space-between;
  @media (min-width: 768px) {
    width: 80%;
  }
`;
