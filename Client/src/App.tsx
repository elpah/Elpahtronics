import React from "react";
import "./App.css";
import Contact from "./pages/Contact";
import Product from "./pages/ProductPage";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import Cart from "./pages/Cart";
import AdminLogin from "./pages/AdminLogin";
import AdminPage from "./pages/AdminPage";
import NotFound from "./pages/NotFound";

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
          * <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
