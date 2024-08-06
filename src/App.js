import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import "./style.css";
import Detail from "./components/product/Detail";
// import Products from "./components/products/Products";
import ProductPage from "./pages/productpage/ProductPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import PaymentPage from "./pages/PaymentPage/PaymentPage";
import CartPage from "./pages/CartPage/CartPage";
export default function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/" element={<ProductPage />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/cart/" element={<CartPage />} />
            <Route path="/contact/" element={<ContactPage />} />
            <Route path="/payment/" element={<PaymentPage />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}
