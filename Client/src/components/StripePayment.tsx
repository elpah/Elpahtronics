import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import { Stripe, StripeElementsOptions, loadStripe } from '@stripe/stripe-js';
import StripeCheckoutForm from './StripeCheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { useCartContext } from './CartContext';

export default function StripePayment() {
  const [stripePromise, setStripePromise] = useState<Promise<Stripe | null> | null>(null);
  const [clientSecret, setClientSecret] = useState<string | null>();
  const { totalPrice, setCartArray, cartArray } = useCartContext();
  useEffect(() => {
    fetch('http://localhost:8000/api/stripePaymentTest/config').then(async result => {
      const { publishableKey } = await result.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    fetch('http://localhost:8000/api/stripePaymentTest/create-payment-intent', {
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
      <Elements stripe={stripePromise} options={{ clientSecret }}>
        <StripeCheckoutForm />
      </Elements>
    )
  );
}
