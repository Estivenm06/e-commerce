import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getAll } from "./services/product.js";
import { getAllCart } from "./services/cart.js";
import { isTokenExpired } from "./utils/middleware.js";
import { Home } from "./pages/Home.jsx";
import { Shop } from "./pages/Shop.jsx";
import { Contact } from "./pages/Contact.jsx";
import { Cart } from "./pages/Cart.jsx";
import "./styles/index.scss";
import { Box, CircularProgress, Typography } from "@mui/material";

export const App = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState(() => {
    const storedCart = JSON.parse(localStorage.getItem("userCart"));
    return storedCart ? storedCart : [];
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleAddToCart = (item) => {
    const isAlready = cart.some((i) => i.id === item.id);
    if (isAlready) {
      alert("This product is already in the cart.");
    } else {
      setCart([...cart, item]);
      const existingCart = JSON.parse(localStorage.getItem("userCart")) || [];
      const updatedCart = [...existingCart, item];
      localStorage.setItem("userCart", JSON.stringify(updatedCart));
      alert("You have been insert this product.");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(false);
        setError(null);

        if (localStorage.getItem("userLogged")) {
          const storedUser = JSON.parse(localStorage.getItem("userLogged"));
          const token = storedUser.token;
          if (isTokenExpired(token)) {
            localStorage.removeItem("userLogged");
            localStorage.removeItem("userCart");
            setUser(null);
            navigate("/");
          } else {
            setUser(storedUser);
          }
        }
        const fetchedProducts = await getAll();
        if (fetchedProducts) {
          setProducts(fetchedProducts);
        }
        if (user) {
          const fetchedCarts = await getAllCart(user.id);
          if (fetchedCarts instanceof Error) {
            throw fetchedCarts;
          } else {
            setCart(fetchedCarts);
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
