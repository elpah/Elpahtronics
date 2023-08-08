import React, { useContext, useEffect, useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useCartContext } from './CartContext';
import { Navigate, useNavigate } from 'react-router-dom';
import Product from '../productType';

export default function PayPalPayment() {
  const { cartArray } = useCartContext();

  const navigate = useNavigate();

  const totalPrice = cartArray.reduce(
    (total, product) => total + parseInt(product.productPrice, 10) * product.productQuantity,
    0,
  );
  const createOrder = (data: any) => {
    // Order is created on the server and the order id is returned
    return fetch('http://localhost:8000/api/paypalPaymentTest/create-paypal-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // use the "body" param to optionally pass additional order information
      // like product skus and quantities
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
    }).then(response => {
      response.json();
      console.log(response);
      //   navigate('/success');
    });
  };

  //todo
  //function that creates an order using the order ID, and send it to the backend, and save it to the order db
  // generate an orderNumber, or use orderID
  //show order on the frontend on successPage

  //On error,
  return (
    <PayPalButtons
      //   fundingSource="paypal"
      createOrder={(data, actions) => createOrder(data)}
      onApprove={(data, actions) => onApprove(data)}
    />
  );
}
