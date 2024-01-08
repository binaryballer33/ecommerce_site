import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { commerce } from "./lib/commerce";
import { Navbar, Products, Cart, Checkout } from "./components";

function App() {
  // states
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  // fetches
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  }
  
  // cart crud functions
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const item = await commerce.cart.update(productId, { quantity });
    setCart(item.cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const item = await commerce.cart.remove(productId);
    setCart(item.cart);
  };

  const handleEmptyCart = async () => {
    const item = await commerce.cart.empty();
    setCart(item.cart);
  };
  
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [cart]);


  return (
    <>
      <Router>
        <Navbar totalItems={cart?.total_items}/>
        <Routes>
          <Route path="/" element={<Products products={products} onAddToCart={handleAddToCart}/>}/>
          <Route path="/cart" element={<Cart cart={cart} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} handleEmptyCart={handleEmptyCart}/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
