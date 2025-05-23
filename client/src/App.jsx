/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
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
import { Box, CircularProgress, Typography } from "@mui/material";
import { deleteOneCart } from "./services/cart.js";
import { isEqual } from "lodash";

export const App = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState(null);
  const [filter, setFilter] = useState('');

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
      setTimeout(() => setAlert(null), 2000);
    } else {
      setCart([...cart, { item, quantity: 1 }]);
      localStorage.setItem(
        "userCart",
        JSON.stringify([...cart, { item, quantity: 1 }])
      );
      setAlert({
        message: "You have been inserted this product.",
        type: "success",
      });
      setTimeout(() => setAlert(null), 2000);
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

        const token = getToken();

        if (localStorage.getItem("userLogged") && isTokenExpired(token)) {
          handleTokenExpiration(cart, navigate, setUser, setCart);
          return;
        }

        const storedUser = JSON.parse(localStorage.getItem('userLogged'))

        setUser(storedUser)

        if(storedUser){
          try{
            const fetchedCart = await getAllCart(storedUser.id)
            const storedCart = JSON.parse(localStorage.getItem('userCart'))

            setCart(storedCart || [])

            if(fetchedCart.length  === 1){
              const cartData = fetchedCart[0].products
              if(!isEqual(storedCart, cartData)){
                localStorage.setItem('userCart', JSON.stringify(cartData))
                setCart(cartData)
                await deleteOneCart(fetchedCart[0].id)
              }

            }
          }catch(error){
            console.error("Error fetching cart Database", error);
            setAlert({
              message: "An error occurred while loading cart data.",
              type: "error",
            });
            setTimeout(() => setAlert(null), 2000);
          }
        }

      } catch (error) {
        console.error("Error fetching app data", error);
        setAlert({
          message: "An error occurred while loading data.",
          type: "error",
        });
        setTimeout(() => setAlert(null), 2000);
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

  const filteredData = filter && products.filter(item => item.title.toLowerCase().includes(filter.toLocaleLowerCase())).slice(0, 2)

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
                filter={filter}
                setFilter={setFilter}
                filteredData={filteredData}
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
                filter={filter}
                setFilter={setFilter}
                filteredData={filteredData}
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
                filter={filter}
                setFilter={setFilter}
                filteredData={filteredData}
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
                setCart={setCart}
                filter={filter}
                setFilter={setFilter}
                filteredData={filteredData}
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
};
