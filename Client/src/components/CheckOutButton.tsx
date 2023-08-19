import React from 'react';
import styled from 'styled-components';

const CheckoutButton = styled.button`
  background-color: #000;
  color: #fff;
  width: 100%;
  height: 40px;
  font-size: 18px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  textdecoration: none;

  &:not(:disabled):hover {
    background-color: #1a961c;
  }
`;
interface Props {
  handleButtonSubmit: () => void;
  buttonName: string;
  disabled?: boolean;
}

export default function CheckOutButton({ buttonName, handleButtonSubmit, disabled }: Props) {
  return (
    <CheckoutButton disabled={disabled} onClick={handleButtonSubmit}>
      {buttonName}
    </CheckoutButton>
  );
}
