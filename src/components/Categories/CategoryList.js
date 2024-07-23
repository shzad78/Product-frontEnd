import React, { useState, useEffect } from "react";
import { Table, message } from "antd";
import axios from "axios";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/categories"
        );
        setCategories(response.data);
      } catch (error) {
        message.error("Failed to load categories");
      }
    };

    fetchCategories();
  }, []);

  const columns = [{ title: "Name", dataIndex: "name", key: "name" }];

  return <Table dataSource={categories} columns={columns} rowKey="_id" />;
};

export default CategoryList;
