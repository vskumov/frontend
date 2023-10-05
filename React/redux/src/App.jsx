import React from "react";
// import Clicker from "./Components/Clicker";
// import PostsContainer from "./Components/Posts/PostsContainer";
// import PostForm from "./Components/Posts/PostForm";
import Cart from "./Components/Shop/Cart";
import Shop from "./Components/Shop/Shop";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <NavLink to={"/"}>Shop</NavLink>
        <NavLink to={"/cart"}>Cart</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
