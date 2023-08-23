import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Footer from '../components/Footer';
import { facebook, instagram, twitter } from '../assets/images/exportImages';
import { Elements, useStripe } from '@stripe/react-stripe-js';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useOrderContext } from '../components/OrderContext';

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const fillAnimation = keyframes`
  0% {
    stroke-dashoffset: 157;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

const Container = styled.div`
  display: inline-block;
  position: relative;
  margin-top: 50px;
`;

const Circle = styled.circle`
  fill: none;
  stroke: green;
  stroke-width: 0.8;
  stroke-dasharray: 157;
  stroke-dashoffset: 157;
  animation: ${fillAnimation} 2s ease-in-out forwards;
  @media (max-width: 280px) {
    stroke-width: 1.5;
  }
`;
const CheckIcon = styled.svg`
  position: absolute;
  fill: green;
  animation: ${rotateAnimation} 2s linear forwards;
  opacity: 1;
`;
const SuccessPageContainer = styled.div`
  height: 100vh;
`;

const Header = styled.h1`
  font-size: 24px;

  @media (max-width: 280px) {
    font-size: 20px;
  }
`;
const HeaderParagraph = styled.p`
  font-size: 15px;
  margin-bottom: 20px;

  @media (max-width: 280px) {
    font-size: 13px;
  }
`;

const OrderNumberHeader = styled.h2`
  font-size: 13px;
  @media (max-width: 280px) {
    font-size: 12px;
  }
  width: 100%;
  margin: 0 auto;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1.5px;
    background-color: black;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
  }
  margin-bottom: 30px;
  @media (min-width: 768px) {
    font-size: 17px;
  }
`;
const TopHeaderContainer = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: auto;
  text-align: center;
  margin-bottom: 30px;
  @media (min-width: 500px) {
    margin-bottom: 60px;
  }
`;
const OrderDetailsContainer = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: auto;
`;
const DetailsDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);

    gap: auto;
    width: 100%;
    margin: 0 auto;
    justify-items: space-between;
  }
`;

const SmallDiv = styled.div``;
const SmallDivHeader = styled.h2`
  font-size: 14px;
  @media (max-width: 280px) {
    font-size: 12px;
  }

  @media (min-width: 768px) {
    font-size: 17px;
  }
`;
const SmallDivParagraph = styled.p`
  font-size: 13px;
  @media (max-width: 280px) {
    font-size: 12px;
  }
  @media (min-width: 768px) {
    font-size: 15px;
  }
`;
const EmailDivContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  height: 100px;
`;

const EmailDiv = styled.div`
  display: flex;
  max-width: 700px;
  width: 100%;
  margin: 0 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  width: 100px;
  background-color: transparent;
  color: black;
  border: 1px solid #ccc;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const SocialsDiv = styled.div`
  margin-top: 20px;
`;
const SocialHeader = styled.h2`
  text-align: center;
  font-size: 18px;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    font-size: 22px;
  }
`;
const SocialsImage = styled.img`
  width: 25px;
  height: 25px;
  margin: 5px;
  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;
const SocialsImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default function PaymentSuccess() {
  const { orderNumber, orderTotal, orderDate, paymentMethod, orderEmail, expectedDelivery, deliveryOptions } =
    useOrderContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      !orderNumber &&
      !orderTotal &&
      !orderDate &&
      !paymentMethod &&
      !orderEmail &&
      !expectedDelivery &&
      !deliveryOptions
    ) {
      navigate('/');
    }
  }, []);
  return (
    <SuccessPageContainer>
      <TopHeaderContainer>
        <Container>
          <svg width="50" height="50" viewBox="0 0 24 24">
            <Circle cx="12" cy="12" r="10" />
            <CheckIcon viewBox="0 0 28 23 ">
              <path d="M9.75 16.406L4.293 11.25 3 12.542l6.75 6.75 14.25-14.25-1.292-1.292z" />
            </CheckIcon>
          </svg>
        </Container>
        <Header>Thank You For Your Order!</Header>
        <HeaderParagraph>Check your inbox for a confirmation sent to youremail@email.com</HeaderParagraph>
      </TopHeaderContainer>

      <OrderDetailsContainer>
        <OrderNumberHeader>Order Number: {`#${orderNumber}`}</OrderNumberHeader>
        <DetailsDiv>
          <SmallDiv>
            <SmallDivHeader>Order total</SmallDivHeader>
            <SmallDivParagraph>{orderTotal}</SmallDivParagraph>
          </SmallDiv>
          <SmallDiv>
            <SmallDivHeader>Order date</SmallDivHeader>
            <SmallDivParagraph>{orderDate}</SmallDivParagraph>
          </SmallDiv>
          <SmallDiv>
            <SmallDivHeader>Payment method</SmallDivHeader>
            <SmallDivParagraph>{paymentMethod}</SmallDivParagraph>
          </SmallDiv>
          <SmallDiv>
            <SmallDivHeader>Email</SmallDivHeader>
            <SmallDivParagraph>{orderEmail}</SmallDivParagraph>
          </SmallDiv>
          <SmallDiv>
            <SmallDivHeader>Expected delivery</SmallDivHeader>
            <SmallDivParagraph>{expectedDelivery}</SmallDivParagraph>
          </SmallDiv>
          <SmallDiv>
            <SmallDivHeader>Delivery options</SmallDivHeader>
            <SmallDivParagraph>{deliveryOptions}</SmallDivParagraph>
          </SmallDiv>
        </DetailsDiv>
        <EmailDivContainer>
          <EmailDiv>
            <Input type="text" />
            <Button>Subscribe</Button>
          </EmailDiv>
        </EmailDivContainer>
        <SocialsDiv>
          <SocialHeader>Follow Us On Social Media</SocialHeader>
          <SocialsImageContainer>
            <SocialsImage src={facebook} alt="facebook icon" />
            <SocialsImage src={instagram} alt="instagram icon" />
            <SocialsImage src={twitter} alt="twitter icon" />
          </SocialsImageContainer>
        </SocialsDiv>
      </OrderDetailsContainer>
      <Footer />
    </SuccessPageContainer>
  );
}
