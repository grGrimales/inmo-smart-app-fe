import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4 md:px-6">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-sm">&copy; 2024 InmoSMart. All rights reserved.</p>
        <nav className="flex items-center space-x-4">
          <Link to="/privacy-policy" className="hover:text-gray-400">
            Privacy Policy
          </Link>
          <Link to="/terms-of-service" className="hover:text-gray-400">
            Terms of Service
          </Link>
          <Link to="/contact" className="hover:text-gray-400">
            Contact Us
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
