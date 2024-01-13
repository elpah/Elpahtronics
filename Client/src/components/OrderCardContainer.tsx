import React, { useState } from 'react';
import styled from 'styled-components';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

type OrderCard = {
  orderNumber: string;
  orderDate: string;
  children: any;
  // item: {
  //   itemName: string;
  //   itemQuantity: string;
  //   itemPrice: string;
  // };
};
export default function OrderCard({ orderNumber, orderDate, children }: OrderCard) {
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  return (
    <OrderCardContainer>
      <OrderInfo>
        <OrderNumber>Order: #{orderNumber}</OrderNumber>
        <OrderDate>{orderDate}</OrderDate>
      </OrderInfo>
      <ViewOrder onClick={() => setShowOrderDetails(!showOrderDetails)}>
        {!showOrderDetails ? (
          <>
            View Order <FaArrowRight style={{ paddingTop: '6px' }} />
          </>
        ) : (
          <>
            Show Less <FaArrowLeft style={{ paddingTop: '6px' }} />
          </>
        )}
      </ViewOrder>
      {showOrderDetails && children}

      {/* {showOrderDetails && <OrderItem itemName={item.itemName} itemQuantity={item.itemQuantity} itemPrice={item.itemPrice} />} */}
      <TotalPrice></TotalPrice>
    </OrderCardContainer>
  );
}
const ViewOrder = styled.div`
  cursor: pointer;
  margin-bottom: 20px;
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

const TotalPrice = styled.p`
  margin-top: 20px;
  font-weight: bold;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;
