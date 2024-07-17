import React from 'react';
import styled from 'styled-components';

type OrderItem = {
  itemName: String;
  itemQuantity: string;
  itemPrice: string;
};
export default function OrderItem({ itemName, itemQuantity, itemPrice }: OrderItem) {
  return (
    <OrderItems>
      <SingleOrderItem>
        <ImgNameDiv>
          <ItemName>{itemName}</ItemName>
        </ImgNameDiv>
        <ItemQuantity>{itemQuantity}</ItemQuantity>
        <ItemPrice>Price: {itemPrice}</ItemPrice>
      </SingleOrderItem>
    </OrderItems>
  );
}

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
