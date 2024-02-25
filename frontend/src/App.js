import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; //BOOTSTRAP :^D
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './Header';
import Menu from './Menu';
import Main from './Main';
import Footer from './Footer';
import AboutPage from './AboutPage'; // Import the AboutPage component
// Import other components
import SignupForm from './SignupForm'; // Ensure you've imported SignupForm
import ContactPage from './ContactPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Main />} /> {/* Existing route for the main content */}
          <Route path="/about" element={<AboutPage />} /> {/* Route for the AboutPage */}
          <Route path="/signup" element={<SignupForm />} /> {/* Add route for the SignupForm */}
          <Route path="/contact" element={<ContactPage />} /> {/* Add route for the ContactForm */}
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
