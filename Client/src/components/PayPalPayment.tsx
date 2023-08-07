import React, { useContext } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useCartContext } from './CartContext';

export default function PayPalPayment() {
  const { cartArray, setCartArray } = useCartContext();

  const createOrder = (data: any, action: any) => {
    // Order is created on the server and the order id is returned
    return fetch('localhost:8000/api/paypalPaymentTest/create-paypal-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // use the "body" param to optionally pass additional order information
      // like product skus and quantities
      body: JSON.stringify({
        cart: [
          {
            sku: 'YOUR_PRODUCT_STOCK_KEEPING_UNIT',
            quantity: 'YOUR_PRODUCT_QUANTITY',
          },
        ],
      }),
    })
      .then(response => response.json())
      .then(order => order.id);
  };
  const onApprove = (data: any, action: any) => {
    // Order is captured on the server and the response is returned to the browser
    return fetch('localhost:8000/api/paypalPaymentTest/capture-paypal-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        orderID: data.orderID,
      }),
    }).then(response => response.json());
  };
  return (
    <PayPalButtons
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
    />
  );
}
