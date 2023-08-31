import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact.tsx';
import Product from './pages/ProductPage.tsx';
import Home from './pages/Home.tsx';
import NavBar from './components/NavBar.tsx';
import Cart from './pages/Cart.tsx';
import Login from './pages/user/Login.tsx';
import AdminPage from './pages/user/UserPage.tsx';
import NotFound from './pages/NotFound.tsx';
import Checkout from './pages/Checkout.tsx';
import PaymentSuccess from './pages/PaymentSuccess.tsx';
import PaymentFailed from './pages/PaymentFailed.tsx';
import CreateAccount from './pages/user/CreateAccount.tsx';

function App() {
  return (
    <div className="app">
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<CreateAccount />} />
          <Route path="/adminpage" element={<AdminPage />} />
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
