// import React, { useState } from "react";
// import styled from "styled-components";

// export default function ProductCardIsLoading() {
//   return (
//     <ProductCardContainerDiv>
//       <ImageDiv></ImageDiv>
//       <WithoutImageDiv>
//         <NamePrice></NamePrice>
//         <Description></Description>

//         <AddToCartButton></AddToCartButton>
//       </WithoutImageDiv>
//     </ProductCardContainerDiv>
//   );
// }
// const ProductCardContainerDiv = styled.div`
//   margin: 30px auto 30px;
//   width: 90%;
//   background-color: #fff;
//   border-radius: 4px;
//   height: 379px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
// `;

// const ImageDiv = styled.div`
//   background-color: RGB(245, 245, 245);
//   display: flex;
//   justify-content: center;
//   margin-bottom: 0px;
//   height: 250px;
// `;

// const WithoutImageDiv = styled.div``;

// const NamePrice = styled.div`
//   width: 100%;
//   height: 30px;
//   background-color: #f5f5f5;
//   margin-top: 0;
//   margin-bottom: 8px;
// `;

// const Description = styled.p`
//   margin-bottom: 8px;
//   width: 80%;
//   height: 30px;
//   background-color: #f5f5f5;
// `;

// const AddToCartButton = styled.div`
//   width: 40%;
//   height: 30px;
//   border-radius: 2px;
//   background-color: #f5f5f5;
//   color: black;
//   cursor: pointer;
//   font-size: 20px;
// `;

import React from 'react';
import styled, { keyframes } from 'styled-components';

export default function ProductCardIsLoading() {
  return (
    <ProductCardContainerDiv>
      <ImageDiv></ImageDiv>
      <WithoutImageDiv>
        <NamePrice></NamePrice>
        <Description></Description>
        <AddToCartButton></AddToCartButton>
      </WithoutImageDiv>
      <ReflectionAnimation /> {/* Add the reflection animation here */}
    </ProductCardContainerDiv>
  );
}

const reflectionAnimation = keyframes`
  0%, 100% {
    transform: translateY(-12px);
    opacity: 0.8;
  }
  50% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const ReflectionAnimation = styled.div`
  width: 100%;
  height: 4px;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.95) 0%,
    rgba(0, 0, 0, 0.8) 50%,
    rgba(0, 0, 0, 0.95) 100%
  );
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: 2px;
  animation: ${reflectionAnimation} 1s infinite;
`;

const ProductCardContainerDiv = styled.div`
  margin: 30px auto 30px;
  width: 90%;
  background-color: #fff;
  border-radius: 4px;
  height: 379px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ImageDiv = styled.div`
  background-color: RGB(245, 245, 245);
  display: flex;
  justify-content: center;
  margin-bottom: 0px;
  height: 250px;
`;

const WithoutImageDiv = styled.div``;

const NamePrice = styled.div`
  width: 100%;
  height: 30px;
  background-color: #f5f5f5;
  margin-top: 0;
  margin-bottom: 8px;
`;

const Description = styled.p`
  margin-bottom: 8px;
  width: 80%;
  height: 30px;
  background-color: #f5f5f5;
`;

const AddToCartButton = styled.div`
  width: 40%;
  height: 30px;
  border-radius: 2px;
  background-color: #f5f5f5;
  color: black;
  cursor: pointer;
  font-size: 20px;
`;
