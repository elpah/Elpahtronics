import React from "react";
import styled from "styled-components";
import Product from "../productType";

interface Props {
  productName?: string;
  productPrice?: string;
  productDescription?: string;
  productImage?: string;
  quantity?: number;
}

const ProductCardContainer = styled.div``;
const ImageDiv = styled.div``;
const Image = styled.img``;
const WithoutImageDiv = styled.div``;
const NamePrice = styled.div``;
const H2 = styled.h2``;
const Description = styled.p``;
const QuantityAddToCartDiv = styled.div``;
const QuantityDiv = styled.div``;
const AddSubtractButton = styled.button``;
const Quantity = styled.p``;
const AddToCartButton = styled.button``;

export default function ProductCard({
  productName,
  productPrice,
  productDescription,
  productImage,
  quantity,
}: Props) {
  // return (
  //   <ProductCardContainer>
  //     <ImageDiv>
  //       <Image>{productImage}</Image>
  //     </ImageDiv>
  //     <WithoutImageDiv>
  //       <NamePrice>
  //         <H2>{productName}</H2>
  //         <H2>{productPrice}</H2>
  //       </NamePrice>
  //       <Description>{productDescription}</Description>
  //       <QuantityAddToCartDiv>
  //         <QuantityDiv>
  //           <AddSubtractButton>+</AddSubtractButton>
  //           <Quantity>{quantity}</Quantity>
  //           <AddSubtractButton>-</AddSubtractButton>
  //         </QuantityDiv>
  //         <AddToCartButton>Add to cart</AddToCartButton>
  //       </QuantityAddToCartDiv>
  //     </WithoutImageDiv>
  //   </ProductCardContainer>
  // );
  <ProductCardContainer>
    <ImageDiv>
      <Image
        src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e48b497e63cc46b800_base%20camp%20duffel%2002-min.png"
        alt="Product Image"
      />
    </ImageDiv>
    <WithoutImageDiv>
      <NamePrice>
        <H2>Camera</H2>
        <H2>250.00$</H2>
      </NamePrice>
      <Description>Lorem ipsum dolor sit, amet consectetur</Description>
      <QuantityAddToCartDiv>
        <QuantityDiv>
          <AddSubtractButton>+</AddSubtractButton>
          <Quantity>0</Quantity>
          <AddSubtractButton>-</AddSubtractButton>
        </QuantityDiv>
        <AddToCartButton>Add to cart</AddToCartButton>
      </QuantityAddToCartDiv>
    </WithoutImageDiv>
  </ProductCardContainer>;
}
