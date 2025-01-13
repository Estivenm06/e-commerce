import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import "./styles/index.scss";
import { getAll } from "./services/product.js";
import { Home } from "./pages/Home.jsx";
import { Logged } from "./pages/Logged.jsx";
import { isTokenExpired } from "./utils/middleware.js";

export const App = () => {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState({});
  const navigate = useNavigate()

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
    if(localStorage.getItem('userLogged')){
      const token = JSON.parse(localStorage.getItem('userLogged')).token
      if(isTokenExpired(token)){
        localStorage.removeItem('userLogged')
        navigate('/')
      }else{
        setUser(JSON.parse(localStorage.getItem('userLogged')))
      }
    }else{
      navigate('/')
    }
  }, []);

  return (
    <div>
        <Routes>
          <Route path="/">
        <Route index element={user?.username ? <Navigate replace to ='/logged'/> : <Home products={products} setUser={setUser}/>} />
        <Route path="/logged" element={user?.username ? <Logged products={products} user={user} setUser={setUser}/> : <Navigate replace to='/'/>} />
          </Route>
        </Routes>
    </div>
  );
};
