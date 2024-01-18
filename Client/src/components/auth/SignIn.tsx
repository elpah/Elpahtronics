import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { auth } from '../../firebase';
import { useUserContext } from '../../components/UserContext';
import { footerlogosmall } from '../../assets/images/exportImages';

const Form = styled.form`
  width: 90%;
  margin: auto;
  @media (min-width: 768px) {
    min-width: 550px;
  }
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
  const { currentUser, setCurrentUser } = useUserContext();

  const signIn = (event: any) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const fbId = userCredentials.user.uid;
        if (fbId) {
          getUserFromDB(fbId);
          navigate('/userpage');
        }
      })
      .catch(error => {
        if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
          setErrorMessage('Wrong email or password. Please try again.');
        } else {
          setErrorMessage('An error occurred. Please try again later.');
        }
      });
  };

  async function getUserFromDB(fbId: string) {
    try {
      const response = await fetch('https://e-tronics-server.vercel.app/api/users/get-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fbId: fbId,
        }),
      });

      if (response.ok) {
        const userData = await response.json();
        if (userData) {
          setCurrentUser(userData);
          localStorage.setItem('currentUserLocal', JSON.stringify(userData));
        }
      } else {
        console.error('Request failed with status:', response.status);
      }
    } catch (error) {
      console.error('Error sending POST request:', error);
    }
  }

  return (
    <Form onSubmit={signIn}>
      <Image src={footerlogosmall} alt="" />
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

      <CreateAccount>
        No Account Yet? <Span onClick={() => navigate('/signup')}>Create Account</Span>
      </CreateAccount>
    </Form>
  );
}
const Span = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin-bottom: 20px;
  &:hover {
    color: blue;
  }
`;

const Image = styled.img`
  height: 50px;
  margin-top: 80px;
`;

const CreateAccount = styled.p`
  font-size: 15px;
  margin-top: 10px;
  text-align: center;
  color: rgb(186, 186, 186);
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;
