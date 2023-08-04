import React, { useState } from 'react';
import styled from 'styled-components';
import SummaryCard from '../components/SummaryCard.tsx';
import Footer from '../components/Footer.tsx';
import CheckoutFormModal from '../components/CheckoutFormModal.tsx';
import PaymentMethodModal from '../components/PaymentMethodModal.tsx';
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
const DeliveryAddress = styled.div`
  width: 100%;
  min-height: 90px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
`;
const PaymentMethod = styled.div`
  width: 100%;
  min-height: 90px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;
const AddressInformation = styled.div``;
const NameNumberDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
const Name = styled.p`
  font-size: 15px;
  margin-right: 10px;

  font-weight: 500;
`;
const Number = styled.p`
  font-size: 15px;
`;
const CityCountryZip = styled.div`
  display: flex;
  flex-direction: row;
`;
const OtherInfoPara = styled.div`
  color: rgb(74, 73, 73);
  font-size: 15px;
`;

const ProductsToCheckout = styled.div``;
const Header = styled.h2`
  color: rgb(41, 40, 41);
`;
const Paragraph = styled.p`
  font-size: 15px;
  color: rgb(35, 96, 161);
  &:hover {
    color: rgb(5, 32, 89);
    cursor: pointer;
  }
`;

const SelectPaymentMethods = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`;
const PaymentOptions = styled.div`
  border: 1px solid black;
  height: 30px;
  width: 60px;
`;

export default function Checkout() {
  const [showCheckoutModal, setShowCheckoutModal] = useState<boolean>(false);
  const [ShowPaymentMethods, setShowPaymentMethods] = useState<boolean>(false);

  return (
    <>
      <CheckoutContainer>
        <WithoutSumCardDiv>
          <DeliveryAddress>
            <Header>Delivery Address</Header>
            <AddressInformation>
              <NameNumberDiv>
                <Name>El-Pachris Obeng</Name>
                <Number>+31627499165</Number>
              </NameNumberDiv>
              <OtherInfoPara>Havenstraat 21B</OtherInfoPara>
              <CityCountryZip>
                <OtherInfoPara>ZAANDAM,</OtherInfoPara>
                <OtherInfoPara>Netherlands,</OtherInfoPara>
                <OtherInfoPara>1506PG,</OtherInfoPara>
              </CityCountryZip>
            </AddressInformation>
            <Paragraph onClick={() => setShowCheckoutModal(true)}>+ Add New Address</Paragraph>
            {showCheckoutModal && (
              <CheckoutFormModal
                handleAddressSubmit={() => console.log('Address')}
                handleCloseButton={() => setShowCheckoutModal(false)}
              />
            )}
          </DeliveryAddress>
          <PaymentMethod>
            <Header>Payment Methods</Header>
            <Paragraph onClick={() => console.log('clicked')}>Select Payment Method</Paragraph>
            <PaymentMethodModal />
          </PaymentMethod>
          <ProductsToCheckout></ProductsToCheckout>
        </WithoutSumCardDiv>
        <SummaryCard />
      </CheckoutContainer>
      <Footer />
    </>
  );
}
