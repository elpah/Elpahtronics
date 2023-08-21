import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import { Stripe, StripeElementsOptions, loadStripe } from '@stripe/stripe-js';
import StripeCheckoutForm from './StripeCheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { useCartContext } from './CartContext';

export default function StripePayment() {
  const [stripePromise, setStripePromise] = useState<Promise<Stripe | null> | null>(null);
  const [clientSecret, setClientSecret] = useState<string | null>();
  const totalPrice = useCartContext();
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
        amount: totalPrice.totalPrice * 100,
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

  const handlePaymentSuccess = async () => {
    // After payment success, send the order data to the backend
    try {
      const response = await fetch('http://localhost:8000/api/stripePaymentTest/create-new-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify({
        //   email,
        //   address,
        //   totalPrice: totalPrice.totalPrice,
        //   cart: cartArray.map(item => ({
        //     productName: item.productName,
        //     productQuantity: item.productQuantity,
        //   })),
        // }),
      });

      if (response.ok) {
        console.log('new order sent to the server.');
      } else {
        console.error('Failed to send send order.');
      }
    } catch (error) {
      console.error('Error sending order:', error);
    }
  };

  return (
    clientSecret && (
      <Elements stripe={stripePromise} options={{ clientSecret }}>
        <StripeCheckoutForm />
      </Elements>
    )
  );
}
