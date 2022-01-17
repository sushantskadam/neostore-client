import logo from "./logo.svg";
import "./App.css";
import Footer from "../components/Footer/Footer";
import Navb from "../components/Navbar/Navb";
import Login from "../components/Auth/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "../components/Auth/Signup";
import Dashboard from "../components/Dashboard/Dashboard";
import ForgotPassword from "../components/Auth/ForgotPassword";
import Products from "../components/Products/Products";
import ChangePassword from "../components/Account/ChangePassword";
import { useState } from "react";
import ProdDetails from "../components/Products/ProdDetails";
import Cart from "../components/Cart/Cart";
import Profile from "../components/Account/Profile";
import Checkout from "../components/Checkout/Checkout";
import SimpleMap from "../components/Footer/SimpleMap";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <Router>
        <Navb search={search} setSearch={setSearch} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route
            path="/products"
            element={<Products search={search} setSearch={setSearch} />}
          />
          <Route path="/products/:id" element={<ProdDetails />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/map" element={<SimpleMap />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
