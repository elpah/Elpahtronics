import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import SignUp from '../../components/auth/SignUp';

const CreateAccountPageContainer = styled.div`
  // background-color: #f9f9f9;
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  padding: 5px;
  height: 100vh;

  @media (min-width: 768px) {
    margin-top: 80px;
    // height: 110%;
  }
  @media (min-width: 1198px) {
    margin-top: 110px;
    height: 100vh;
  }
`;

const SignUpFormContainer = styled.div`
  width: 100%;
  max-width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 5px;
  // @media (min-width: 768px) {
  //   padding: 10px;
  // }
`;
export default function CreateAccount() {
  const [checkingLogIn, setCheckingLogIn] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        navigate('/userpage');
      }
      setCheckingLogIn(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  if (checkingLogIn) return <p>Loading...</p>;

  return (
    <CreateAccountPageContainer>
      <SignUpFormContainer>
        <SignUp />
      </SignUpFormContainer>
    </CreateAccountPageContainer>
  );
}
