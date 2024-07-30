import React, { useState } from "react";
import { Input, Row, Col, Card } from "antd";
import ProductList from "./Products/ProductList";
import CategoryList from "./Categories/CategoryList";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

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
            <ProductList searchTerm={searchTerm} />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Categories">
            <CategoryList searchTerm={searchTerm} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
