import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await axios.post("http://localhost:5000/api/categories", values);
      message.success("Category added successfully");
      navigate("/categories");
    } catch (error) {
      message.error("Failed to add category");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Add Category</h1>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="name"
          label="Category Name"
          rules={[
            { required: true, message: "Please input the category name!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Add Category
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddCategory;
