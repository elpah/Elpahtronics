import React, { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react';

interface ShippingAddress {
  fullName: string;
  phoneNumber: string;
  street: string;
  apartment?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

interface ShippingAddressContextType {
  shippingAddress: ShippingAddress;
  setShippingAddress: React.Dispatch<React.SetStateAction<ShippingAddress>>;
}
const initialShippingAddress: ShippingAddress = {
  fullName: '',
  phoneNumber: '',
  street: '',
  apartment: '',
  city: '',
  state: '',
  postalCode: '',
  country: '',
};

const ShippingAddressContext = createContext<ShippingAddressContextType>({
  shippingAddress: initialShippingAddress,
  setShippingAddress: () => {},
});

export const ShippingAddressContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [shippingAddress, setShippingAddress] = useState<ShippingAddress>(initialShippingAddress);

  return (
    <ShippingAddressContext.Provider value={{ shippingAddress, setShippingAddress }}>
      {children}
    </ShippingAddressContext.Provider>
  );
};

export const useShippingAddressContext = () => useContext(ShippingAddressContext);
