import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  margin: auto;
  margin-top: -15;
  display: flex;
  flex-direction: column;
`;

const FormInput = styled.input`
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 15px;
  font-size: 16px;
  outline: none; /* Remove the default blue outline on focus */
`;

const NameDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 1198px) {
    flex-direction: row;
    & input {
      width: 48%;
    }
  }
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 15px;
  margin-top: 10px;
  font-size: 16px;
  resize: vertical;
  outline: none;
  rows: 5;
  overflow-y: auto;
  // font-family: inherit;
  resize: none;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #fff;
  color: #000;

  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const PrivacyLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  input {
    margin-right: 8px;
  }
`;
type formProps = {
  handleSubmit: (formData: FormData) => void;
};

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
  checkbox: boolean;
};

export default function MessageForm({ handleSubmit, ...props }: formProps) {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
    checkbox: false,
  });

  function resetForm() {
    setFormValues({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
      checkbox: false,
    });
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    setFormValues(prevValues => ({
      ...prevValues,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(formValues);
    resetForm();
  };

  return (
    <Form onSubmit={submitForm}>
      <NameDiv>
        <FormInput
          required
          type="text"
          name="firstName"
          value={formValues.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
        <FormInput
          required
          type="text"
          name="lastName"
          value={formValues.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
      </NameDiv>
      <FormInput
        required
        type="email"
        name="email"
        value={formValues.email}
        onChange={handleChange}
        placeholder="youremail@email.com"
      />
      <FormInput
        required
        type="text"
        name="subject"
        value={formValues.subject}
        onChange={handleChange}
        placeholder="Subject"
      />
      <TextArea
        required
        name="message"
        value={formValues.message}
        onChange={handleChange}
        placeholder="Enter Your Message"
      />
      <PrivacyLabel>
        <input
          id="privacyCheckbox"
          name="checkbox"
          type="checkbox"
          checked={formValues.checkbox}
          onChange={handleChange}
        />
        <label htmlFor="privacyCheckbox">You agree to our friendly Privacy Policy</label>
      </PrivacyLabel>
      <Button type="submit">Send Message</Button>
    </Form>
  );
}
