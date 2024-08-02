import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import "./style.css";
import Detail from "./components/product/Detail";
import Products from "./components/products/Products";
import Cart from "./components/cart/Cart";
export default function App() {
  return (
    <div>
      {/* <Header /> */}
      {/* <AppProvider> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/" element={<Products />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/cart/" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      {/* </AppProvider> */}
      {/* <Footer /> */}
    </div>
  );
}
