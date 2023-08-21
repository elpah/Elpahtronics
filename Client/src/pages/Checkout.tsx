import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SummaryCard from '../components/SummaryCard.tsx';
import Footer from '../components/Footer.tsx';
import StripePayment from '../components/StripePayment.tsx';
import CheckOutButton from '../components/CheckOutButton.tsx';

export default function Checkout() {
  return (
    <>
      <CheckoutContainer>
        <WithoutSumCardDiv>
          <StripePayment />
        </WithoutSumCardDiv>
        <SummaryCardContainer>
          <SummaryCard>
            <div style={{ marginBottom: '15px' }}></div>
            <CheckOutButton buttonName="Pay" handleButtonSubmit={() => console.log('handlePaySubmit')} />
          </SummaryCard>
        </SummaryCardContainer>
      </CheckoutContainer>
      <Footer />
    </>
  );
}
const SummaryCardContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const CheckoutContainer = styled.div`
  max-width: 1400px;
  margin: auto;
  display: grid;
  grid-gap: 10px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding-left: 20px;
    margin-top: 20px;
  }
`;

const WithoutSumCardDiv = styled.div``;
