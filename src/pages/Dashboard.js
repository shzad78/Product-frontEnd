import React from "react";
import ProductList from "../components/Products/ProductList";
import CategoryList from "../components/Categories/CategoryList";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <ProductList />
      <CategoryList />
    </div>
  );
};

export default Dashboard;
