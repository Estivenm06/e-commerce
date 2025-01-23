import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { getAll } from "./services/product.js";
import { getAllCart } from "./services/cart.js";
import {
  isTokenExpired,
  handleTokenExpiration,
  getToken,
} from "./utils/middleware.js";
import { Home } from "./pages/Home.jsx";
import { Shop } from "./pages/Shop.jsx";
import { Contact } from "./pages/Contact.jsx";
import { Cart } from "./pages/Cart.jsx";
import "./styles/index.scss";
import { Box, CircularProgress, Typography } from "@mui/material";
import { deleteOneCart } from "./services/cart.js";

export const App = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState(null);
  console.log(alert);

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
      setAlert({
        message: "You added more quantity of this item.",
        type: "success",
      });
      setTimeout(() => {
        setAlert(null);
      }, 2000);
    } else {
      setCart([...cart, { item, quantity: 1 }]);
      localStorage.setItem(
        "userCart",
        JSON.stringify([...cart, { item, quantity: 1 }])
      );
      setAlert({
        message: "You have been insert this product.",
        type: "success",
      });
      setTimeout(() => {
        setAlert(null);
      }, 2000);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(false);

        const fetchedProducts = await getAll();
        if (fetchedProducts) {
          setProducts(fetchedProducts);
        }

        if (localStorage.getItem("userLogged")) {
          try {
            const storedUser = JSON.parse(localStorage.getItem("userLogged"));
            const fetchedCart = await getAllCart(storedUser.id);
            const storedCart = JSON.parse(localStorage.getItem("userCart"));

            if (storedUser) {
              setUser(storedUser);
            }

            if(storedCart){
              setCart(storedCart)
            }

            if (fetchedCart.length === 1) {
              const cartData = fetchedCart[0].products;
              localStorage.setItem("userCart", JSON.stringify(cartData));
              setCart(cartData);
              await deleteOneCart(fetchedCart[0].id);
            }
          } catch (error) {
            console.error("Error fetching cart Database", error);
            setAlert({
              message: "An error occurred while loading cart data.",
              type: "error",
            });
            setTimeout(() => {
              setAlert(null);
            }, 2000);
          }
        }

        const token = getToken();

        if (localStorage.getItem("userLogged") && isTokenExpired(token)) {
          handleTokenExpiration(cart, navigate, setUser, setCart);
          return;
        }
      } catch (error) {
        console.error("Error fetching app data", error);
        setAlert({
          message: "An error occurred while loading data.",
          type: "error",
        });
        setTimeout(() => {
          setAlert(null);
        }, 2000);
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
                alert={alert}
                setAlert={setAlert}
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
                alert={alert}
                setAlert={setAlert}
              />
            }
          />
          <Route
            path="contact"
            element={
              <Contact
                user={user}
                setUser={setUser}
                cart={cart}
                alert={alert}
                setAlert={setAlert}
              />
            }
          />
          <Route
            path="cart"
            element={
              <Cart
                user={user}
                setUser={setUser}
                cart={cart}
                alert={alert}
                setAlert={setAlert}
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
};
