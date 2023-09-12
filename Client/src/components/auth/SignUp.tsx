import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { auth } from '../../firebase';
import { SignOutFunction } from './SignOut';
import { footerlogosmall } from '../../assets/images/exportImages';

const Form = styled.form`
  width: 90%;
  margin: auto;
  margin-top: 30px;
  @media (min-width: 768px) {
    min-width: 550px;
    margin-top: -60px;
  }
  @media (min-width: 1198px) {
    margin-top: 90px;
  }
`;
const Image = styled.img`
  height: 50px;
  margin-top: 80px;
`;
const Header = styled.h2`
  margin-bottom: 20px;
  color: #007bff;
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  @media (min-width: 768px) {
    font-size: 35px;
  }
`;

const Input = styled.input`
  font-size: 20px;
  width: 100%;
  height: 40px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  @media (min-width: 768px) {
    height: 60px;
  }
`;

const NamePass = styled.input`
  width: 100%;
  font-size: 20px;
  height: 40px;

  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;

  @media (min-width: 768px) {
    width: 49%;
    height: 60px;
  }
`;

const Dob = styled.input`
  font-size: 20px;
  width: 100%;
  height: 40px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  @media (min-width: 768px) {
    width: 38%;
    height: 60px;
  }
`;

const Phone = styled.input`
  font-size: 20px;
  width: 100%;
  height: 40px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  @media (min-width: 768px) {
    width: 60%;
    height: 60px;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  margin-top: 10px;
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  font-size: 20px;
  margin-top: 10px;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  @media (min-width: 768px) {
    height: 60px;
  }
  &:hover {
    background-color: #0056b3;
  }
`;

const Span = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin-bottom: 20px;
  &:hover {
    color: blue;
  }
`;

const HaveAccount = styled.p`
  font-size: 15px;
  margin-top: 10px;
  text-align: center;
  color: rgb(186, 186, 186);
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export default function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dob, setDOB] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const signUp = (event: any) => {
    event.preventDefault();
    if (password !== repeatPassword) {
      return setErrorMessage('passwords do not match');
    }
    setErrorMessage('');
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        const uid = user.uid;
        if (user) {
          createUserInDb(firstName, lastName, email, dob, uid);
          SignOutFunction();
        }
      })
      .catch(error => {
        setErrorMessage(error.message);
      });
  };
  async function createUserInDb(firstName: string, lastName: string, email: string, dob: string, fbId: string) {
    try {
      const response = await fetch('http://localhost:8000/api/users/create-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${firstName} ${lastName}`,
          userEmailAddress: email,
          userDob: dob,
          fbId: fbId,
          userPhoneNumber: phoneNumber,
        }),
      });

      if (response.ok) {
        console.log(response.status);
      } else {
        console.error('Request failed with status:', response.status);
      }
    } catch (error) {
      console.error('Error sending POST request:', error);
    }
  }

  return (
    <Form onSubmit={signUp}>
      <Image src={footerlogosmall} alt="" />
      <Header>Sign Up</Header>
      <Container>
        <NamePass
          type="text"
          value={firstName}
          onChange={event => {
            setFirstName(event.target.value);
          }}
          placeholder="First Name"
          required
        />
        <NamePass
          type="text"
          value={lastName}
          onChange={event => {
            setLastName(event.target.value);
          }}
          placeholder="Last Name"
          required
        />
      </Container>
      <Container>
        <Dob type="date" value={dob} onChange={event => setDOB(event.target.value)} placeholder="Date of Birth" />
        <Phone
          type="tel"
          value={phoneNumber}
          onChange={event => setPhoneNumber(event.target.value)}
          placeholder="Phone Number"
          required
        />
      </Container>
      <Input
        type="email"
        value={email}
        onChange={event => {
          setErrorMessage('');
          setEmail(event.target.value);
        }}
        placeholder="Email Address"
        required
      />
      <Container>
        <NamePass
          type="password"
          value={password}
          onChange={event => {
            setErrorMessage('');
            setPassword(event.target.value);
          }}
          placeholder="password"
          required
        />
        <NamePass
          type="password"
          value={repeatPassword}
          onChange={event => {
            setErrorMessage('');
            setRepeatPassword(event.target.value);
          }}
          placeholder=" repeat password"
          required
        />
      </Container>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <Button type="submit">Sign Up</Button>
      <HaveAccount>
        Already have an account? <Span onClick={() => navigate('/login')}> Sign in</Span>
      </HaveAccount>
    </Form>
  );
}
