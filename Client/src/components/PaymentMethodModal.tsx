import React, { useState } from 'react';
import styled from 'styled-components';
import { secured, paypal, visa, ideal } from '../assets/images/exportImages';

const PaymentMethodModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;
const PaymentMethodsContainer = styled.div`
  position: relative;
  width: 90%;
  max-width: 500px;
  height: 550px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  @media (min-width: 768px) {
    height: 430px;
  }
`;
const Header = styled.h2`
  margin-top: -10px;

  text-align: center;
`;
const Paragraph = styled.p`
  text-align: center;
  margin-bottom: 10px;
  font-size: 15px;
  color: rgb(74, 186, 127);
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Image = styled.img`
  width: 13px;
  height: 20px;
  margin-right: 5px;
`;

const PaymentCardContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  border: 1px solid black;
  margin-bottom: 20px;
  cursor: pointer;

  & img {
    vertical-align: middle;
    padding-bottom: 4px;
    height: 20px;
    width: 20px;
    margin-left: 10px;
    margin-right: 10px;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const ConfirmButton = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgb(237, 101, 40);
  padding: 8px;
  width: 100px;
  border-radius: 6px;
  color: white;
  border: 1px solid #ccc;
  font-weight: 600;
  margin-right: 10px;
  cursor: pointer;
`;

const CancelButton = styled.div`
  display: flex;
  justify-content: center;
  background-color: transparent;
  padding: 8px;
  width: 90px;
  border-radius: 6px;
  color: black;
  border: 1px solid #ccc;
  font-weight: 600;
  cursor: pointer;
`;

const Label = styled.label``;
const Input = styled.input``;

interface Props {
  handleCancel: () => void;
  visaTrueFunction: () => void;
}

export default function PaymentMethodModal({ handleCancel, visaTrueFunction }: Props) {
  const [selectedPaymentMethod, setPaymentMethodChosen] = useState<string>('');
  return (
    <PaymentMethodModalContainer>
      <PaymentMethodsContainer>
        <Header>Payment Methods</Header>
        <Div>
          <Image src={secured} alt="" />
          <Paragraph>Your payment details are safe with us</Paragraph>
        </Div>

        <Label>
          <PaymentCardContainer>
            <Input type="radio" name="paymentMethod" value="ideal" onChange={() => setPaymentMethodChosen('ideal')} />
            <img src={ideal} alt="ideal logo" /> Ideal
          </PaymentCardContainer>
        </Label>
        <Label>
          <PaymentCardContainer>
            <Input
              type="radio"
              name="paymentMethod"
              value="visa"
              onChange={() => {
                setPaymentMethodChosen('visa');
                visaTrueFunction();
              }}
            />
            <img src={visa} alt="visa logo" />
            Visa
          </PaymentCardContainer>
        </Label>
        <Label>
          <PaymentCardContainer>
            <Input type="radio" name="paymentMethod" value="paypal" onChange={() => setPaymentMethodChosen('paypal')} />
            <img src={paypal} alt="paypal logo" /> Paypal
          </PaymentCardContainer>
        </Label>
        <Label>
          <PaymentCardContainer>
            <Input
              type="radio"
              name="paymentMethod"
              value="bitcoin"
              onChange={() => setPaymentMethodChosen('bitcoin')}
            />
            <img src="https://cdn-icons-png.flaticon.com/128/196/196543.png" alt="bitcoin logo" /> Bitcoin
          </PaymentCardContainer>
        </Label>
        <ButtonContainer>
          <ConfirmButton>Confirm</ConfirmButton>
          <CancelButton onClick={handleCancel}>Cancel</CancelButton>
        </ButtonContainer>
      </PaymentMethodsContainer>
    </PaymentMethodModalContainer>
  );
}
