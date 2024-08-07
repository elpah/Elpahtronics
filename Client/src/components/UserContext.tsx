import React, { createContext, FC, ReactNode, useContext, useState } from 'react';

interface UserType {
  userName: string;
  fbId: string;
  userEmailAddress: string;
  userPhoneNumber: string;
  userDob: string;
  orders?: any[];
  ShippingAddress?: {
    street: string;
    apartment?: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
}

interface UserContextType {
  currentUser: UserType;
  setCurrentUser: React.Dispatch<React.SetStateAction<UserType>>;
}

const initialUser: UserType = {
  userName: '',
  fbId: '',
  userEmailAddress: '',
  userPhoneNumber: '',
  userDob: '',
  orders: [],
  ShippingAddress: {
    street: '',
    apartment: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
  },
};

const UserContext = createContext<UserContextType>({
  currentUser: initialUser,
  setCurrentUser: () => {},
});

export const UserContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<UserType>(initialUser);

  return <UserContext.Provider value={{ currentUser, setCurrentUser }}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
