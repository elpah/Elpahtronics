import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import styled from 'styled-components';
import { useUserContext } from '../../components/UserContext';
import OrderCardContainer from '../../components/OrderCardContainer';
import OrderItem from '../../components/OrderItem';
import Profile from '../../components/Profile';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type Item = {
  productName: string;
  productQuantity: string;
  productPrice: string;
};

type Order = {
  orderNumber: string;
  orderDate: string;
  orderTotal: string;
  items: Item[];
};

export default function UserPage() {
  const { currentUser} = useUserContext();
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [_loading, setLoading] = useState(true);
  const [_userAvailable, setUserAvailable] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showOrders, setShowOrders] = useState(false);
  const [showProfile, setShowProfile] = useState(true);
  const navigate = useNavigate();

  async function getOrderByFbId() {
    try {
      const response = await axios.get(
       `https://elpahtronics-backend.vercel.app/api/orders/orders-by-fbId?fbId=${auth.currentUser?.uid}`,
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching orders:', error);
      throw error;
    }
  }
  const { data, error, isLoading } = useQuery<Order[], Error>(['ordersByfbId'], getOrderByFbId);

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
          {data?.length! > 0 && !isLoading ? (
            <OrdersContainer>
              <Header>My Orders</Header>
              <Para>{data?.length} items</Para>
              {data?.map((order, key) => (
                <OrderCardContainer key={key} orderNumber={order.orderNumber} orderDate={order.orderDate}>
                  {order.items.map((item, itemKey) => (
                    <OrderItem
                      key={itemKey}
                      itemName={item.productName}
                      itemPrice={item.productPrice}
                      itemQuantity={item.productQuantity}
                    />
                  ))}
                </OrderCardContainer>
              ))}
            </OrdersContainer>
          ) : (
            <>
              {isLoading && <LoadingP>Loading...</LoadingP>}

              <NoOrdersContainer>
                <NoOrders>You have not placed any orders yet. </NoOrders>
                <ShopNow onClick={() => navigate('/product?category=all+products')}>Shop Now...</ShopNow>
              </NoOrdersContainer>
            </>
          )}
        </>
      )}
    </Container>
  );
}

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
  margin-top: 50px;
`;
