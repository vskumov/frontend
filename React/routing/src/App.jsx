import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import HomePage from "./Components/pages/HomePage";
import ProductsPage from "./Components/pages/ProductsPage";
import NotFound from "./Components/pages/NotFound";
import SingleProduct from "./Components/pages/SingleProduct";
import SinglePost from "./Components/pages/SinglePost";
import Blog from "./Components/pages/Blog";

function App() {
  return (
    <>
      <Router>
        <Nav />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<SingleProduct />} />

          <Route path="/blog" element={<Blog />}/>
          <Route path="/blog/posts/:id" element={<SinglePost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
