import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function HeaderLinks() {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  const containerVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.95,
      transition: { staggerChildren: 0.1, staggerDirection: -1 } // Use staggerDirection for reverse staggering
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { staggerChildren: 0.1 }
    },
    exit: { 
      opacity: 0, 
      transition: { staggerChildren: 0.1, staggerDirection: -1 } // Apply reverse staggering on exit
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 } // Move up and fade out on exit
  };

  return (
    <div className="dropdown">
      <button className="btn btn-secondary" type="button" onClick={() => setIsOpen(!isOpen)}>
        Menu
      </button>
      <motion.div className="dropdown-menu show"
        variants={containerVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "exit"} // Toggle between 'visible' and 'exit' based on isOpen
        // No need to explicitly set 'exit' here since it's handled by the toggle above
      >
        <motion.div variants={itemVariants} style={{ padding: '0 10px' }}><Link to="/" className="dropdown-item">Home</Link></motion.div>
        <motion.div variants={itemVariants} style={{ padding: '0 10px' }}><Link to="/about" className="dropdown-item">About</Link></motion.div>
        <motion.div variants={itemVariants} style={{ padding: '0 10px' }}><Link to="/contact" className="dropdown-item">Contact</Link></motion.div>
        <motion.div variants={itemVariants} style={{ padding: '0 10px' }}><Link to="/signup" className="dropdown-item">Sign Up</Link></motion.div>
      </motion.div>
    </div>
  );
}

export default HeaderLinks; 