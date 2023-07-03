import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import Cart from "./pages/Cart";
import About from "./pages/About";

function App() {
  return (
    <div className="app">
      <div className="app">
        <TopBar />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
