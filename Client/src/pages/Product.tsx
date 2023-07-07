import React from "react";
import styled from "styled-components";
import { productCover } from "../assets/images/exportImages";
import Footer from "../components/Footer";
import Button from "../components/Button";

const ProductPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const HeaderDiv = styled.div`
  height: 400px;
  width: 100%;
  background: url(${productCover}) no-repeat;
  background-size: cover;
  @media (min-width: 768px) {
    height: 500px;

    margin: auto;
  }
  @media (min-width: 1198px) {
    height: 700px;
  }
`;

const HeaderContainer = styled.div`
  width: 90%;
  height: 400px;
  max-width: 1400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    height: 500px;
    align-items: flex-end;
  }
  @media (min-width: 1198px) {
    height: 700px;
  }
`;
const ChildDivCenter = styled.div`
  max-width: 90%;
  width: 400px;
  height: 250px;
  padding: 25px 20px 20px;
  border-radius: 35px 0 10px;
  background-color: rgb(200, 78, 64);
  overflow: auto;
  @media (max-width: 384px) {
    padding: 20px 15px 10px;
  }
  @media (min-width: 340px) and (max-width: 390px) {
    padding-top: 40px;
  }
  @media (min-width: 768px) {
    width: 420px;
    height: 350px;
    padding-top: 60px;
    padding-left: 35px;
  }
  @media (min-width: 1198px) {
    width: 650px;
    height: 420px;
    padding-top: 70px;
    padding-left: 60px;
    padding-right: 40px;
  }
`;

const Header = styled.h1`
  font-size: 25px;
  //smaller screens
  @media (max-width: 384px) {
    font-size: 20px;
  }
  @media (max-width: 280px) {
    font-size: 18px;
  }
  @media (min-width: 768px) {
    font-size: 30px;
  }
  @media (min-width: 1198px) {
    font-size: 40px;
  }
`;
const Paragraph = styled.p`
  font-size: 18px;
  margin-top: 20px;

  @media (max-width: 354px) {
    font-size: 15px;
  }
  @media (max-width: 280px) {
    font-size: 13px;
  }
  @media (min-width: 768px) {
    font-size: 20px;
  }
  @media (min-width: 1198px) {
    font-size: 30px;
  }
`;
export default function Product() {
  return (
    <ProductPageContainer>
      <HeaderDiv>
        <HeaderContainer>
          <ChildDivCenter>
            <Header>Get 5% cashback on 200$</Header>
            <Paragraph>
              Shopping is a bit of a relaxing hobby for me, which is sometimes
              troubling for the bank balance.
            </Paragraph>
            <Button
              buttonName="Learn More"
              onClick={() => console.log("redirect to my Github Profile")}
            />
          </ChildDivCenter>
        </HeaderContainer>
      </HeaderDiv>
      <Footer />
    </ProductPageContainer>
  );
}
