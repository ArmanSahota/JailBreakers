// Importing React and CSS styles
import React from 'react';
import './homepage.css'; 

// Define the HomePage component
function HomePage() {
  // Render JSX
  return (
    <div>
      {/* Hero section */}
      <section className="hero">
        <div className="hero-container">
          {/* Left column with text */}
          <div className="column-left">
            <h1>Jail Break video Game Consoles and Phones</h1>
            <p>With 24 hour assistants</p>
            {/* Button linking to products */}
            <a href="/products"><button>Our Starting Prices For Common Devices</button></a>
          </div>
          {/* Right column with image */}
          <div className="column-right">
            <img src="Images/switch.png" alt="hero" className="hero-image-2" />
          </div>
        </div>
      </section>
    </div>
  );
}

// Export the HomePage component
export default HomePage;
