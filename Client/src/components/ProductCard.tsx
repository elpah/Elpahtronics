import React from 'react';
import styled from 'styled-components';

interface Props {
  productId?: string;
  productName: string;
  productPrice: string;
  productDescription: string;
  productImage: string;
  handleCardClick: () => void;
  handleAddToCartClick: (productId: string | undefined) => void;
}

const ProductCardContainerDiv = styled.div`
  margin: 30px auto 30px;
  width: 90%;
  max-width: 500px;
  background-color: #fff;
  border-radius: 4px;
`;
const ImageDiv = styled.div`
  background-color: RGB(245, 245, 245);
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`;
const Image = styled.img`
  height: 250px;
  object-fit: contain;
  border-radius: 10px 10px 0 0;
`;
const WithoutImageDiv = styled.div``;

const NamePrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;
const H2 = styled.h2`
  font-size: 22px;
  font-weight: 600;
  margin: 0;
`;
const Description = styled.p`
  font-size: 20px;
  margin-bottom: 8px;
`;

const AddToCartButton = styled.button`
  padding: 8px 16px;
  border: 1px solid black;
  border-radius: 20px;
  background-color: transparent;
  color: black;
  cursor: pointer;
  font-size: 20px;

  &:hover {
    background-color: black;
    color: white;
  }
  &:active {
    color: green;
  }
`;

export default function ProductCard({
  productId,
  productName,
  productPrice,
  productDescription,
  productImage,
  handleCardClick,
  handleAddToCartClick,
}: Props) {
  const addToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    handleAddToCartClick(productId);
  };

  return (
    <ProductCardContainerDiv>
      <ImageDiv onClick={handleCardClick}>
        <Image src={productImage} alt="productImage" />
      </ImageDiv>
      <WithoutImageDiv>
        <NamePrice onClick={handleCardClick}>
          <H2>{productName}</H2>
          <H2>{productPrice}</H2>
        </NamePrice>
        <Description onClick={handleCardClick}>
          {productDescription}
        </Description>
        {/* <QuantityAddToCartDiv> */}

        <AddToCartButton onClick={addToCart}>Add to cart</AddToCartButton>
        {/* </QuantityAddToCartDiv> */}
      </WithoutImageDiv>
    </ProductCardContainerDiv>
  );
}
