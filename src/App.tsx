import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/Context/index";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import Home from "./pages/Home/index";
import Product from "./pages/Product/index";
import Contact from "./pages/Contact/index";
import Description from "./pages/Description/index";
import Cart from "./pages/Cart/index";

import { Styles } from "./styles/styles";
import "bootstrap/dist/css/bootstrap.min.css";

interface AppProps {
  tab: string;
}

const App: React.FC<AppProps> = ({ tab }) => {
  return (
    <CartProvider>
      <Router>
        <Styles />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<Description />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
};
export default App;
