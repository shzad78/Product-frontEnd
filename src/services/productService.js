import axios from "axios";

export const getAllProducts = async () => {
  const { data } = await axios.get("http://localhost:5000/api/products");
  return data;
};

export const createProduct = async (product) => {
  const { data } = await axios.post(
    "http://localhost:5000/api/products",
    product
  );
  return data;
};

export const deleteProduct = async (id) => {
  await axios.delete(`http://localhost:5000/api/products/${id}`);
};
