import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { createProduct } from "../../services/productService";

const ProductForm = ({ fetchProducts }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await createProduct(values);
      fetchProducts();
      form.resetFields();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <Form.Item
        name="name"
        rules={[{ required: true, message: "Please input the product name!" }]}
      >
        <Input placeholder="Product Name" />
      </Form.Item>
      <Form.Item
        name="description"
        rules={[
          { required: true, message: "Please input the product description!" },
        ]}
      >
        <Input placeholder="Product Description" />
      </Form.Item>
      <Form.Item
        name="price"
        rules={[{ required: true, message: "Please input the product price!" }]}
      >
        <Input placeholder="Product Price" />
      </Form.Item>
      <Form.Item
        name="category"
        rules={[
          { required: true, message: "Please input the product category!" },
        ]}
      >
        <Input placeholder="Product Category" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Add Product
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ProductForm;
