import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { getAll } from "./services/product.js";
import { createOneCart, getAllCart } from "./services/cart.js";
import { isTokenExpired } from "./utils/middleware.js";
import { Home } from "./pages/Home.jsx";
import { Shop } from "./pages/Shop.jsx";
import { Contact } from "./pages/Contact.jsx";
import { Cart } from "./pages/Cart.jsx";
import "./styles/index.scss";
import { Box, CircularProgress, Typography } from "@mui/material";
import { deleteOneCart } from "./services/cart.js";

export const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleAddToCart = (item) => {
    const isAlreadyInCart = cart.some(
      (cartItem) => cartItem.item.id === item.id
    );
    if (isAlreadyInCart) {
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.item.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
      localStorage.setItem(
        "userCart",
        JSON.stringify(
          cart.map((cartItem) =>
            cartItem.item.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        )
      );
      alert("You added more quantity of this item.");
    } else {
      setCart([...cart, { item, quantity: 1 }]);
      localStorage.setItem(
        "userCart",
        JSON.stringify([...cart, { item, quantity: 1 }])
      );
      alert("You have been insert this product.");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(false);
        setError(null);
        const fetchedProducts = await getAll();
        if (fetchedProducts) {
          setProducts(fetchedProducts);
        }
        if (localStorage.getItem("userLogged")) {
          const storedUser = JSON.parse(localStorage.getItem("userLogged"));
          const token = storedUser.token;
          const products = cart.map((item) => item);
          const cartDatabase = async () => {
            try{
              const fetchedCart = await getAllCart(storedUser.id);
              const storedCart = JSON.parse(localStorage.getItem("userCart"));
              if (storedCart) {
                setCart(storedCart);
              }
              if (fetchedCart.length !== 0 && location.pathname === '/') {
                localStorage.setItem(
                  "userCart",
                  JSON.stringify(fetchedCart[0].products)
                );
                setCart(fetchedCart[0].products);
                await deleteOneCart(fetchedCart[0].id)
              }
              if (fetchedCart.length !== 0 && location.pathname === '/cart') {
                localStorage.setItem(
                  "userCart",
                  JSON.stringify(fetchedCart[0].products)
                );
                setCart(fetchedCart[0].products);
              }
            }catch(error){
              console.log(error);
            }
          };
          if (isTokenExpired(token)) {
            await createOneCart(products);
            localStorage.removeItem("userLogged");
            localStorage.removeItem("userCart");
            setUser(null);
            navigate("/");
          } else {
            setUser(storedUser);
            cartDatabase();
          }
        }
      } catch (error) {
        console.error("Error fetching app data", error);
        setError("An error occurred while loading data.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [navigate]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
        <Typography>Loading...</Typography>
      </Box>
    );
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <Home
                products={products}
                setUser={setUser}
                user={user}
                cart={cart}
              />
            }
          />
          <Route
            path="shop"
            element={
              <Shop
                user={user}
                setUser={setUser}
                products={products}
                cart={cart}
                setCart={setCart}
                handleAddToCart={handleAddToCart}
              />
            }
          />
          <Route
            path="contact"
            element={<Contact user={user} setUser={setUser} cart={cart} />}
          />
          <Route
            path="cart"
            element={<Cart user={user} setUser={setUser} cart={cart} />}
          />
        </Route>
      </Routes>
    </>
  );
};
