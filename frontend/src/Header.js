import React from 'react';
import { motion } from 'framer-motion';
import HeaderLinks from './HeaderLinks';
import Logo from './assets/mgilogo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <motion.nav
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
      // To change the color, replace 'bg-light' with another Bootstrap background color class, e.g., 'bg-primary'
      className="navbar navbar-expand-lg navbar-light bg-primary" 
    >
      <div className="container-fluid d-flex justify-content-between">
        {/* Increased margin to the left of the Logo */}
        <Link to="/" className="navbar-brand d-flex align-items-center" style={{ marginLeft: '20px' }}>
          <img src={Logo} alt="Logo" style={{ height: '50px', marginRight: '10px' }} />
          {/* Place "My Website" within an h1 for semantic HTML */}
          <h1 className="mb-0" style={{ fontSize: '1.25rem' }}>My Website</h1>
        </Link>
        {/* Increased margin to the right of the Menu */}
        <div style={{ marginRight: '70px' }}>
          <HeaderLinks />
        </div>
      </div>
    </motion.nav>
  );
}

export default Header;
