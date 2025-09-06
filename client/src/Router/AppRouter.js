import React from "react";
import { Navbar } from "../components/Navbar";
import { Routes, Route } from "react-router-dom";
import { ProductList } from "../components/ProductList";
import { Home } from "../components/Home";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { SignUp } from "../components/loginSignUp/SignUp";
import { Login } from "../components/loginSignUp/Login";
import { Admin } from "../components/adminPanel/Admin";

export default function AppRouter() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<ProductList />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}
