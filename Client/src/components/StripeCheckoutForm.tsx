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
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
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
  max-width: 500px;
  width: 100%;
  margin: auto;
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
