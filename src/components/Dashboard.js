import React, { useState, useEffect } from "react";
import { Input, Row, Col, Card } from "antd";
import ProductList from "./Products/ProductList";
import CategoryList from "./Categories/CategoryList";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch products and categories
    const fetchData = async () => {
      const productsResponse = await fetch("/api/products");
      const categoriesResponse = await fetch("/api/categories");

      const productsData = await productsResponse.json();
      const categoriesData = await categoriesResponse.json();

      setProducts(productsData);
      setCategories(categoriesData);
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Input
        placeholder="Search products and categories"
        value={searchTerm}
        onChange={handleSearch}
        style={{ marginBottom: 20 }}
      />
      <Row gutter={16}>
        <Col span={12}>
          <Card title="Products">
            <ProductList products={filteredProducts} />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Categories">
            <CategoryList categories={filteredCategories} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
