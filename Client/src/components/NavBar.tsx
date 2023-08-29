import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';
import { BsCart } from 'react-icons/bs';
import { useCartContext } from './CartContext.tsx';
import {
  elpahtronicsblack,
  elpahtronicswhite,
  elpahtronicsblue,
  elpahlogotry,
  elpahtronicslogosmall,
} from '../assets/images/exportImages.ts';

const StyledHeader = styled.header`
  border-bottom: 2px solid red;
  width: 100%;
  max-width: 1500px;
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
  align-items: center;
  margin-top: 0px;

  @media (max-width: 768px) {
    position: absolute;
    flex-direction: column;
    right: 0;
    top: 100%;
    display: ${props => (props.showMobileMenu ? 'flex block' : 'none')};
    width: 200px;
    background-color: #f1f1f1;
    padding: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
`;
const NavItem = styled.li`
  font-size: 15px;
  margin-left: 10px;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;
const NavLink = styled(Link)`
  color: rgb(60, 103, 172);
  font-weight: 300;
  text-decoration: none;
  padding: 25px;
  padding: 10px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: rgb(239, 159, 70);
    transition: width 0.2s ease;
  }

  @media (min-width: 768px) {
    &:hover {
      color: #000080;
      &:before {
        width: 100%;
      }
    }
  }
`;

// const NavLink = styled(Link)`
//   color: rgb(60, 103, 172);
//   text-decoration: none;
//   padding: 25px;
//   padding: 10px;
//   transition: border-bottom 0.3s ease;

//   @media (min-width: 768px) {
//     &:hover {
//       color: rgb(48, 67, 141);
//       border-bottom: 3px solid rgb(239, 159, 70);
//     }
//   }
// `;
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
  justify-content: center;
`;

export default function NavBar() {
  const navigate = useNavigate();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const toggleNav = () => setShowMobileMenu(!showMobileMenu);
  const closeMobileMenu = () => setShowMobileMenu(false);
  const { cartArray } = useCartContext();
  const totalQuantity = cartArray.reduce((total, product) => total + product.productQuantity, 0);

  return (
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
            <NavItem>
              <NavLink to="/login" onClick={closeMobileMenu}>
                <FaUser
                  style={{
                    fontSize: '15px',
                    marginRight: '5px',
                    color: 'rgb(239, 159, 70)',
                  }}
                />
                admin
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
          <HamburgerToggle onClick={toggleNav}>{showMobileMenu ? <FaTimes /> : <FaBars />}</HamburgerToggle>
        </CartHamContainer>
      </NavContainer>
    </StyledHeader>
  );
}
