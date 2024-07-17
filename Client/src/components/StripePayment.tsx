import React from 'react';
import { useState, useEffect } from 'react';
import { Stripe, loadStripe } from '@stripe/stripe-js';
import StripeCheckoutForm from './StripeCheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { useCartContext } from './CartContext';
import styled from 'styled-components';

interface Props {
  handleCloseButton: () => void;
}

export default function StripePayment({ handleCloseButton }: Props) {
  const [stripePromise, setStripePromise] = useState<Promise<Stripe | null> | null>(null);
  const [clientSecret, setClientSecret] = useState<string | null>();
  const { totalPrice } = useCartContext();
  useEffect(() => {
    fetch('https://elpahtronics-backend.vercel.app/api/stripePaymentTest/confi').then(async result => {
      const { publishableKey } = await result.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    fetch('https://elpahtronics-backend.vercel.app/api/stripePaymentTest/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: totalPrice * 100,
      }),
    })
      .then(async result => {
        const responseJson = await result.json();
        const newClientSecret = responseJson.client_secret;
        setClientSecret(newClientSecret);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }, []);

  return (
    clientSecret && (
      <ModalContainer>
        <StripeContainer>
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <StripeCheckoutForm />
          </Elements>
          <CloseButton onClick={handleCloseButton}>X</CloseButton>
        </StripeContainer>
      </ModalContainer>
    )
  );
}

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const StripeContainer = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 5px;
  width: 80%;
  max-width: 550px;
  padding: 10px;
  max-height: 600px;
  overflow: auto;
`;

const CloseButton = styled.button`
  font-size: 15px;
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;
