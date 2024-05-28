import React from "react";
import UserLogin from "./modules/users/UserLogin";
import UserRegister from "./modules/users/UserRegister";
//import Log from './modules/users/Log';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./layout/Home";
import MesnWear from "./modules/products/MensWear";
import WomensWear from "./modules/products/WomensWear";
import KidsWear from "./modules/products/KidsWear";
import Cart from "./modules/order/Cart";
import UploadProduct from "./modules/products/UploadProduct";
import ProductDetails from "./modules/products/ProductDetails";
import Profile from "./modules/users/Profile";
import Checkout from "./modules/order/CheckOut";

let App = () => {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/signin" element={<UserLogin />} />
          <Route path="/user/singup" element={<UserRegister />} />
          <Route path="user/profile" element={<Profile />} />
          <Route path="/products/men" element={<MesnWear />} />
          <Route path="/products/women" element={<WomensWear />} />
          <Route path="/products/kids" element={<KidsWear />} />
          <Route path="/products/cart" element={<Cart />} />
          <Route path="/product/upload" element={<UploadProduct />} />
          <Route path="product/:productId" element={<ProductDetails />} />
          <Route path="orders/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default App;
