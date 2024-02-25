import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

function MainContent() {
  return (
    <main style={{ padding: "20px", textAlign: "center" }}>
      <h1>Main Content Area</h1>
      {/* Replace <p> with <Link> for navigation */}
      <Link to="/about" style={{ color: 'blue', textDecoration: 'underline' }}>Go to About Page</Link>
    </main>
  );
}

export default MainContent;
