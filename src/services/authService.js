import axios from "axios";

export const login = async (credentials) => {
  const { data } = await axios.post(
    "http://localhost:5000/api/auth/login",
    credentials
  );
  localStorage.setItem("user", JSON.stringify(data));
};

export const register = async (credentials) => {
  await axios.post("http://localhost:5000/api/auth/register", credentials);
};
