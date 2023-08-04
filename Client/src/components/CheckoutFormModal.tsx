import React, { useEffect } from 'react';
import styled from 'styled-components';
import useCountries from './hooks/useCountries';

interface Props {
  handleAddressSubmit: () => void;
  handleCloseButton: () => void;
}
const FormModalContainer = styled.div`
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

const FormContainer = styled.div`
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

const FormHeader = styled.h2`
  margin-bottom: 20px;
  font-size: 25px;
  color: rgb(41, 43, 43);
`;

const SubHeader = styled.h2`
  font-size: 18px;
  color: rgb(41, 43, 43);
  margin-bottom: 5px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
`;

const Select = styled.select`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  max-width: ;
`;
const Button = styled.button`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  @media (min-width: 768px) {
    background-color: transparent;
    &:hover {
      background-color: black;
      color: white;
    }
  }
`;

const TwoRowDiv = styled.div`
width:100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
flex-direction:row;
justify-content: space-between;
& input {
    width: 49%;
  }
 
`;
const ThreeRowDiv = styled.div`
width:100%;
display: flex;
flex-direction: column;

@media (min-width: 768px) {
flex-direction:row;
justify-content: space-between;
& input {
    width: 32%;
  }
  & select {
    width: 33%;
  }
`;
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  background-color: transparent;
  color: rgb(168, 168, 168);
  border: none;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;

export default function CheckoutFormModal({ handleAddressSubmit, handleCloseButton }: Props) {
  const { data: countries, error, isLoading } = useCountries();
  useEffect(() => console.log(countries), []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <FormModalContainer>
      <FormContainer>
        <FormHeader>Add a new address</FormHeader>
        <Form onSubmit={() => console.log('submitted')}>
          <SubHeader>Contact</SubHeader>
          <TwoRowDiv>
            <Input type="text" placeholder="Name" />
            <Input type="text" placeholder="Phone number" />
          </TwoRowDiv>

          <SubHeader>Address</SubHeader>
          <TwoRowDiv>
            <Input type="text" placeholder="Street" />
            <Input type="text" placeholder="Apartment, unit, etc" />
          </TwoRowDiv>
          <ThreeRowDiv>
            <Select name="countryCode" id="countryCode">
              <option value="">Select a country</option>
              {countries?.map(country => (
                <option key={country.name} value={country.name}>
                  {country.name}
                </option>
              ))}
            </Select>

            <Input type="text" placeholder="State/Provice/Region" />
            <Input type="text" placeholder="City" />
          </ThreeRowDiv>
          <Input type="text" placeholder="Zip Code" />
          <Button type="submit" onClick={handleAddressSubmit}>
            Submit
          </Button>
        </Form>
        <CloseButton onClick={handleCloseButton}>X</CloseButton>
      </FormContainer>
    </FormModalContainer>
  );
}
