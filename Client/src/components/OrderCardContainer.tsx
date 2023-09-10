import React, { useState } from 'react';
import styled from 'styled-components';
import OrderItem from './OrderItem';
import { FaArrowRight } from 'react-icons/fa';

export default function OrderCard() {
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  return (
    <OrderCardContainer>
      <OrderInfo>
        <OrderNumber>Order: #4X123KJ45X67</OrderNumber>
        <OrderDate> 27-10-2023</OrderDate>
      </OrderInfo>

      <ViewOrder onClick={() => setShowOrderDetails(true)}>
        view order <FaArrowRight style={{ paddingTop: '6px' }} />
      </ViewOrder>

      <OrderItem />
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <TotalPrice>Total Price: 2000 Euros</TotalPrice>
    </OrderCardContainer>
  );
}
const ViewOrder = styled.div`
  cursor: pointer;
  font-weight: bold;
  color: green;

  &:hover {
    text-decoration: underline;
  }
`;
const OrderCardContainer = styled.div`
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 2px;
  margin-top: 20px;
  padding: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const OrderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 80%;
  font-size: 16px;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    width: 80%;
  }
`;

const OrderNumber = styled.p`
  margin-right: 10px;
`;

const OrderDate = styled.p`
  margin-left: 10px;
`;

const OrderStatus = styled.p`
  font-size: 18px;
  margin-top: 10px;
`;

const TotalPrice = styled.p`
  margin-top: 20px;
  font-weight: bold;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;
