import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout, Menu } from "antd";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Dashboard from "./components/Dashboard";
import ProductList from "./components/Products/ProductList";
import CategoryList from "./components/Categories/CategoryList";
import AddProduct from "./components/Products/AddProduct";
import AddCategory from "./components/Categories/AddCategory";

const { Header, Content } = Layout;

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Header>
          <Menu theme="dark" mode="horizontal">
            {!isAuthenticated ? (
              <>
                <Menu.Item key="1">
                  <a href="/login">Login</a>
                </Menu.Item>
                <Menu.Item key="2">
                  <a href="/register">Register</a>
                </Menu.Item>
              </>
            ) : (
              <>
                <Menu.Item key="3">
                  <a href="/products">Products</a>
                </Menu.Item>
                <Menu.Item key="4">
                  <a href="/categories">Categories</a>
                </Menu.Item>
                <Menu.Item key="5">
                  <a href="/add-product">Add Product</a>
                </Menu.Item>
                <Menu.Item key="6">
                  <a href="/add-category">Add Category</a>
                </Menu.Item>
                <Menu.Item key="7" onClick={handleLogout}>
                  Logout
                </Menu.Item>
              </>
            )}
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px", marginTop: 64 }}>
          <Routes>
            <Route
              path="/login"
              element={<Login setIsAuthenticated={setIsAuthenticated} />}
            />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/categories" element={<CategoryList />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/add-category" element={<AddCategory />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
};

export default App;
