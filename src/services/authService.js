export const login = async (username, password) => {
  const response = await axios.post(
    "http://localhost:9090/ecommerce-1.0.0/auth/login",
    { username, password }
  );
  localStorage.setItem("token", response.data);
  return response.data;
};

export const signup = async (username, email, password) => {
  return axios.post(
    "http://localhost:9090/ecommerce-1.0.0/auth/signup",
    { username, email, password }
  );
};
