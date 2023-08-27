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
import { useOrderContext } from './OrderContext';
import { useNavigate } from 'react-router-dom';

import { useShippingAddressContext } from '../components/ShippingAddressContext';

export default function StripeCheckoutForm() {
  const { cartArray, totalPrice, setCartArray } = useCartContext();
  const {
    orderTotal,
    orderDate,
    paymentMethod,
    orderEmail,
    expectedDelivery,
    deliveryOptions,
    orderNumber,
    setOrderNumber,
    setOrderTotal,
    setOrderDate,
    setPaymentMethod,
    setOrderEmail,
    setExpectedDelivery,
    setDeliveryOptions,
  } = useOrderContext();
  const [sameAsShipping, setSameAsShipping] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState<string | undefined>();
  const [email, setEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [billingAddress, setBillingAddress] = useState({});
  const { shippingAddress, setShippingAddress } = useShippingAddressContext();

  const navigate = useNavigate();

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
      setMessage(error.message);
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
          address: shippingAddress,
          email: email,
        }),
      })
        //email notification
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setOrderNumber(data.orderNumber);
          setOrderDate(data.orderDate);
          setPaymentMethod(data.paymentMethod);
          setOrderEmail(data.emailAddress);
          setExpectedDelivery(data.expectedDelivery);
          setDeliveryOptions(data.deliveryOptions);
          setOrderTotal(`${'\u20AC'}${data.totalPrice}`);
        })
        .catch(error => {
          console.error('Error sending POST request:', error);
        });
      setCartArray([]);
    }
  };
  // useEffect(() => {
  //   if (orderNumber && orderTotal && orderDate && orderEmail && orderNumber && expectedDelivery && deliveryOptions) {
  navigate('/success');
  //   }
  // }, [orderNumber, orderTotal, orderDate, orderEmail, orderNumber, expectedDelivery, deliveryOptions]);
  return (
    <StyledForm onSubmit={handleSubmit}>
      <LinkAuthenticationElement
        onChange={event => {
          setEmail(event.value.email);
        }}
      />
      <PaymentElement />
      <BillingPara>Billing Address</BillingPara>
      <BillingDiv>
        <input
          type="checkbox"
          onChange={() => {
            setSameAsShipping(!sameAsShipping);
            if (sameAsShipping) {
              setBillingAddress(shippingAddress);
            }
          }}
        />
        <label>Same as Shipping Address</label>
      </BillingDiv>
      {!sameAsShipping && (
        <AddressElement
          options={{ mode: 'billing' }}
          onChange={event => {
            setBillingAddress(event.value);
          }}
        />
      )}
      <StyledButton disabled={!stripe || !elements}>
        <span>{isProcessing ? 'Processing ... ' : 'Pay now'}</span>
      </StyledButton>
      {message && <div style={{ color: 'red', fontSize: '20px' }}>{message}</div>}
    </StyledForm>
  );
}

const BillingDiv = styled.div`
  margin-bottom: 10px;
`;
const BillingPara = styled.p`
  margin-top: 15px;
  margin-bottom: 5px;
  font-size: 16px;
`;
const StyledForm = styled.form`
  max-width: 700px;
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
