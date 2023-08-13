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
  min-height: 330px;
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

interface Props {
  children: React.ReactNode;
}

export default function SummaryCard({ children }: Props) {
  const { cartArray } = useCartContext();
  const navigate = useNavigate();
  const { totalPrice } = useCartContext();

  return (
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

      {children}
    </SummaryDiv>
  );
}
