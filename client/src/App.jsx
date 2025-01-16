import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Navigate, useLocation } from "react-router-dom";
import { getAll } from "./services/product.js";
import { isTokenExpired } from "./utils/middleware.js";
import { Home } from "./pages/Home.jsx";
import { Shop } from "./pages/Shop.jsx";
import {Contact} from './pages/Contact.jsx'
import "./styles/index.scss";

export const App = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    const getProducts = async () => {
      const products = await getAll();
      if (products) {
        setProducts(products);
      }
    };
    const user = JSON.parse(localStorage.getItem("userLogged"));
    if (user) {
      setUser(user);
    }
    getProducts();
    if (localStorage.getItem("userLogged")) {
      const token = JSON.parse(localStorage.getItem("userLogged")).token;
      if (isTokenExpired(token)) {
        localStorage.removeItem("userLogged");
        navigate("/");
      } else {
        setUser(JSON.parse(localStorage.getItem("userLogged")));
      }
    } 
  }, []);

  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Home products={products} setUser={setUser} user={user} />}/>
          <Route path="shop" element={<Shop user={user} setUser={setUser} products={products} />}/>
          <Route path="contact" element={<Contact user={user} setUser={setUser} />}/>
        </Route>
      </Routes>
    </>
  );
};
