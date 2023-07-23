import React from "react";
import styled from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FaShoppingBag } from "react-icons/fa";
const TopFooterContainer = styled.div`
  max-width: 1400px;
  margin: 40px auto 0;
  border-top: 2px solid rgb(226, 226, 226);
  border-bottom: 2px solid rgb(226, 226, 226);
  padding: 25px 0;
  width: 90%;
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
  margin: 25px 10px 10px;
  transition: transform 0.3s, height 0.3s, width 0.3s, background-color 0.3s;

  &:hover {
    cursor: default;
    transform: scale(1.1);
    background-color: #66bb6a;
  }
`;
const Header = styled.h2`
  font-size: 18px;
  margin-bottom: 15px;
`;
const ListContainer = styled.ul``;
const ListItems = styled.li`
  font-size: 15px;
  transition: transform 0.3s, color 0.3s;

  &:hover {
    transform: translateX(7px);
    color: red;
  }
`;
const Paragraph = styled.p`
  margin-top: 18px;
  font-size: 15px;
`;
const FooterParagraph = styled.p`
  font-size: 15px;
  display: inline;
  vertical-align: middle;
  &:hover {
    color: red;
  }
`;
const BottomFooter = styled.div`
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1400px;
  width: 90%;
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

export default function Footer() {
  return (
    <>
      <TopFooterContainer>
        <LogoContainer>
          <Logo>
            <h1>LOGO</h1>
          </Logo>
          <Paragraph>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            quidem repellat facilis officia dolore, nobis consequuntur molestiae
          </Paragraph>
        </LogoContainer>
        <DepAbSeHeContainer>
          <Department>
            <Header>Department</Header>
            <ListContainer>
              <ListItems>Lorem</ListItems>
              <ListItems>Lorem</ListItems>
              <ListItems>Lorem</ListItems>
              <ListItems>Lorem</ListItems>
              <ListItems>Lorem</ListItems>
              <ListItems>Lorem</ListItems>
              <ListItems>Lorem</ListItems>
              <ListItems>Lorem</ListItems>
              <ListItems>Lorem</ListItems>
              <ListItems>Lorem</ListItems>
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
            <Image
              src="data:image/png;base64,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"
              alt="Stripe"
            />
            <Image
              src="https://tse3.mm.bing.net/th?id=OIP.AAFUq6PSZFKwdzL5v6nhqAHaC0&pid=Api&P=0&h=180"
              alt="Visa"
            />
            <Image
              src="https://tse3.mm.bing.net/th?id=OIP.8hSdZiAvNki23CzVyAvSLQHaEK&pid=Api&P=0&h=180"
              alt="MasterCard"
            />
            <Image
              src="https://tse2.mm.bing.net/th?id=OIP.YdkQGmhB9c2Sr84FeDD9egHaEK&pid=Api&P=0&h=180"
              alt="Amazon"
            />
            <Image
              src="https://tse4.mm.bing.net/th?id=OIP.6_6gvj3awAqJ3sQeS18cYAHaFP&pid=Api&P=0&h=180"
              alt="Klarna"
            />
            <Image
              src="https://tse1.mm.bing.net/th?id=OIP.FPBH7iZYI0MOMWjdYlBSTQHaEK&pid=Api&P=0&h=180"
              alt="Paypal"
            />
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
              src="	https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb0ed6ae57fd74e0402aa4_help-circle.svg"
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
    </>
  );
}
