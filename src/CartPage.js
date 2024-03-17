import React from 'react';
import { useNavigate } from 'react-router-dom';
import './cart.css';

// Define the CartPage component
function CartPage({ cart, removeFromCart }) {
  const navigate = useNavigate();

  // Function to handle checkout process
  const handleCheckout = () => {
    // Calculate total price of items in the cart
    const totalPrice = cart.reduce((acc, item) => acc + parseFloat(item.price), 0);
    // Display alert with total price and message
    alert(`You have successfully ordered the items! Total price: $${totalPrice.toFixed(2)}`);
    // Navigate to home page after checkout
    navigate('/');
  };

  // Function to handle removal of item from cart
  const handleRemoveFromCart = (index) => {
    removeFromCart(index);
  };

  // Render JSX
  return (
    <div className="cart-container">
      <h2>Cart Items</h2>
      {/* Map through each item in cart and display details */}
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <img src={item.icon} alt={item.name} className="cart-item-image" />
          <div className="cart-item-info">
            {item.name} - ${item.price}
          </div>
          {/* Button to remove item from cart */}
          <button className="cart-item-remove" onClick={() => handleRemoveFromCart(index)}>Remove from Cart</button>
        </div>
      ))}
      {/* Display total price of items in cart */}
      <div className="cart-total">
        Total: ${cart.reduce((acc, item) => acc + parseFloat(item.price), 0).toFixed(2)}
      </div>
      {/* Button to proceed to checkout */}
      <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
      {/* Button to navigate back */}
      <button className="checkout-btn" onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

// Export the CartPage component
export default CartPage;
