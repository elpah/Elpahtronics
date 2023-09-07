import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { SignOutFunction } from '../../components/auth/SignOut';
import styled from 'styled-components';
import { UserContextProvider, useUserContext } from '../../components/UserContext';

export default function UserPage() {
  const { currentUser, setCurrentUser } = useUserContext();
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const resetUser = {
    userName: '',
    fbId: '',
    userEmailAddress: '',
    orders: [],
    ShippingAddress: {
      street: '',
      apartment: '',
      city: '',
      state: '',
      postalCode: '',
      country: '',
    },
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUserLocal');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setCurrentUser(parsedUser);
    }
  }, []);

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

  const useSignOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem('currentUserLocal');
        navigate('/login');
        setCurrentUser(resetUser);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return loading || !currentUser.userName ? (
    <LoadingP>Loading...</LoadingP>
  ) : (
    <Container>
      <div>{authUser ? <p>{`Signed In as ${currentUser.userName}`}</p> : <p>Signed Out</p>}</div>

      <button onClick={useSignOut}>Sign Out</button>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 200px;
`;

const LoadingP = styled.div`
  margin-top: 150px;
`;

const resetUser = {
  userName: '',
  fbId: '',
  userEmailAddress: '',
  orders: [],
  ShippingAddress: { street: '', apartment: '', city: '', state: '', postalCode: '', country: '' },
};
