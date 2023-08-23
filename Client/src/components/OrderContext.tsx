import React, { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react';

interface OrderContextType {
  orderNumber: string;
  orderTotal: string;
  orderDate: string;
  paymentMethod: string;
  orderEmail: string;
  expectedDelivery: string;
  deliveryOptions: string;
  setOrderNumber: React.Dispatch<React.SetStateAction<string>>;
  setOrderTotal: React.Dispatch<React.SetStateAction<string>>;
  setOrderDate: React.Dispatch<React.SetStateAction<string>>;
  setPaymentMethod: React.Dispatch<React.SetStateAction<string>>;
  setOrderEmail: React.Dispatch<React.SetStateAction<string>>;
  setExpectedDelivery: React.Dispatch<React.SetStateAction<string>>;
  setDeliveryOptions: React.Dispatch<React.SetStateAction<string>>;
}

const OrderContext = createContext<OrderContextType>({
  orderNumber: '',
  orderTotal: '',
  orderDate: '',
  paymentMethod: '',
  orderEmail: '',
  expectedDelivery: '',
  deliveryOptions: '',
  setOrderNumber: () => {},
  setOrderTotal: () => {},
  setOrderDate: () => {},
  setPaymentMethod: () => {},
  setOrderEmail: () => {},
  setExpectedDelivery: () => {},
  setDeliveryOptions: () => {},
});

export const OrderContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [orderNumber, setOrderNumber] = useState<string>('');
  const [orderTotal, setOrderTotal] = useState<string>('');
  const [orderDate, setOrderDate] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [orderEmail, setOrderEmail] = useState<string>('');
  const [expectedDelivery, setExpectedDelivery] = useState<string>('');
  const [deliveryOptions, setDeliveryOptions] = useState<string>('');

  useEffect(
    () => console.log(orderNumber, orderTotal, orderDate, orderEmail, orderNumber, expectedDelivery, deliveryOptions),
    [orderNumber, orderTotal, orderDate, orderEmail, orderNumber, expectedDelivery, deliveryOptions],
  );

  return (
    <OrderContext.Provider
      value={{
        orderNumber,
        orderTotal,
        orderDate,
        paymentMethod,
        orderEmail,
        expectedDelivery,
        deliveryOptions,
        setOrderNumber,
        setOrderTotal,
        setOrderDate,
        setPaymentMethod,
        setOrderEmail,
        setExpectedDelivery,
        setDeliveryOptions,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => useContext(OrderContext);
