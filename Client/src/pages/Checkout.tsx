import React, { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import styled from 'styled-components';
import SummaryCard from '../components/SummaryCard.tsx';
import Footer from '../components/Footer.tsx';
import CheckoutFormModal from '../components/CheckoutFormModal.tsx';
import PaymentMethodModal from '../components/PaymentMethodModal.tsx';
import Address from '../addressType.ts';
import VisaCard from '../components/VisaCard.tsx';
import CheckOutButton from '../components/CheckOutButton.tsx';
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
  position: relative;
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
  margin-right: 5px;
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
const ModifyPara = styled.p`
  position: absolute;
  top: 40px;
  right: 15px;
  font-size: 15px;
  color: rgb(35, 96, 161);
  &:hover {
    color: rgb(5, 32, 89);
    cursor: pointer;
  }
`;

const ChosenPaymentParagraph = styled.p``;

const stripePromise = loadStripe(
  'pk_test_51NeD0XJdD69kDqchRQLwOOpe6NmrC5aO8ASOjpfbKxj8tpocFwobsGsBl7Xa0rabqGzR0gQDoR1GOGYSkRvrwm5M00U5F45wh3',
);

export default function Checkout() {
  const [showCheckoutModal, setShowCheckoutModal] = useState<boolean>(false);
  const [ShowPaymentMethods, setShowPaymentMethods] = useState<boolean>(false);
  const [showVisaCard, setShowVisaCard] = useState<boolean>(false);
  const [clientSecret, setClientSecret] = useState('');

  const [address, setAddress] = useState({
    fullName: '',
    phoneNumber: '',
    apartment: '',
    street: '',
    country: '',
    state: '',
    city: '',
    zipCode: '',
  });
  const [addressCopy, setAddressCopy] = useState<Address | null>();
  const handleInputChange = (field: keyof Address, value: string) => {
    setAddress(prevAddress => ({
      ...prevAddress,
      [field]: value,
    }));
  };

  return (
    <>
      <CheckoutContainer>
        <WithoutSumCardDiv>
          <DeliveryAddress>
            <Header>Delivery Address</Header>
            {addressCopy ? (
              <AddressInformation>
                <NameNumberDiv>
                  <Name>{addressCopy?.fullName}</Name>
                  <Number>{addressCopy?.phoneNumber}</Number>
                </NameNumberDiv>
                <OtherInfoPara>{addressCopy?.street}</OtherInfoPara>
                <CityCountryZip>
                  <OtherInfoPara>{`${addressCopy?.city.toUpperCase()}, `}</OtherInfoPara>
                  <OtherInfoPara>{`${addressCopy?.country}, `}</OtherInfoPara>
                  <OtherInfoPara>{addressCopy?.zipCode}</OtherInfoPara>
                </CityCountryZip>
              </AddressInformation>
            ) : (
              <Paragraph onClick={() => setShowCheckoutModal(true)}>+ Add New Address</Paragraph>
            )}
            {showCheckoutModal && (
              <CheckoutFormModal
                address={address}
                onInputChange={handleInputChange}
                handleAddressSubmit={() => {
                  setShowCheckoutModal(false);
                  setAddressCopy(address);
                }}
                handleCloseButton={() => setShowCheckoutModal(false)}
              />
            )}
            {showVisaCard && (
              <VisaCard
                handleBackClick={() => {
                  setShowVisaCard(false);
                  setShowPaymentMethods(true);
                }}
              />
            )}
            {addressCopy && !showCheckoutModal && (
              <ModifyPara onClick={() => setShowCheckoutModal(true)}>Modify Address</ModifyPara>
            )}
          </DeliveryAddress>
          <PaymentMethod>
            <Header>Payment Methods</Header>
            <Paragraph onClick={() => setShowPaymentMethods(true)}>Select Payment Method</Paragraph>
            <ChosenPaymentParagraph></ChosenPaymentParagraph>
            {ShowPaymentMethods && (
              <PaymentMethodModal
                handleCancel={() => setShowPaymentMethods(false)}
                visaTrueFunction={() => {
                  setShowVisaCard(true);
                  setShowPaymentMethods(false);
                }}
              />
            )}
          </PaymentMethod>
          <ProductsToCheckout></ProductsToCheckout>
        </WithoutSumCardDiv>
        <SummaryCard>
          <CheckOutButton buttonName="Pay" handleButtonSubmit={() => console.log('paid')} />
        </SummaryCard>
      </CheckoutContainer>
      <Footer />
    </>
  );
}
