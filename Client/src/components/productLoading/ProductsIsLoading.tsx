import React from 'react';
import styled, { css } from 'styled-components';
import ProductCardIsLoading from './ProductCardIsLoading';

export default function ProductsIsLoading() {
  return (
    <ProductCardContainer>
      <ProductCardIsLoading />
      <ProductCardIsLoading />
      <ProductCardIsLoading />
      <ProductCardIsLoading />
      <ProductCardIsLoading />
      <ProductCardIsLoading />
      <ProductCardIsLoading />
      <ProductCardIsLoading />
      <ProductCardIsLoading />
      <ProductCardIsLoading />
      <ProductCardIsLoading />
      <ProductCardIsLoading />
    </ProductCardContainer>
  );
}

const ProductCardContainer = styled.div`
  width: 90%;
  max-width: 1400px;
  display: grid;
  grid-gap: 8px;
  margin: auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1198px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
