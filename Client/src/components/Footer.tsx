import React from 'react';
import { footerlogosmall } from '../assets/images/exportImages.ts';

import styled from 'styled-components';

const FooterContainer = styled.div`
  border-top: 2px solid rgb(226, 226, 226);
  background-color: #f4f4f4;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  max-width: 1500px;
`;
const TopFooterContainer = styled.div`
  width: 90%;
  margin: 10px auto 0;
  @media (min-width: 1198px) {
    padding-bottom: 0;
    display: grid;
    grid-template-columns: 1fr auto 1fr; /* Set three columns with equal width */
    grid-gap: 10px; /* Add some gap between grid items */
  }
`;
const LogoContainer = styled.div`
  margin-bottom: 30px;
  @media (min-width: 1198px) {
    grid-column: 1;
    padding-right: 10px;
    padding-top: 5px;
  }
`;
const Logo = styled.div``;
const DepAbSeHeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 1198px) {
    grid-column: 2;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    margin-top: -12px;
  }
`;
const Department = styled.div`
  margin-bottom: 30px;
  @media (min-width: 1198px) {
    padding: 15px;
  }
`;
const About = styled.div`
  margin-bottom: 30px;
  @media (min-width: 1198px) {
    padding: 15px;
  }
`;
const Services = styled.div`
  @media (min-width: 1198px) {
    padding: 15px;
  }
`;
const Help = styled.div`
  @media (min-width: 1198px) {
    padding: 15px;
  }
`;
const AcceptedPayments = styled.div`
  margin-top: 40px;
  @media (min-width: 1198px) {
    grid-column: 3;
    padding-left: 10px;

    margin-top: 0;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Image = styled.img`
  height: 35px;
  border: 2px solid rgb(100, 100, 100);
  width: 60px;
  padding: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  transition: transform 0.3s, height 0.3s, width 0.3s, background-color 0.3s;

  &:hover {
    cursor: default;
    transform: scale(1.1);
    background-color: #66bb6a;
  }
`;
const Header = styled.h2`
  font-size: 15px;
  margin-bottom: 15px;
`;
const ListContainer = styled.ul``;
const ListItems = styled.li`
  font-size: 12px;
  transition: transform 0.3s, color 0.3s;

  &:hover {
    transform: translateX(7px);
    color: red;
  }
  @media (max-width: 280px) {
    font-size: 10px;
  }
`;
const Paragraph = styled.p`
  margin-top: 18px;
  font-size: 15px;
  @media (max-width: 280px) {
    font-size: 12px;
  }
`;
const FooterParagraph = styled.p`
  font-size: 12px;
  display: inline;
  vertical-align: middle;
  &:hover {
    color: red;
  }
  @media (max-width: 280px) {
    font-size: 10px;
  }
`;
const BottomFooter = styled.div`
  border-top: 2px solid rgb(226, 226, 226);
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 1198px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }
`;

const TxtImgContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  @media (min-width: 1198px) {
    margin-top: 10px;
  }
`;
const MiddleDiv = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-around;
  @media (min-width: 1198px) {
    margin-top: 10px;
  }
`;
const RightDiv = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  @media (min-width: 1198px) {
    justify-content: flex-end;
    margin-top: 10px;
  }
`;

const TxtImg = styled.div``;
const ImageIcon = styled.img`
  vertical-align: middle;
`;
const LogoImage = styled.img`
  height: 40px;
  width: 60px;
  margin-left: -10px;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <TopFooterContainer>
        <LogoContainer>
          <Logo>
            <LogoImage src={footerlogosmall} alt="" />
          </Logo>
          <Paragraph>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus quidem repellat facilis officia dolore,
            nobis consequuntur molestiae
          </Paragraph>
        </LogoContainer>
        <DepAbSeHeContainer>
          <Department>
            <Header>Department</Header>
            <ListContainer>
              <ListItems>Games</ListItems>
              <ListItems>Automotive</ListItems>
              <ListItems>Computers</ListItems>
              <ListItems>Gadgets</ListItems>
              <ListItems>Accessories</ListItems>
              <ListItems>Watches</ListItems>
              <ListItems>Security</ListItems>
              <ListItems>Repairs</ListItems>
              <ListItems>Mobile Phones</ListItems>
              <ListItems>Audio & Headphones</ListItems>
            </ListContainer>
          </Department>
          <About>
            <Header>About</Header>
            <ListContainer>
              <ListItems>Elpahtronics</ListItems>
              <ListItems>Careers</ListItems>
              <ListItems>News & Blog</ListItems>
              <ListItems>Help</ListItems>
              <ListItems>Press Center</ListItems>
              <ListItems>Shop By</ListItems>
              <ListItems>Location</ListItems>
              <ListItems>Brands</ListItems>
              <ListItems>Partners</ListItems>
              <ListItems>Ideas and Guide</ListItems>
            </ListContainer>
          </About>
          <Services>
            <Header>services</Header>
            <ListContainer>
              <ListItems>Gift Card</ListItems>
              <ListItems>Mobile App</ListItems>
              <ListItems>Shipping</ListItems>
              <ListItems>Delivery</ListItems>
              <ListItems>Order Pickup</ListItems>
            </ListContainer>
          </Services>
          <Help>
            <Header>Help</Header>
            <ListContainer>
              <ListItems>Elpahtronics Help</ListItems>
              <ListItems>Returns</ListItems>
              <ListItems>Track Orders</ListItems>
              <ListItems>Contact us</ListItems>
              <ListItems>Feedback</ListItems>
              <ListItems>Security</ListItems>
            </ListContainer>
          </Help>
        </DepAbSeHeContainer>
        <AcceptedPayments>
          <Header>Accepted Payments</Header>
          <ImageContainer>
            <Image src="https://tse3.mm.bing.net/th?id=OIP.AAFUq6PSZFKwdzL5v6nhqAHaC0&pid=Api&P=0&h=180" alt="Visa" />
            <Image
              src="https://tse3.mm.bing.net/th?id=OIP.8hSdZiAvNki23CzVyAvSLQHaEK&pid=Api&P=0&h=180"
              alt="MasterCard"
            />

            <Image src="https://tse1.mm.bing.net/th?id=OIP.FPBH7iZYI0MOMWjdYlBSTQHaEK&pid=Api&P=0&h=180" alt="Paypal" />
          </ImageContainer>
        </AcceptedPayments>
      </TopFooterContainer>

      <BottomFooter>
        <TxtImgContainer>
          <TxtImg>
            <ImageIcon
              src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb0ed6e927bdf5bc4309e0_briefcase.svg"
              alt=""
            />
            <FooterParagraph>Become a Seller</FooterParagraph>
          </TxtImg>
          <TxtImg>
            <ImageIcon
              src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb0ed6c4510c256356f4cd_gift.svg"
              alt=""
            />
            <FooterParagraph>Gift Card</FooterParagraph>
          </TxtImg>
          <TxtImg>
            <ImageIcon
              src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb0ed6ae57fd74e0402aa4_help-circle.svg"
              alt=""
            />
            <FooterParagraph>Help Center</FooterParagraph>
          </TxtImg>
        </TxtImgContainer>
        <MiddleDiv>
          <FooterParagraph>Terms of Service</FooterParagraph>
          <FooterParagraph>Privacy & Policy</FooterParagraph>
        </MiddleDiv>
        <RightDiv>
          <FooterParagraph>All Right Reserved By Elpah® |2023</FooterParagraph>
        </RightDiv>
      </BottomFooter>
    </FooterContainer>
  );
}
