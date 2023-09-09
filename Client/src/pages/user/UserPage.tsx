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
      <UserNavContainer>
        <ul>
          <NavItem>Edit Profile</NavItem>
          <NavItem>My Orders</NavItem>
          <NavItem>Lorem</NavItem>
          <NavItem>Lorem</NavItem>
        </ul>
      </UserNavContainer>
      {/* <p>{`Signed In as ${currentUser.userName}`}</p> */}
    </Container>
  );
}

const NavItem = styled.li`
  font-size: 18px;
  margin-bottom: 10px;
  padding: 10px;
  // background-color: #fff;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #333;
    color: #fff;
  }
`;

const UserNavContainer = styled.div`
  padding-top: 20px;
  height: 100%;
  background-color: rgb(59, 59, 59);
  width: 75%;
  max-width: 350px;
  position: fixed;
  left: 0;
  top: 80px;
  @media (min-width: 768px) {
    top: 110px;
  }
  @media (min-width: 1198px) {
    top: 110px;
  }
`;
const Container = styled.div`
  margin-top: 200px;
`;

const LoadingP = styled.div`
  margin-top: 150px;
`;
