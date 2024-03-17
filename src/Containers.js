import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jsonData from './data.json'; // Importing JSON data
import './container.css'; // Importing CSS styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importing FontAwesomeIcon
import { faStar, faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // Importing solid icons
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'; // Importing regular icons

// Define the Container component
function Container({ addToCart }) {
  const [data, setData] = useState([]); // State for data
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Fetch data from JSON file on component mount
  useEffect(() => {
    setData(jsonData);
  }, []);

  // Function to handle adding items to cart and navigate to cart page
  const handleAddToCart = (item) => {
    addToCart(item);
    navigate('/Cart'); // Redirect to cart page after adding to cart
  };

  // Render JSX
  return (
    <div className="products">
      <div className="container">
        <h1 className="lg-title">Basic Offers</h1>
        <p className="text-light">Note! Due to United States Copyright Laws We do not provide any games or links to download games and ROMs to your system. We only offer Jailbreak products.</p>
        <div className="product-items">
          {/* Map through data and render product items */}
          {data.map(item => (
            <div className="product" key={item.id}>
              <div className="product-content">
                <div className="product-img">
                  <img src={item.icon} alt="product image" />
                </div>
                <div className="product-btns">
                  {/* Button to add item to cart */}
                  <button className="btn-buy" onClick={() => handleAddToCart(item)}> 
                    Add To Cart
                    <span><FontAwesomeIcon icon={faShoppingCart} /></span>
                  </button>
                </div>
              </div>

              <div className="product-info">
                <div className="product-info-top">
                  <h2 className="sm-title">{item.name}</h2>
                  {/* Display star rating */}
                  <div className="rating">
                    <span><FontAwesomeIcon icon={faStar} /></span>
                    <span><FontAwesomeIcon icon={faStar} /></span>
                    <span><FontAwesomeIcon icon={faStar} /></span>
                    <span><FontAwesomeIcon icon={faStar} /></span>
                    <span><FontAwesomeIcon icon={farStar} /></span>
                  </div>
                </div>
                <a href="#" className="product-name">{item.name}</a>
                <p className="product-price">${item.price}</p>
              </div>

              <div className="off-info">
                <h2 className="sm-title">{item.shipping}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Export the Container component
export default Container;
