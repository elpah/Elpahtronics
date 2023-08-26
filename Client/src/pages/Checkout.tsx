import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import SummaryCard from '../components/SummaryCard.tsx';
import Footer from '../components/Footer.tsx';
import CheckoutFormModal from '../components/CheckoutFormModal.tsx';
import PaymentMethodModal from '../components/PaymentMethodModal.tsx';
import Address from '../addressType.ts';
import CheckOutButton from '../components/CheckOutButton.tsx';
import StripePayment from '../components/StripePayment.tsx';
import { useShippingAddressContext } from '../components/ShippingAddressContext';

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
  position: relative;
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

const ModifyPayment = styled.p`
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

export default function Checkout() {
  const [showCheckoutModal, setShowCheckoutModal] = useState<boolean>(false);
  const [ShowPaymentMethods, setShowPaymentMethods] = useState<boolean>(false);
  const { shippingAddress, setShippingAddress } = useShippingAddressContext();
  const [paymentMethodSelected, setPaymentMethodSelectedd] = useState('');
  const [stripeModal, setStripeModal] = useState(false);
  const [addressCopy, setAddressCopy] = useState<Address | null>();

  // useEffect(() => {
  //   if (shippingAddress) {
  //     setAddressCopy(shippingAddress);
  //   }
  // }, [shippingAddress]);

  function handlePaymentSelectConfirm(method: string) {
    setPaymentMethodSelectedd(method);
    setShowPaymentMethods(false);
  }

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
                  <OtherInfoPara>{addressCopy?.postalCode}</OtherInfoPara>
                </CityCountryZip>
              </AddressInformation>
            ) : (
              <Paragraph onClick={() => setShowCheckoutModal(true)}>+ Add New Address</Paragraph>
            )}
            {showCheckoutModal && (
              <CheckoutFormModal
                handleAddressSubmit={() => {
                  setAddressCopy(shippingAddress);
                  setShowCheckoutModal(false);
                }}
                handleCloseButton={() => setShowCheckoutModal(false)}
              />
            )}

            {addressCopy && !showCheckoutModal && (
              <ModifyPara onClick={() => setShowCheckoutModal(true)}>Modify Address</ModifyPara>
            )}
          </DeliveryAddress>
          <PaymentMethod>
            <Header>Payment Methods</Header>
            {paymentMethodSelected && <OtherInfoPara>{paymentMethodSelected}</OtherInfoPara>}

            {!paymentMethodSelected ? (
              <Paragraph onClick={() => setShowPaymentMethods(true)}>Select Payment Method</Paragraph>
            ) : (
              <ModifyPayment onClick={() => setShowPaymentMethods(true)}>Change Payment Method</ModifyPayment>
            )}
            {ShowPaymentMethods && (
              <PaymentMethodModal
                handleCancel={() => setShowPaymentMethods(false)}
                handleConfirm={(method: string) => {
                  handlePaymentSelectConfirm(method);
                }}
              />
            )}
          </PaymentMethod>
          <ProductsToCheckout></ProductsToCheckout>
        </WithoutSumCardDiv>
        <SummaryCard>
          <div style={{ marginBottom: '15px' }}></div>
          <CheckOutButton
            disabled={!addressCopy || !paymentMethodSelected}
            buttonName="Pay"
            handleButtonSubmit={() => setStripeModal(true)}
          />
        </SummaryCard>
      </CheckoutContainer>
      {stripeModal && <StripePayment handleCloseButton={() => setStripeModal(false)} />}
      <Footer />
    </>
  );
}
