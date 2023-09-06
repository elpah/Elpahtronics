import React, { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react';

interface User {
  userName: string;
  fbId: string;
  userEmailAddress: string;
  orders?: [];
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
  currentUser: User;
  setCurrentUser: React.Dispatch<React.SetStateAction<User>>;
}
const initialUser: User = {
  userName: '',
  fbId: '',
  userEmailAddress: '',
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
  const [currentUser, setCurrentUser] = useState<User>(initialUser);

  return <UserContext.Provider value={{ currentUser, setCurrentUser }}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
