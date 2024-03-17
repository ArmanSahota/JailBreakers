// App.js
// Importing necessary modules from React and react-router-dom
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing custom components
import Header from './Header';
import Sidebar from './Sidebar';
import HomePage from './Home';
import Container from './Containers';
import Jobs from './Jobs';
import Footer from './Footers';
import CartPage from './CartPage';
import ServicesPage from './ServicesPage';

// Defining the main App component
function App() {
  // State hooks for managing cart and sidebar
  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // Function to add item to cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // Function to remove item from cart
  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Rendering JSX
  return (
    <Router>
      <div className="App">
        {/* Header component */}
        <Header toggleSidebar={toggleSidebar} />
        {/* Sidebar component */}
        <Sidebar isOpen={isOpen} />
        <Routes>
          {/* Route for home page */}
          <Route path="/" element={<HomePage />} />
          {/* Route for home page (alternate path) */}
          <Route path="/HomePage" element={<HomePage />} />
          {/* Route for products page */}
          <Route path="/Products" element={<Container addToCart={addToCart} />} />
          {/* Route for jobs page */}
          <Route path="/Jobs" element={<Jobs />} />
          {/* Route for cart page */}
          <Route path="/Cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
          {/* Route for services page */}
          <Route path="/Services" element={<ServicesPage />} />
        </Routes>
        {/* Footer component */}
        <Footer />
      </div>
    </Router>
  );
}

// Exporting the App component
export default App;
