import React, { useState, useEffect } from "react";
import { Table, message } from "antd";
import axios from "axios";

const ProductList = ({ searchTerm }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        setProducts(response.data);
      } catch (error) {
        message.error("Failed to load products");
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Description", dataIndex: "description", key: "description" },
    { title: "Price", dataIndex: "price", key: "price" },
    { title: "Category", dataIndex: "category", key: "category" },
  ];

  return <Table dataSource={filteredProducts} columns={columns} rowKey="_id" />;
};

export default ProductList;
