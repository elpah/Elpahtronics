import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import styled from 'styled-components';
import { useUserContext } from '../../components/UserContext';
import OrderCardContainer from '../../components/OrderCardContainer';
import Profile from '../../components/Profile';

export default function UserPage() {
  const { currentUser, setCurrentUser } = useUserContext();
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [userAvailable, setUserAvailable] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showOrders, setShowOrders] = useState(false);
  const [orders, setOrders] = useState([]);
  const [showProfile, setShowProfile] = useState(true);
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

  // if (loading || !userAvailable) {
  //   return <LoadingP>Loading...</LoadingP>;
  // }
  const UserNavButton = styled.button`
    position: fixed;
    background-color: rgb(59, 59, 59);
    top: 110px;
    left: 0;
    border: none;
    padding: 10px;
    color: white;
    font-size: 16px;
    border-radius: 0 0 5px 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    cursor: pointer;

    &:hover {
      background-color: #333;
  `;

  return (
    <Container>
      <UserNavButton onClick={() => setIsOpen(true)}>User</UserNavButton>
      <UserNavContainer isOpen={isOpen}>
        <ul>
          <CloseButton onClick={() => setIsOpen(false)}>X</CloseButton>
          <NavItem
            onClick={() => {
              setShowProfile(true);
              setShowOrders(false);
              setIsOpen(false);
            }}
          >
            Profile
          </NavItem>
          <NavItem
            onClick={() => {
              setShowOrders(true);
              setShowProfile(false);
              setIsOpen(false);
            }}
          >
            My Orders
          </NavItem>
        </ul>
      </UserNavContainer>
      {showProfile && <Profile />}
      {showOrders && (
        <>
          <OrdersContainer>
            <Header>My Orders</Header>
            <Para>8 Items</Para>
            <OrderCardContainer />
          </OrdersContainer>
          <NoOrdersContainer>
            <NoOrders>You have not placed any orders yet. </NoOrders>
            <ShopNow onClick={() => navigate('/product?category=all+products')}>Show Now...</ShopNow>
          </NoOrdersContainer>
        </>
      )}
    </Container>
  );
}
const ShopNow = styled.button`
  font-weight: 400;
  background-color: white;
  color: #000;
  padding: 10px 20px;
  border: 1px solid black;
  cursor: pointer;
  font-size: 18px;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const NoOrdersContainer = styled.div`
  text-align: center;
  margin: 80px auto;
`;

const NoOrders = styled.p`
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 20px;
`;
// const ShopNow = styled.button``;

// const NoOrders = styled.p`
//   font-size: 30px;
//   font-weight: 400;
// `;

// const NoOrdersContainer = styled.div``;
const Header = styled.h2`
  color: rgb(113, 114, 116);
  font-weight: 200;
  font-size: 25px;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    font-size: 30px;
  }
  @media (min-width: 1198px) {
    font-size: 45px;
  }
`;
const Para = styled.p`
  margin-bottom: -20px;
`;

const OrdersContainer = styled.div`
  width: 80%;
  margin: auto;
`;
const NavItem = styled.li`
  font-size: 18px;
  margin-bottom: 10px;
  padding: 10px;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #333;
    color: #fff;
  }
  @media (min-width: 768px) {
    font-size: 20px;
  }
  @media (min-width: 1198px) {
    font-size: 26px;
  }
`;

type UserNavContainerProps = {
  isOpen: boolean;
};

const UserNavContainer = styled.div<UserNavContainerProps>`
  background-color: rgb(59, 59, 59);
  width: 75%;
  height: 100%;
  max-width: 350px;
  position: fixed;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  transition: left 0.3s ease-in-out;
`;

const CloseButton = styled.button`
  background-color: transparent;
  align-items: right;
  border: none;
  font-size: 25px;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  margin-left: 7px;

  &:hover {
    color: red;
  }
`;

const Container = styled.div`
  background-color: #f9f9f9;
  padding-top: 10px;

  width: 100%;
  max-width: 1700px;
  margin: auto;
  height: 100vh;
  margin-top: 70px;
  @media (min-width: 768px) {
    margin-top: 70px;
  }
  @media (min-width: 1198px) {
    margin-top: 100px;
  }
`;

const LoadingP = styled.div`
  margin-top: 150px;
`;
