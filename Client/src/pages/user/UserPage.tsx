import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import styled from 'styled-components';

export default function UserPage() {
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const clearLocalStorage = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('userEmail');
  };

  useEffect(() => {
    const listen = onAuthStateChanged(auth, user => {
      user ? setAuthUser(user) : navigate('/login');
      setLoading(false);
    });
    return () => {
      listen();
      setLoading(true);
    };
  }, []);

  const useSignOut = () => {
    signOut(auth)
      .then(() => {
        clearLocalStorage();
        navigate('/login');
      })
      .catch(error => {
        console.log(error);
      });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <div>{authUser ? <p>{`Signed In as ${authUser.email}`}</p> : <p>Signed Out</p>}</div>
      <button onClick={useSignOut}>Sign Out</button>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 200px;
`;
