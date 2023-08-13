import React, { useState } from 'react';
import styled from 'styled-components';
import { BsArrowLeft } from 'react-icons/bs';

const CardModalContainer = styled.div`
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

const CardInputContainer = styled.form`
  width: 90%;
  max-width: 500px;
  height: 620px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    height: 430px;
  }
`;

const CardNumberInput = styled.input`
  border: none;
  outline: none;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
`;

const CardDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ExpiryInput = styled.input`
  width: 100px;
  border: none;
  outline: none;
  padding: 10px;
  font-size: 16px;
  border-bottom: 1px solid #ccc;
`;

const CVVInput = styled.input`
  width: 80px;
  border: none;
  outline: none;
  padding: 10px;
  font-size: 16px;
  border-bottom: 1px solid #ccc;
`;

const FullNameInput = styled.input`
  border: none;
  outline: none;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
`;

const ConfirmButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
`;

const BsArrowLeftContainer = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 20px;
  color: rgb(117, 117, 117);
  font-weight: bold;
`;
const FormHeader = styled.h2`
  margin-top: 50px;
  font-size: 25px;
  text-align: center;
  margin-bottom: 10px;
  //   color: rgb(117, 117, 117);
`;
interface Props {
  handleBackClick: () => void;
}
export default function VisaCard({ handleBackClick }: Props) {
  const [fullName, setFullName] = useState('');

  const handleFullNameChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setFullName(e.target.value);
  };

  return (
    <CardModalContainer>
      <CardInputContainer>
        <BsArrowLeftContainer onClick={handleBackClick}>
          <BsArrowLeft />
        </BsArrowLeftContainer>
        <FormHeader>Enter Card Details</FormHeader>
        <FullNameInput type="text" placeholder="Full Name" value={fullName} onChange={handleFullNameChange} />
        <CardNumberInput type="text" placeholder="Card Number" />
        <CardDetails>
          <ExpiryInput type="text" placeholder="MM/YY" />
          <CVVInput type="text" placeholder="CVV" />
        </CardDetails>
        <ConfirmButton>Confirm</ConfirmButton>
      </CardInputContainer>
    </CardModalContainer>
  );
}
