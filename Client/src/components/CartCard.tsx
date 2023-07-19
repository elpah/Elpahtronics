// import React from "react";
// import styled from "styled-components";

// interface Props {
//   productName: string;
//   productDetails: string;
//   productPrice: string;
//   productImage: string;
// }

// export default function CartCard(props: Props) {
//   const { productName, productDetails, productPrice, productImage } = props;

//   return (
//     <CartCardItemContainer>
//       <ImageDiv>
//         <img src={productImage} alt={productName} />
//       </ImageDiv>
//       <ProductDetailsDiv>
//         <ProductHeader>{productName}</ProductHeader>
//         <Paragraph>{productDetails}</Paragraph>
//         <QuantityDiv>Quantity: 1</QuantityDiv>
//         <PriceDiv>Price: ${productPrice}</PriceDiv>
//         <RemoveButton>Remove</RemoveButton>
//       </ProductDetailsDiv>
//     </CartCardItemContainer>
//   );
// }

import React from "react";
import styled from "styled-components";

interface Props {}

export default function CartCard() {
  return (
    <CartCardItemContainer>
      <ImageDiv>
        <Image
          src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e61eb4ad4af6e75689_macbook%2013-min.png"
          alt="productImage"
        />
      </ImageDiv>
      <ProductDetailsDiv>
        <ProductHeader>productName</ProductHeader>
        <Paragraph>productDetails</Paragraph>
        <QuantityDiv>Quantity: 1</QuantityDiv>
        <PriceDiv>Price:</PriceDiv>
      </ProductDetailsDiv>
      <RemoveButton>X</RemoveButton>
    </CartCardItemContainer>
  );
}

const CartCardItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  //   justify-content: space-between;
  align-items: center;
  //   border-radius: 8px;
  padding: 10px;
  //   margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  //   @media (min-width: 768px) {
  //     width: 60%;
  //   }
`;

const ImageDiv = styled.div`
  width: 120px;
  min-width: 100px;
  height: 100px;
  border-radius: 8px;
  overflow: hidden;
  margin-right: 10px;
  @media (min-width: 500px) {
    width: 200px;
    display: flex;
    justify-content: center;
  }
  @media (min-width: 768px) {
    width: 250px;
  }
  @media (min-width: 1198px) {
    width: 130px;
  }
`;
const Image = styled.img`
  width: 120px;
  margin: auto;

  object-fit: cover;

  height: 100%;
`;

const ProductDetailsDiv = styled.div`
  flex: 1;
  padding-left: 10px;
`;

const ProductHeader = styled.h2`
  font-size: 20px;
  margin-bottom: 5px;
  color: #333;
  @media (max-width: 300px) {
    font-size: 15px;
  }
`;

const Paragraph = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
  color: #666;
  @media (max-width: 300px) {
    font-size: 14px;
  }
`;

const QuantityDiv = styled.div`
  font-size: 16px;
  margin-bottom: 5px;
  color: #444;
`;

const PriceDiv = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #222;
  @media (max-width: 300px) {
    font-size: 14px;
  }
`;

const RemoveButton = styled.button`
  margin-right: 10px;
  color: rgb(32, 33, 36);
  border: none;
  background-color: transparent;

  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: #b71c1c;
    background-color: transparent;
  }
  @media (max-width: 300px) {
    margin-left: 10px;
    padding: 5px 8px;
  }
`;