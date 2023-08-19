import {
  PaymentElement,
  LinkAuthenticationElement,
  AddressElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { useState } from 'react';
import styled from 'styled-components';

export default function StripeCheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState<string | undefined>();
  const [email, setEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    setIsProcessing(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/success`,
      },
    });

    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message);
    } else {
      setMessage('An unexpected error occured.');
    }

    setIsProcessing(false);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <LinkAuthenticationElement
        onChange={event => {
          setEmail(event.value.email);
        }}
        options={{ defaultValues: { email: 'youremail@email.com' } }}
      />
      <AddressElement
        options={{ mode: 'shipping' }}

        // Access the address like so:
        // onChange={(event) => {
        //   setAddressState(event.value);
        // }}
      />

      <PaymentElement />
      <StyledButton disabled={isProcessing || !stripe || !elements} id="submit">
        <span id="button-text">{isProcessing ? 'Processing ... ' : 'Pay now'}</span>
      </StyledButton>
      {message && <div id="payment-message">{message}</div>}
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
