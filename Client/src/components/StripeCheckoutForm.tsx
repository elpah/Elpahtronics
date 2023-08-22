import {
  PaymentElement,
  LinkAuthenticationElement,
  AddressElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

import { Stripe, loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useCartContext } from './CartContext';

export default function StripeCheckoutForm() {
  const { cartArray, totalPrice, setCartArray } = useCartContext();
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState<string | undefined>();
  const [email, setEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [address, setAddress] = useState({});
  const [returnUrl, setReturnUrl] = useState('');

  // useEffect(() => console.log(stripe), []);
  // useEffect(() => console.log(elements), []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      redirect: 'if_required',
    });

    if (error) {
      console.log('error');
      setIsProcessing(false);
    } else {
      fetch('http://localhost:8000/api/stripePaymentTest/create-new-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cart: cartArray.map(item => ({
            productName: item.productName,
            productQuantity: item.productQuantity,
          })),
          totalPrice: totalPrice,
          address: address,
          email: email,
        }),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Response from server:', data);
        })
        .catch(error => {
          console.error('Error sending POST request:', error);
        });
    }
    // if (!error) {
    //   console.log('Payment Successfull');
    //   setCartArray([]);
    // } else {
    //   setMessage(error.message);
    //   console.log('Payment Successfull');
    //   setIsProcessing(false);
    // }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <LinkAuthenticationElement
        onChange={event => {
          setEmail(event.value.email);
        }}
      />
      <AddressElement
        options={{ mode: 'shipping' }}
        onChange={event => {
          setAddress(event.value);
        }}
      />

      <PaymentElement />
      <StyledButton disabled={!stripe || !elements}>
        <span>{isProcessing ? 'Processing ... ' : 'Pay now'}</span>
      </StyledButton>
      {message && <div>{message}</div>}
    </StyledForm>
  );
}

const StyledForm = styled.form`
  max-width: 520px;
  width: 100%;
  margin: auto;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const StyledButton = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
  width: 100%;
`;
