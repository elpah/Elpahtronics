import {
  PaymentElement,
  LinkAuthenticationElement,
  AddressElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { useState } from 'react';
import styled from 'styled-components';
import { useCartContext } from './CartContext';
import { useOrderContext } from './OrderContext';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from './UserContext';

import { useShippingAddressContext } from '../components/ShippingAddressContext';

export default function StripeCheckoutForm() {
  const { cartArray, totalPrice, setCartArray } = useCartContext();
  const { currentUser } = useUserContext();

  const {
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
  const [_billingAddress, setBillingAddress] = useState({});
  const { shippingAddress } = useShippingAddressContext();

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
      const requestBody = {
        cart: cartArray.map(item => ({
          productId: item.productId,
          productName: item.productName,
          productPrice: item.productPrice,
          productQuantity: item.productQuantity,
        })),
        totalPrice: totalPrice,
        address: shippingAddress,
        email: email,
        fbId: '',
      };

      if (currentUser.fbId !== '') {
        requestBody.fbId = currentUser.fbId;
      }

      fetch('https://elpahtronics-backend.vercel.app/api/stripePaymentTest/create-new-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      })
        .then(response => response.json())
        .then(data => {
          setOrderNumber(data.orderNumber);
          setOrderDate(data.orderDate);
          setPaymentMethod(data.paymentMethod);
          setOrderEmail(data.emailAddress);
          setExpectedDelivery(data.expectedDelivery);
          setDeliveryOptions(data.deliveryOptions);
          setOrderTotal(`${'\u20AC'}${data.totalPrice}`);
          setCartArray([]);
          navigate('/success');
        })
        .catch(error => {
          console.error('Error sending POST request:', error);
        });
    }
  };
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
        <Input
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

const Input = styled.input``;
const BillingDiv = styled.div`
  cursor: pointer;
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
