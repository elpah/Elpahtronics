import React from 'react';
import styled from 'styled-components';
import SummaryCard from '../components/SummaryCard.tsx';
import Footer from '../components/Footer.tsx';
import CheckoutFormModal from '../components/CheckoutFormModal.tsx';

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
const DeliveryAddress = styled.div``;
const PaymentMethod = styled.div``;
const ProductsToCheckout = styled.div``;
const Header = styled.h2``;
const Paragraph = styled.p``;

export default function Checkout() {
  return (
    <>
      <CheckoutContainer>
        <WithoutSumCardDiv>
          <DeliveryAddress>
            <Header>Delivery Address</Header>
            <Paragraph onClick={() => console.log('clicked')}>+ Add New Address</Paragraph>
            <CheckoutFormModal />
          </DeliveryAddress>
          <PaymentMethod>
            <Header>Payment Methods</Header>
            <Paragraph onClick={() => console.log('clicked')}>Select Payment Method</Paragraph>
          </PaymentMethod>
          <ProductsToCheckout></ProductsToCheckout>
        </WithoutSumCardDiv>
        <SummaryCard />
      </CheckoutContainer>
      <Footer />
    </>
  );
}
