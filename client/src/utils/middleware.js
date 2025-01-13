import { jwtDecode } from "jwt-decode";

export const getToken = () => {
  try {
    const user = localStorage.getItem("userLogged");
    const token = user ? JSON.parse(user).token : '';
    return `Bearer ${token}`;
  } catch (error) {
    throw Error(error);
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
