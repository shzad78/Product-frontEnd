import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { createCategory } from "../../services/categoryService";

const CategoryForm = ({ fetchCategories }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await createCategory(values);
      fetchCategories();
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
        rules={[{ required: true, message: "Please input the category name!" }]}
      >
        <Input placeholder="Category Name" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Add Category
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CategoryForm;
