import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import { BsCart } from 'react-icons/bs';
import { useCartContext } from './CartContext.tsx';

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CartHamContainer = styled.div`
  display: flex;
`;

const StyledHeader = styled.header`
  padding: 10px;
  width: 80%;
  max-width: 1500px;

  margin: auto;

  @media (max-width: 768px) {
    width: 100%;
    margin: auto;
    position: relative;
  }
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
  font-size: 20px;
  margin-left: 10px;
  @media (max-width: 768px) {
    margin: 10px 0;
    font-size: 15px;
  }
`;

const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  padding: 25px;

  &:hover {
    color: #666;
  }
  @media (max-width: 768px) {
    padding: 5px;
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

export default function NavBar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const toggleNav = () => setShowMobileMenu(!showMobileMenu);
  const closeMobileMenu = () => setShowMobileMenu(false);
  const { cartArray } = useCartContext();
  const totalQuantity = cartArray.reduce((total, product) => total + product.productQuantity, 0);

  return (
    <StyledHeader>
      <NavContainer>
        <div>Logo</div>
        <div>
          {
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
          }
        </div>
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
