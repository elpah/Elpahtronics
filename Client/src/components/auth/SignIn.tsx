import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { auth } from '../../firebase';

const Form = styled.form``;

const Header = styled.h2`
  margin-bottom: 20px;
  color: #007bff;
  font-size: 35px;
  text-align: center;
  font-weight: bold;
`;

const Input = styled.input`
  font-size: 20px;
  width: 100%;
  height: 60px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;
const ForgotPassword = styled.p`
  font-size: 20px;
  margin-top: 10px;
  text-align: center;
  color: rgb(186, 186, 186);
  &:hover {
    color: black;
    cursor: pointer;
  }
`;
const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  margin-top: 10px;
`;
const Button = styled.button`
  width: 100%;
  height: 60px;
  font-size: 20px;
  margin-top: 10px;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const signIn = (event: any) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const userId = userCredentials.user.uid;
        const userEmail = userCredentials.user.email;
        if (userEmail) {
          localStorage.setItem('userId', userId);
          localStorage.setItem('userEmail', userEmail);
        }
        navigate('/adminpage');
      })
      .catch(error => {
        if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
          setErrorMessage('Wrong email or password. Please try again.');
        } else {
          setErrorMessage('An error occurred. Please try again later.');
        }
      });
  };

  return (
    <Form onSubmit={signIn}>
      <h1>LOGO</h1>
      <Header>Log In</Header>
      <Input type="email" value={email} onChange={event => setEmail(event.target.value)} placeholder="Enter Email" />
      <Input
        type="password"
        value={password}
        onChange={event => setPassword(event.target.value)}
        placeholder="Enter Password"
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

      <Button type="submit">Login</Button>

      <ForgotPassword>Forgot your password?</ForgotPassword>
    </Form>
  );
}