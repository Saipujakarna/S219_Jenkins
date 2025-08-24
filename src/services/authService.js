import axios from "axios";

const API_URL = "http://localhost:9090/ecommerce-1.0.0/auth/signup";

export const login = async (username, password) => {
  const response = await axios.post(
    "http://localhost:9090/ecommerce-1.0.0/auth/login",
    { username, password }
  );

export const signup = async (username, email, password) => {
  return axios.post(`${API_URL}`, { username, email, password });
};

export const logout = () => {
  localStorage.removeItem("token");
};