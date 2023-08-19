import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact.tsx';
import Product from './pages/ProductPage.tsx';
import Home from './pages/Home.tsx';
import TopBar from './components/TopBar.tsx';
import NavBar from './components/NavBar.tsx';
import Cart from './pages/Cart.tsx';
import AdminLogin from './pages/admin/AdminLogin.tsx';
import AdminPage from './pages/admin/AdminPage.tsx';
import NotFound from './pages/NotFound.tsx';
import Checkout from './pages/Checkout.tsx';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import PaymentSuccess from './pages/PaymentSuccess.tsx';
import StripePayment from './components/StripePayment.tsx';
import PaymentFailed from './pages/PaymentFailed.tsx';

function App() {
  return (
    <div className="app">
      <div className="app">
        <TopBar />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/adminpage" element={<AdminPage />} />
          <Route path="/checkoutpage" element={<Checkout />} />
          <Route path="/success" element={<PaymentSuccess />} />
          <Route path="/failed" element={<PaymentFailed />} />
          <Route path="/stripe" element={<StripePayment />} />
          * <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
