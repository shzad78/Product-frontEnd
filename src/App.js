import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from "react-router-dom";
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
                  <Link to="/login">Login</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/register">Register</Link>
                </Menu.Item>
              </>
            ) : (
              <>
                <Menu.Item key="3">
                  <Link to="/dashboard">Dashboard</Link>
                </Menu.Item>
                <Menu.Item key="4">
                  <Link to="/products">Products</Link>
                </Menu.Item>
                <Menu.Item key="5">
                  <Link to="/categories">Categories</Link>
                </Menu.Item>
                <Menu.Item key="6">
                  <Link to="/add-product">Add Product</Link>
                </Menu.Item>
                <Menu.Item key="7">
                  <Link to="/add-category">Add Category</Link>
                </Menu.Item>
                <Menu.Item key="8" onClick={handleLogout}>
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
            {isAuthenticated ? (
              <>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route
                  path="/products"
                  element={<ProductList searchTerm="" />}
                />
                <Route
                  path="/categories"
                  element={<CategoryList searchTerm="" />}
                />
                <Route path="/add-product" element={<AddProduct />} />
                <Route path="/add-category" element={<AddCategory />} />
                <Route path="/" element={<Navigate to="/dashboard" />} />
              </>
            ) : (
              <Route path="/" element={<Navigate to="/login" />} />
            )}
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
};

export default App;
