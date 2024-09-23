import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './commons/Header';
import Products from './components/Products';
import Cart from './components/Cart';

const Layout = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Products/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Layout;
