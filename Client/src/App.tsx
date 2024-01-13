import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Contact from './pages/Contact.tsx';
import Product from './pages/ProductPage.tsx';
import Home from './pages/Home.tsx';
import NavBar from './components/NavBar.tsx';
import Cart from './pages/Cart.tsx';
import Login from './pages/user/Login.tsx';
import Orders from './pages/Orders.tsx';
import NotFound from './pages/NotFound.tsx';
import Checkout from './pages/Checkout.tsx';
import PaymentSuccess from './pages/PaymentSuccess.tsx';
import PaymentFailed from './pages/PaymentFailed.tsx';
import CreateAccount from './pages/user/CreateAccount.tsx';
import UserPage from './pages/user/UserPage.tsx';
import { useUserContext } from './components/UserContext';
import { signOut } from 'firebase/auth';
import { auth } from './firebase.ts';

const resetUser = {
  userName: '',
  fbId: '',
  userEmailAddress: '',
  userPhoneNumber: '',
  userDob: '',
  orders: [],
  ShippingAddress: { street: '', apartment: '', city: '', state: '', postalCode: '', country: '' },
};

function App() {
  const { setCurrentUser } = useUserContext();
  const navigate = useNavigate();

  const useSignOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem('currentUserLocal');
        navigate('/login');
        setCurrentUser(resetUser);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUserLocal');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setCurrentUser(parsedUser);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app">
      <div className="app">
        <NavBar handleClick={useSignOut} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/signup" element={<CreateAccount />} />
          <Route path="/userpage" element={<UserPage />} />
          <Route path="/checkoutpage" element={<Checkout />} />
          <Route path="/success" element={<PaymentSuccess />} />
          <Route path="/failed" element={<PaymentFailed />} />
          * <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
