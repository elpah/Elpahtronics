import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { SignOutFunction } from '../../components/auth/SignOut';
import styled from 'styled-components';
import { useUserContext } from '../../components/UserContext';

export default function UserPage() {
  const { currentUser, setCurrentUser } = useUserContext();
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [userAvailable, setUserAvailable] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, user => {
      user ? setAuthUser(user) : navigate('/login');
      setLoading(false);
    });
    return () => {
      listen();
      setLoading(true);
    };
  }, [authUser]);

  useEffect(() => {
    currentUser.userName ? setUserAvailable(true) : setUserAvailable(false);
  }, [currentUser.userName]);

  if (loading || !userAvailable) {
    return <LoadingP>Loading...</LoadingP>;
  }

  return (
    <Container>
      <p>{`Signed In as ${currentUser.userName}`}</p>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 200px;
`;

const LoadingP = styled.div`
  margin-top: 150px;
`;
