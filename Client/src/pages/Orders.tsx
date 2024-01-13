import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  width: 90%;
  margin: auto;
  margin-top: 120px;

  @media (min-width: 768px) {
    width: 80%;
    margin-top: 150px;
  }
  @media (min-width: 1198px) {
    width: 80%;
  }
`;

const OrderHeader = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 10px;
  text-align: center;
`;

const OrderForm = styled.form`
  width: 100%;
  color: #555;
  display: flex;
  padding: 0;
  justify-content: center;
`;

const OrderSearchInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #555;
  border-right: 0;
  border-radius: 8px 0 0 8px;
  display: block;
  padding: 9px 4px 9px 40px;
  background: transparent
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E")
    no-repeat 13px center;

  @media (min-width: 768px) {
    width: 50%;
    height: 60px;
  }
`;

const OrderSubmit = styled.button`
  background: none;
  border: 1px solid #555;
  width: 20%;
  border-radius: 0 8px 8px 0;

  &:hover {
    color: green;
  }
  @media (min-width: 768px) {
    width: 15%;
  }
`;
const spinAnimation = keyframes`
  0% {
    transform: rotate(20deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: 4px solid #555;
  width: 60px;
  height: 60px;
  animation: ${spinAnimation} 1s linear infinite;
`;
const YourOrder = styled.div`
  font-family: 'Arial', sans-serif;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 20px;
  margin-top: 80px;
`;

const YourOrderHeader = styled.h2`
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
`;

const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;

    &:last-child {
      margin-bottom: 20px;
    }
  }
`;

const OrderLabel = styled.h2`
  font-size: 18px;
  margin-bottom: 5px;

  @media (min-width: 768px) {
    flex: 1;
    margin-bottom: 0;
  }
`;

const OrderValue = styled.p`
  font-size: 16px;
  margin: 0;

  @media (min-width: 768px) {
    flex: 2;
  }
`;

const OrderItems = styled.div`
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;

  .items-label {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
    padding: 10px 0;

    &:last-child {
      border-bottom: none;
    }

    p {
      margin: 0;
    }

    .label {
      font-weight: bold;
      margin-right: 10px;
    }
  }
`;

const Error = styled.p`
  font-size: 30px;
  font-weight: 500;
  color: red;
  text-align: center;
  margin-top: 30px;
`;
type Order = {
  orderNumber: string;
  orderDate: string;
  totalPrice: string;
  status: string;
  emailAddress: string;
  expectedDelivery: string;
  items: Array<{
    productName: string;
    productPrice: string;
    productQuantity: number;
  }>;
};
export default function Orders() {
  const [order, setOrder] = useState<Order>();
  const [showSpinner, setShowSpinner] = useState<boolean>(false);
  const [orderError, setError] = useState<boolean>(false);
  let [searchParams, setSearchParams] = useSearchParams();
  const myOrderNumber = searchParams.get('order-number');

  useEffect(() => {
    if (myOrderNumber) {
      getOrderByOrderNumber(myOrderNumber);
    }
  }, []);
  async function getOrderByOrderNumber(orderNumber: string) {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/orders/orders-by-order-number?orderNumber=${orderNumber}`,
      );
      if (response.data) {
        setShowSpinner(false);
        setOrder(response.data);
      }
    } catch (error) {
      setError(true);
      setShowSpinner(false);
      setShowSpinner(false);
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const orderNumber = (event.target as any).search.value;
    setSearchParams({ 'order-number': orderNumber });
    setError(false);
    setOrder(undefined);
    setShowSpinner(true);
    getOrderByOrderNumber(orderNumber!);
  };

  return (
    <OrderContainer>
      <OrderHeader>FIND MY ORDER</OrderHeader>
      <OrderForm onSubmit={handleSubmit}>
        <OrderSearchInput type="search" placeholder="Search..." name="search" />
        <OrderSubmit type="submit">Search</OrderSubmit>
      </OrderForm>

      {showSpinner && (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )}
      {order && (
        <YourOrder>
          <YourOrderHeader>Your Order</YourOrderHeader>

          <OrderInfo>
            <OrderLabel>Order Number:</OrderLabel>
            <OrderValue>#{order?.orderNumber}</OrderValue>
          </OrderInfo>

          <OrderInfo>
            <OrderLabel>Order Date:</OrderLabel>
            <OrderValue>{order?.orderDate}</OrderValue>
          </OrderInfo>

          <OrderItems>
            <div>
              <p className="items-label">Order Items:</p>
              {order?.items.map((item, index) => (
                <div className="item" key={index}>
                  <p>
                    <span className="label">Product:</span> {item.productName}
                  </p>
                  <p>
                    <span className="label">Quantity:</span> {item.productQuantity}
                  </p>
                  <p>
                    <span className="label">Price:</span> {item.productPrice}
                  </p>
                </div>
              ))}
            </div>
          </OrderItems>

          <OrderInfo>
            <OrderLabel>Estimated Delivery:</OrderLabel>
            <OrderValue>{order?.expectedDelivery}</OrderValue>
          </OrderInfo>

          <OrderInfo>
            <OrderLabel>Order Total:</OrderLabel>
            <OrderValue>$ {order?.totalPrice}</OrderValue>
          </OrderInfo>
        </YourOrder>
      )}
      {orderError && <Error>No Orders found</Error>}
    </OrderContainer>
  );
}
