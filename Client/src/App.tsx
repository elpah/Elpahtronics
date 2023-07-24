import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Contact from "./pages/Contact";
import Product from "./pages/ProductPage";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Admin from "./pages/Admin";

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
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
