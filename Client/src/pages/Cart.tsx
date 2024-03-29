import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaLessThan, FaTimes } from 'react-icons/fa';
import CartCard from '../components/CartCard.tsx';
import { useCartContext } from '../components/CartContext.tsx';
import SummaryCard from '../components/SummaryCard.tsx';
import CheckOutButton from '../components/CheckOutButton.tsx';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import PayPalPayment from '../../src/components/PayPalPayment.tsx';
import { toast } from 'react-toastify';

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
const ClearCartParagraph = styled.p`
  cursor: pointer;
  font-size: 15px;
  &:hover {
    color: red;
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
  margin-top: 100px;

  display: grid;
  grid-gap: 10px;
  @media (min-width: 768px) {
    margin-top: 130px;
  }
  @media (min-width: 1198px) {
    grid-template-columns: repeat(2, 1fr);
    padding-left: 20px;
    margin-top: 140px;
  }
`;
const CartCardContainer = styled.div``;

const initialOptions = {
  clientId: 'AXNjYbmWdubqgfVmfsznh40FH6kORv9Orp-_XSEC8QGimP13MxDyh90266ACBL8BiR4HuEDx_jRVdeFk',
  currency: 'USD',
  intent: 'capture',
};

export default function Cart() {
  const navigate = useNavigate();
  const { totalPrice } = useCartContext();
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
      toast.error('Deleted from cart', {});
    }
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <CartDiv>
        {cartArray.length > 0 ? (
          <CartCardContainer>
            <CartHeader> Your Cart</CartHeader>
            <CartProductDiv>
              <Paragraph onClick={() => navigate('/product?category=all+products')}>
                <FaLessThan
                  size={10}
                  style={{
                    marginRight: '10px',
                  }}
                />
                BACK TO PRODUCTS
              </Paragraph>
              <ClearCartParagraph
                onClick={() => {
                  setCartArray([]);
                  toast.error('Emptied cart');
                }}
              >
                <FaTimes
                  size={12}
                  style={{
                    border: '1px solid black',
                    borderRadius: '50%',
                    marginRight: '10px',
                  }}
                />
                CLEAR CART
              </ClearCartParagraph>
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
        <SummaryCard>
          <CheckOutButton
            buttonName="Proceed to checkout"
            disabled={totalPrice === 0}
            handleButtonSubmit={() => navigate('/checkoutpage')}
          />

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
          <PayPalPayment key={totalPrice} />
        </SummaryCard>
      </CartDiv>
    </PayPalScriptProvider>
  );
}
