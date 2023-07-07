import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Button from "../components/Button";

const ProductPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const HeaderDiv = styled.div``;
const HeaderContainer = styled.div``;
const Header = styled.h1``;
const Paragraph = styled.p``;
export default function Product() {
  return (
    <ProductPageContainer>
      <HeaderDiv>
        <HeaderContainer>
          <Header>Get 5% cashback on 200$</Header>
          <Paragraph>
            Shopping is a bit of a relaxing hobby for me, which is sometimes
            troubling for the bank balance.
          </Paragraph>
          <Button
            buttonName="Learn More"
            onClick={() => console.log("redirect to my Github Profile")}
          />
        </HeaderContainer>
      </HeaderDiv>
      <Footer />
    </ProductPageContainer>
  );
}
