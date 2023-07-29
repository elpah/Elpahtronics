import React, { useEffect, useLayoutEffect, useState } from "react";
import SignIn from "../../components/auth/SignIn";
import SignUp from "../../components/auth/SignUp";
import AuthDetails from "../../components/AuthDetails";
import styled from "styled-components";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [checkingLogIn, setCheckingLogIn] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, navigate to AdminPage when user is signed in
        navigate("/adminPage");
      }
      setCheckingLogIn(false);
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, [navigate]);

  if (checkingLogIn) return <p>Loading...</p>;

  return (
    <AdminPageContainer>
      <SignInFormContainer>
        {<SignIn />}
        {/* <SignUp /> */}
        {/* <AuthDetails /> */}
      </SignInFormContainer>
    </AdminPageContainer>
  );
}

const AdminPageContainer = styled.div`
  background-color: #f9f9f9;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SignInFormContainer = styled.div`
  height: 300px;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin-top: -300px;

  border-radius: 5px;
  @media (min-width: 768px) {
    padding: 10px;
    height: 70vh;
  }
`;
