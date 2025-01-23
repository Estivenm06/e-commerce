import { jwtDecode } from "jwt-decode";
import { createOneCart } from "../services/cart.js";
import { logout } from '../services/logout.js'

export const getToken = () => {
  try {
    const user = localStorage.getItem("userLogged");
    return user ? `Bearer ${JSON.parse(user).token}` : null;
  } catch (error) {
    console.error('Error getting token from localstorage', error);
    return null
  }
};

export const isTokenExpired = (token) => {
  if (!token) return true;
  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decodedToken.exp < currentTime;
  } catch (error) {
    console.error("Error decoding token: ", error);
    return true;
  }
};

export const handleTokenExpiration = async (cart, navigate, setUser, setCart) => {
  try {
    if (cart && cart.length > 0) {
      await createOneCart(cart); 
    }
    await logout();
    localStorage.removeItem("userLogged");
    localStorage.removeItem("userCart");
    setUser(null);
    setCart([]);
    navigate("/");
  } catch (error) {
    console.error("Error during token expiration handling:", error);
  }
};