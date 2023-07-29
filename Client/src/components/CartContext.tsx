import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import Product from '../productType';

interface CartContextType {
  cartArray: Product[];
  setCartArray: React.Dispatch<React.SetStateAction<Product[]>>;
}
const initialCartData: Product[] = JSON.parse(
  localStorage.getItem('cartData') || '[]',
);

const CartContext = createContext<CartContextType>({
  cartArray: initialCartData,
  setCartArray: () => {},
});

export const CartContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cartArray, setCartArray] = useState<Product[]>(initialCartData);

  useEffect(() => {
    const savedCartData = localStorage.getItem('cartData');
    if (savedCartData) {
      setCartArray(JSON.parse(savedCartData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartData', JSON.stringify(cartArray));
    console.log(cartArray);
  }, [cartArray]);

  return (
    <CartContext.Provider value={{ cartArray, setCartArray }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
