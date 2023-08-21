import React, { useContext, useEffect, useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useCartContext } from './CartContext';
import { Navigate, useNavigate } from 'react-router-dom';
import Product from '../productType';

export default function PayPalPayment() {
  const { cartArray, totalPrice } = useCartContext();
  const navigate = useNavigate();

  const createOrder = (data: any) => {
    return fetch('http://localhost:8000/api/paypalPaymentTest/create-paypal-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        product: cartArray,
        totalPrice: totalPrice,
      }),
    })
      .then(response => response.json())
      .then(order => {
        return order.id;
      });
  };

  const onApprove = (data: any) => {
    return fetch('http://localhost:8000/api/paypalPaymentTest/capture-paypal-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        orderID: data.orderID,
        cart: cartArray.map(item => ({
          productName: item.productName,
          productQuantity: item.productQuantity,
        })),
        totalPrice: totalPrice,
      }),
    })
      .then(response => {
        response.json();
        console.log(response);
        // navigate('/success');
      })
      .catch(err => console.log(err));
  };

  //todo
  //function that creates an order using the order ID, and send it to the backend, and save it to the order db
  // generate an orderNumber, or use orderID
  //show order on the frontend on successPage

  //On error,

  return (
    <PayPalButtons
      disabled={cartArray.length === 0}
      fundingSource="paypal"
      createOrder={(data, actions) => createOrder(data)}
      onApprove={(data, actions) => onApprove(data)}
    />
  );
}
