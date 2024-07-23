import axios from "axios";

export const getAllCategories = async () => {
  const { data } = await axios.get("http://localhost:5000/api/categories");
  return data;
};

export const createCategory = async (category) => {
  const { data } = await axios.post(
    "http://localhost:5000/api/categories",
    category
  );
  return data;
};

export const deleteCategory = async (id) => {
  await axios.delete(`http://localhost:5000/api/categories/${id}`);
};
