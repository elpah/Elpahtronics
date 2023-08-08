import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaLessThan, FaTimes } from 'react-icons/fa';
import CartCard from '../components/CartCard.tsx';
import { useCartContext } from '../components/CartContext.tsx';
import SummaryCard from '../components/SummaryCard.tsx';

const CartHeader = styled.h2`
  margin-bottom: 10px;
  text-align: center;
  font-size: 25px;
`;
const Paragraph = styled.p`
  cursor: pointer;
  font-size: 15px;
  &:hover {
    color: green;
  }
`;
const CartProductDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;
const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const EmptyCart = styled.p`
  font-size: 30px;
`;
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

export default function Cart() {
  const navigate = useNavigate();
  const { cartArray, setCartArray } = useCartContext();

  const handleIncrement = (productId: string) => {
    const existingProduct = cartArray.find(product => product.productId === productId);

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
    const existingProduct = cartArray.find(product => product.productId === productId);

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
    const existingProductIndex = cartArray.findIndex(product => product.productId === productId);
    if (existingProductIndex !== -1) {
      const updatedCartArray = cartArray.filter((product, index) => index !== existingProductIndex);
      setCartArray(updatedCartArray);
    }
  };

  return (
    <CartDiv>
      {cartArray.length > 0 ? (
        <CartCardContainer>
          <CartHeader> Your Cart</CartHeader>
          <CartProductDiv>
            <Paragraph onClick={() => navigate('/product')}>
              <FaLessThan
                size={10}
                style={{
                  marginRight: '10px',
                }}
              />{' '}
              BACK TO PRODUCTS
            </Paragraph>
            <Paragraph onClick={() => setCartArray([])}>
              <FaTimes
                size={12}
                style={{
                  border: '1px solid black',
                  borderRadius: '50%',
                  marginRight: '10px',
                }}
              />
              CLEAR CART
            </Paragraph>
          </CartProductDiv>
          {cartArray?.map((cartItem: any) => {
            const totalPrice = parseInt(cartItem.productPrice, 10) * cartItem.productQuantity;
            return (
              <CartCard
                productId={cartItem.productId}
                handleDecrement={handleDecrement}
                handleIncrement={handleIncrement}
                handleRemove={handleRemove}
                key={cartItem.productId}
                productImage={cartItem.productImage}
                productName={cartItem.productName}
                productDetails={cartItem.productDescription}
                price={`${totalPrice}$`}
                quantity={cartItem.productQuantity}
              />
            );
          })}{' '}
        </CartCardContainer>
      ) : (
        <EmptyCartContainer>
          <EmptyCart>Cart is Empty</EmptyCart>
        </EmptyCartContainer>
      )}
      <SummaryCard />
    </CartDiv>
  );
}
