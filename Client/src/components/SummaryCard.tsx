import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from './CartContext.tsx';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import PayPalPayment from './PayPalPayment.tsx';

const SummaryDiv = styled.div`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 2%;

  width: 100%;
  height: 400px;
  margin-top: 30px;

  @media (min-width: 1198px) {
    margin-top: 0;
    margin-left: 100px;
    max-width: 400px;
    border: none;
  }
`;
const SummaryHeader = styled.h2`
  font-size: 25px;
  padding-bottom: 5px;
  border-bottom: 2px solid black;
`;
const PromoCodeInput = styled.input`
  font-size: 16px;
  padding: 8px;
  width: 100%;
  height: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const SumAndAmount = styled.div`
  font-size: 18px;
  display: flex;
  justify-content: space-between;
`;
const SummaryParagraph = styled.p``;
const Total = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid black;
  margin-top: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
const TotalTxt = styled.h3``;
const CheckoutButton = styled.button`
  background-color: #000;
  color: #fff;
  width: 100%;
  height: 40px;
  font-size: 18px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  textdecoration: none;
  &:hover {
    background-color: #1a961c;
  }
`;

const PaypalCheckOut = styled.button`
  font-style: italic;
  width: 100%;
  color: blue;
  height: 40px;
  font-size: 18px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  textdecoration: none;
  &:hover {
    background-color: #dedede;
  }
`;

export default function SummaryCard() {
  const { cartArray } = useCartContext();
  const navigate = useNavigate();
  const { totalPrice } = useCartContext();

  //   const totalPrice = cartArray.reduce(
  //     (total, product) => total + parseInt(product.productPrice, 10) * product.productQuantity,
  //     0,
  //   );

  const initialOptions = {
    clientId: 'AXNjYbmWdubqgfVmfsznh40FH6kORv9Orp-_XSEC8QGimP13MxDyh90266ACBL8BiR4HuEDx_jRVdeFk',
    currency: 'USD',
    intent: 'capture',
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <SummaryDiv>
        <SummaryHeader>Order Summary</SummaryHeader>
        <PromoCodeInput type="text" placeholder="Have a promo code?" />
        <div>
          <SumAndAmount>
            <SummaryParagraph>Merchandise</SummaryParagraph>
            <SummaryParagraph>{`${totalPrice}$`}</SummaryParagraph>
          </SumAndAmount>
          <SumAndAmount>
            <SummaryParagraph>Estimated Shipping</SummaryParagraph>
            <SummaryParagraph>Free</SummaryParagraph>
          </SumAndAmount>
        </div>
        <Total>
          <TotalTxt>Total:</TotalTxt>
          <TotalTxt>{`${totalPrice}$`}</TotalTxt>
        </Total>
        <CheckoutButton onClick={() => navigate('/checkoutpage')}>Proceed to checkout</CheckoutButton>
        <p
          style={{
            fontSize: '20px',
            fontWeight: '400',
            fontStyle: 'italic',
            textAlign: 'center',
            padding: '7px',
          }}
        >
          OR
        </p>
        <PayPalPayment key={totalPrice} />
      </SummaryDiv>
    </PayPalScriptProvider>
  );
}
