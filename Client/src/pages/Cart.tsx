import React from "react";
import styled from "styled-components";
import CartCard from "../components/CartCard";

export default function Cart() {
  return (
    <CartDiv>
      <CartCardContainer>
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
      </CartCardContainer>
      <SummaryDiv></SummaryDiv>
    </CartDiv>
  );
}
const CartDiv = styled.div`
  max-width: 1400px;
  margin: auto;
  display: grid;
  grid-gap: 10px;

  @media (min-width: 1198px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const CartCardContainer = styled.div``;

const SummaryDiv = styled.div`
  border: 2px solid black;
  width: 100%;
  height: 300px;
  margin-top: 20px;
  @media (min-width: 1198px) {
    margin-left: 100px;
    max-width: 400px;
    // margin-right: 100px;
  }
`;
