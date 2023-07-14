import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import Home from "../pages/Home";
import Product from "../pages/ProductPage";
import Contact from "../pages/Contact";
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
  // margin-right: 10px;
  margin-top: 0px;

  @media (max-width: 768px) {
    position: absolute;
    flex-direction: column;
    right: 0;
    top: 100%;
    display: ${(props) => (props.showMobileMenu ? "flex block" : "none")};
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
  text-decoration: none;
  color: #333;
`;

export default function NavBar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const toggleNav = () => setShowMobileMenu(!showMobileMenu);
  const closeMobileMenu = () => setShowMobileMenu(false);

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
            </StyledLink>
          </CartContainer>
          <HamburgerToggle onClick={toggleNav}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </HamburgerToggle>
        </CartHamContainer>
      </NavContainer>
    </StyledHeader>
  );
}
