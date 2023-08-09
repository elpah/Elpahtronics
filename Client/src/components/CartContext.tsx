// import React, { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react';
// import Product from '../productType';

// interface CartContextType {
//   cartArray: Product[];
//   setCartArray: React.Dispatch<React.SetStateAction<Product[]>>;
// }
// const initialCartData: Product[] = JSON.parse(localStorage.getItem('cartData') || '[]');

// const CartContext = createContext<CartContextType>({
//   cartArray: initialCartData,
//   setCartArray: () => {},
// });

// export const CartContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
//   const [cartArray, setCartArray] = useState<Product[]>(initialCartData);

//   useEffect(() => {
//     const savedCartData = localStorage.getItem('cartData');
//     if (savedCartData) {
//       setCartArray(JSON.parse(savedCartData));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('cartData', JSON.stringify(cartArray));
//     console.log(cartArray);
//   }, [cartArray]);

//   return <CartContext.Provider value={{ cartArray, setCartArray }}>{children}</CartContext.Provider>;
// };

// export const useCartContext = () => useContext(CartContext);

import React, { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react';
import Product from '../productType';

interface CartContextType {
  cartArray: Product[];
  setCartArray: React.Dispatch<React.SetStateAction<Product[]>>;
  totalPrice: number;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
}

function calculateTotalPrice(cart: Product[]) {
  const totalPrice = cart.reduce(
    (total, product) => total + parseInt(product.productPrice, 10) * product.productQuantity,
    0,
  );
  return totalPrice;
}

const initialCartData: Product[] = JSON.parse(localStorage.getItem('cartData') || '[]');
const initialTotalPrice = calculateTotalPrice(initialCartData) || 0;
const CartContext = createContext<CartContextType>({
  cartArray: initialCartData,
  setCartArray: () => {},
  totalPrice: initialTotalPrice,
  setTotalPrice: () => {},
});

export const CartContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [cartArray, setCartArray] = useState<Product[]>(initialCartData);
  const [totalPrice, setTotalPrice] = useState<number>(initialTotalPrice);

  useEffect(() => {
    const savedCartData = localStorage.getItem('cartData');
    if (savedCartData) {
      setCartArray(JSON.parse(savedCartData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartData', JSON.stringify(cartArray));
    setTotalPrice(calculateTotalPrice(cartArray));
  }, [cartArray]);

  useEffect(() => console.log(totalPrice), [totalPrice]);
  return (
    <CartContext.Provider value={{ cartArray, setCartArray, totalPrice, setTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
