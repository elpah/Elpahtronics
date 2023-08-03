import React, { useEffect } from 'react';
import styled from 'styled-components';
import useCountries from './hooks/useCountries';

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
  width: 80%;
  max-width: 500px;
  height: 600px;
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const FormHeader = styled.h2`
  margin-bottom: 20px;
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

const NameNumberDiv = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export default function CheckoutFormModal() {
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
          <h2>Contact</h2>
          <NameNumberDiv>
            <Input type="text" placeholder="Name" />
            <Input type="text" placeholder="Phone number" />
          </NameNumberDiv>

          <h2>Address</h2>

          <Input type="text" placeholder="Street" />
          <Input type="text" placeholder="Apartment, unit, etc" />
          <select name="countryCode" id="countryCode">
            <option value="">Select a country</option>
            {countries?.map(country => (
              <option key={country.name} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
          <Input type="text" placeholder="State/Provice/Region" />
          <Input type="text" placeholder="City" />
          <Input type="text" placeholder="Zip Code" />
          <button type="submit">Submit</button>
        </Form>
      </FormContainer>
    </FormModalContainer>
  );
}
