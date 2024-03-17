// Importing CSS styles
import './baseStyle.css';

// Define the Header component
function Header({ toggleSidebar }) {
  // Render JSX
  return (
    <header>
      {/* Header title */}
      <h1>JANKY JAIL BREAKERS</h1>
      {/* Navigation links */}
      <nav>
        <ul>
          <li><a href="/HomePage">Home</a></li>
          <li><a href="/Products">Products</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/Jobs">Careers</a></li>
        </ul>
      </nav>
      {/* Button to toggle sidebar */}
      <button className='toggle' onClick={toggleSidebar} style={{ position: 'absolute', top: 0, right: 0 }}>
        ☰
      </button>
    </header>
  );
}

// Export the Header component
export default Header;
