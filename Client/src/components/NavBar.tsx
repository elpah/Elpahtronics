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

const NavList = styled.ul<MobileMenuProps>`
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
    right: ${({ showMobileMenu }) => (showMobileMenu ? '0' : '-100%')};
    transition: right 0.2s ease-in-out;

    width: 70%;
    max-width: 400px;
    height: 250px;
    background-color: rgba(255, 255, 255, 2.5);
    box-shadow: 0px 3px 8px 3px rgba(0, 0, 0, 0.1);
  }
`;

const NavItem = styled.li`
  font-size: 15px;
  margin-left: 20px;
  padding: 10px;
  padding-right: 20px;

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
  font-size: 25px;

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
const FaIconContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
    margin-left: 0px;
    margin-right: 10px;
  }
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
interface MobileMenuProps {
  showMobileMenu: boolean;
}

interface UserMenuProps {
  isOpen: boolean;
}
const UserMenu = styled.ul<UserMenuProps>`
  background-color: rgb(26, 62, 103);
  width: 130px;
  position: absolute;
  top: ${({ isOpen }) => (isOpen ? '60px' : '-140%')};
  right: 0px;
  transform: translateY(-10px);
  transition: top 0.2s ease-in-out;
  padding: 0;
  list-style: none;
  z-index: -1;
  li {
    color: white;
    cursor: pointer;
    padding: 10px;
    padding-left: 30px;
    &:hover {
      background-color: rgb(0, 32, 64);
    }
  }
`;
interface NavBarProps {
  handleClick: () => void;
}

export default function NavBar({ handleClick }: NavBarProps) {
  const { currentUser, setCurrentUser } = useUserContext();
  const navigate = useNavigate();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const toggleNav = () => setShowMobileMenu(!showMobileMenu);
  const closeMobileMenu = () => setShowMobileMenu(false);
  const { cartArray } = useCartContext();
  const totalQuantity = cartArray.reduce((total, product) => total + product.productQuantity, 0);
  const [isOpen, setIsOpen] = useState(false);

  const toggleUserMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleNavMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
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
                <NavLink to={'/product?category=all+products'} onClick={closeMobileMenu}>
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
            <Account onClick={toggleUserMenu}>
              <FaUser
                style={{
                  fontSize: '18px',
                  marginRight: '15px',
                  color: 'rgb(239, 159, 70)',
                }}
              />
              <AccountName>{currentUser.userName ? currentUser.userName.split(' ')[0] : 'login'} </AccountName>
              <FaIconContainer>
                {isOpen ? (
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
              </FaIconContainer>

              <UserMenu isOpen={isOpen}>
                <li onClick={() => navigate('/orders')}>Orders</li>
                {!currentUser.userEmailAddress && <li onClick={() => navigate('/login')}>Login</li>}
                {currentUser.userEmailAddress && <li onClick={() => navigate('/userpage')}>userPage</li>}
                <li onClick={handleClick}>SignOut</li>
              </UserMenu>
            </Account>
            <HamburgerToggle onClick={toggleNavMenu}>{showMobileMenu ? <FaTimes /> : <FaBars />}</HamburgerToggle>
          </CartHamContainer>
        </NavContainer>
      </StyledHeader>
    </Container>
  );
}
