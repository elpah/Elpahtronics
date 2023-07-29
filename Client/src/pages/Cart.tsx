import React from 'react';
import styled from 'styled-components';
import { FaTags } from 'react-icons/fa';
import CartCard from '../components/CartCard';
import { useCartContext } from '../components/CartContext';

export default function Cart() {
  const { cartArray, setCartArray } = useCartContext();

  const handleIncrement = (productId: string) => {
    const existingProduct = cartArray.find(
      product => product.productId === productId,
    );

    if (existingProduct) {
      const updatedCartArray = cartArray.map(product => {
        if (product.productId === productId) {
          return {
            ...product,
            productQuantity: product.productQuantity + 1,
          };
        }
        return product;
      });

      setCartArray(updatedCartArray);
    }
  };
  const handleDecrement = (productId: string) => {
    const existingProduct = cartArray.find(
      product => product.productId === productId,
    );

    if (existingProduct) {
      const updatedCartArray = cartArray.map(product => {
        if (product.productId === productId && product.productQuantity > 1) {
          return {
            ...product,
            productQuantity: product.productQuantity - 1,
          };
        }
        return product;
      });

      setCartArray(updatedCartArray);
    }
  };
  const handleRemove = (productId: string) => {
    const existingProductIndex = cartArray.findIndex(
      product => product.productId === productId,
    );
    if (existingProductIndex !== -1) {
      const updatedCartArray = cartArray.filter(
        (product, index) => index !== existingProductIndex,
      );
      setCartArray(updatedCartArray);
    }
  };

  return (
    <CartDiv>
      {cartArray.length > 0 ? (
        <CartCardContainer>
          {cartArray?.map((cartItem: any) => (
            <CartCard
              productId={cartItem.productId}
              handleDecrement={handleDecrement}
              handleIncrement={handleIncrement}
              handleRemove={handleRemove}
              key={cartItem.productId}
              productImage={cartItem.productImage}
              productName={cartItem.productName}
              productDetails={cartItem.productDescription}
              price={cartItem.productPrice}
              quantity={cartItem.productQuantity}
            />
          ))}{' '}
        </CartCardContainer>
      ) : (
        <p>Empty Cart</p>
      )}
      <SummaryDiv>
        <SummaryHeader>Order Summary</SummaryHeader>
        <PromoCodeInput type="text" placeholder="Have a promo code?" />
        <div>
          <SumAndAmount>
            <SummaryParagraph>Merchandise</SummaryParagraph>
            <SummaryParagraph>400$</SummaryParagraph>
          </SumAndAmount>
          <SumAndAmount>
            <SummaryParagraph>Estimated Shipping</SummaryParagraph>
            <SummaryParagraph>Free</SummaryParagraph>
          </SumAndAmount>
        </div>
        <Total>
          <TotalTxt>Total:</TotalTxt>
          <TotalTxt>300$</TotalTxt>
        </Total>
        <CheckoutButton>Proceed to checkout</CheckoutButton>
        <p
          style={{
            fontSize: '20px',
            fontWeight: '400',
            fontStyle: 'italic',
            textAlign: 'center',
            padding: '7px',
          }}
        >
          OR
        </p>
        <PaypalCheckOut>Check out with PayPal</PaypalCheckOut>
      </SummaryDiv>
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
    padding-left: 20px;
    margin-top: 20px;
  }
`;
const CartCardContainer = styled.div``;

const SummaryDiv = styled.div`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 2%;

  width: 100%;
  height: 400px;
  margin-top: 30px;

  @media (min-width: 1198px) {
    margin-top: 0;
    margin-left: 100px;
    max-width: 400px;
    border: none;
  }
`;

const SummaryHeader = styled.h2`
  font-size: 25px;
  padding-bottom: 5px;
  border-bottom: 2px solid black;
`;

const PromoCodeInput = styled.input`
  font-size: 16px;
  padding: 8px;
  width: 100%;
  height: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const SumAndAmount = styled.div`
  font-size: 18px;
  display: flex;
  justify-content: space-between;
`;
const SummaryParagraph = styled.p``;
const Total = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid black;
  margin-top: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
const TotalTxt = styled.h3``;

const CheckoutButton = styled.button`
  background-color: #000;
  color: #fff;
  width: 100%;
  height: 40px;
  font-size: 18px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  textdecoration: none;
  &:hover {
    background-color: #1a961c;
  }
`;
const PaypalCheckOut = styled.button`
  font-style: italic;
  width: 100%;

  height: 40px;
  font-size: 18px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  textdecoration: none;
  &:hover {
    background-color: #dedede;
  }
`;
