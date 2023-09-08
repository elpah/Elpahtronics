import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useUserContext } from './UserContext';

import styled from 'styled-components';
import { FaBars, FaTimes, FaUser, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { BsCart } from 'react-icons/bs';
import { BsTelephone } from 'react-icons/bs';
import { useCartContext } from './CartContext.tsx';
import { elpahtronicsblue } from '../assets/images/exportImages.ts';

const BarContainer = styled.div`
  width: 100%;
  background-color: green;
  color: white;
  height: 30px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: auto;
`;

const BarParagraph = styled.p`
  text-align: center;
  margin: 0;
  padding: 3px;
  font-size: 15px;
`;

const StyledHeader = styled.header`
  background-color: #fff;
  border-bottom: 2px solid red;
  width: 100%;
  max-width: 1700px;
  height: 80px;
  margin: auto;
  position: relative;

  @media (min-width: 768px) {
    padding-left: 5%;
    padding-right: 5%;
  }
`;

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CartHamContainer = styled.div`
  display: flex;
  margin-top: 28px;
`;

const NavList = styled.ul<{ showMobileMenu: boolean }>`
  list-style: none;
  display: flex;
  margin-top: 0px;

  @media (max-width: 768px) {
    position: absolute;
    flex-direction: column;
    justify-content: space-evenly;
    right: 0;
    top: 100%;
    margin-top: 2px;
    display: ${props => (props.showMobileMenu ? 'flex block' : 'none')};
    width: 70%;
    max-width: 400px;
    height: 300px;
    background-color: rgba(255, 255, 255, 2.5);
    box-shadow: 0px 3px 8px 3px rgba(0, 0, 0, 0.1);
  }
`;

const NavItem = styled.li`
  font-size: 15px;
  margin-left: 20px;
  padding: 10px;

  @media (min-width: 768px) {
    font-size: 20px;
    padding-top: 28px;
  }
  @media (min-width: 1198px) {
    padding-top: 26px;
  }
`;
const NavLink = styled(Link)`
  color: rgb(60, 103, 172);
  font-weight: 400;
  text-decoration: none;
  position: relative;
  font-size: 30px;

  &:before {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 0;
    height: 3px;
    background-color: rgb(239, 159, 70);
    transition: width 0.2s ease;
  }

  @media (min-width: 768px) {
    padding-bottom: 10px;
    font-size: 20px;

    &:hover {
      color: #000080;
      &:before {
        width: 100%;
      }
    }
  }

  @media (min-width: 1198px) {
    font-size: 26px;
  }
`;

const HamburgerToggle = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    font-size: 1.5rem;
    color: #333;
  }
`;
const CartContainer = styled.div`
  font-size: 24px;

  @media (max-width: 768px) {
    margin-right: 50px;
  }
`;
const StyledLink = styled(Link)`
  position: relative;
  text-decoration: none;
  color: #333;
`;

const CartItemsNumber = styled.p`
  position: absolute;
  top: -6px;
  right: -15px;
  background-color: red;
  border-radius: 150%;
  color: white;
  font-size: 15px;
  width: 20px;
  text-align: center;
  font-weight: 600;
`;
const LogoContainer = styled.div``;
const Image = styled.img`
  height: 75px;
  width: 120px;
  cursor: pointer;
`;
const Div = styled.div`
  display: flex;
`;
const Container = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  width: 100%;
`;
const AccountName = styled.p`
  font-size: 15px;
  font-weight: 300;
  display: none;
  @media (min-width: 768px) {
    padding-bottom: 10px;
    display: block;
    margin-left: -8px;
  }
`;
const Account = styled.div`
  position: relative;
  display: flex;
  @media (min-width: 769px) {
    margin-left: 60px;
    padding-top: 5px;
  }
  @media (min-width: 1198px) {
  }
`;

export default function NavBar() {
  const { currentUser, setCurrentUser } = useUserContext();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const navigate = useNavigate();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const toggleNav = () => setShowMobileMenu(!showMobileMenu);
  const closeMobileMenu = () => setShowMobileMenu(false);
  const { cartArray } = useCartContext();
  const totalQuantity = cartArray.reduce((total, product) => total + product.productQuantity, 0);

  return (
    <Container>
      <BarContainer>
        <Bar>
          <BarParagraph>
            <BsTelephone />
            +233203829421
          </BarParagraph>
          <BarParagraph> 30% Discount | Shop Now</BarParagraph>
          <BarParagraph>Lorem Ipsum</BarParagraph>
        </Bar>
      </BarContainer>
      <StyledHeader>
        <NavContainer>
          <LogoContainer onClick={() => navigate('/')}>
            <Image src={elpahtronicsblue} alt="logo" />
          </LogoContainer>
          <Div>
            <NavList showMobileMenu={showMobileMenu}>
              <NavItem>
                <NavLink to="/" onClick={closeMobileMenu}>
                  Home
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="/product" onClick={closeMobileMenu}>
                  Product
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contact" onClick={closeMobileMenu}>
                  Contact
                </NavLink>
              </NavItem>
            </NavList>
          </Div>
          <CartHamContainer>
            <CartContainer>
              <StyledLink to="/Cart">
                <BsCart />
                <CartItemsNumber>{totalQuantity}</CartItemsNumber>
              </StyledLink>
            </CartContainer>
            <Account>
              <FaUser
                onClick={() => navigate('/userpage')}
                style={{
                  fontSize: '18px',
                  marginRight: '15px',
                  color: 'rgb(239, 159, 70)',
                }}
              />
              <AccountName>{currentUser.userName ? currentUser.userName.split(' ')[0] : 'login'} </AccountName>
              {/* <FaIconContainer onClick={() => setShowUserMenu(!showUserMenu)}>
                {!showMobileMenu ? (
                  <FaAngleUp
                    style={{
                      fontSize: '20px',
                      paddingBottom: '2px',
                    }}
                  />
                ) : (
                  <FaAngleDown
                    style={{
                      fontSize: '20px',
                      paddingBottom: '2px',
                    }}
                  />
                )}
              </FaIconContainer> */}
              {showUserMenu && (
                <UserMenu>
                  <li>My Orders</li>
                  <li>userPage</li>
                  <li>SignOut</li>
                </UserMenu>
              )}
            </Account>
            <HamburgerToggle onClick={toggleNav}>{showMobileMenu ? <FaTimes /> : <FaBars />}</HamburgerToggle>
          </CartHamContainer>
        </NavContainer>
      </StyledHeader>
    </Container>
  );
}

const FaIconContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const UserMenu = styled.ul`
  z-index: 1;
  background-color: red;
  position: absolute;
  top: 40px;
  left: 20px;
  border: 2px solid black;
`;
