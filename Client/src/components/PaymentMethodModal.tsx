import React from 'react';
import styled from 'styled-components';

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
  height: 620px;
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
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
  font-size: 12px;
  color: rgb(74, 186, 127);
`;

const PaymentCardContainer = styled.div`
  widdth: 100%;
  height: 50px;
  border: 1px solid black;
  margin-bottom: 20px;
`;

export default function PaymentMethodModal() {
  return (
    <PaymentMethodModalContainer>
      <PaymentMethodsContainer>
        <Header>Payment Methods</Header>
        <Paragraph>Your payment details are safe with us</Paragraph>

        <PaymentCardContainer>
          <label>
            <input type="radio" value="option1" onChange={() => console.log('changed')} />
            Option 1
          </label>
        </PaymentCardContainer>
        <PaymentCardContainer>
          <label>
            <input type="radio" value="option1" onChange={() => console.log('changed')} />
            Option 2
          </label>
        </PaymentCardContainer>
        <PaymentCardContainer>
          <label>
            <input type="radio" value="option1" onChange={() => console.log('changed')} />
            Option 2
          </label>
        </PaymentCardContainer>
        <PaymentCardContainer>
          <label>
            <input type="radio" value="option1" onChange={() => console.log('changed')} />
            Option 4
          </label>
        </PaymentCardContainer>
      </PaymentMethodsContainer>
    </PaymentMethodModalContainer>
  );
}
