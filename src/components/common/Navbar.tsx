import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from '../ui/button';

const Navbar: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white py-4 px-6 md:px-10">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          InmoSmart
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/buy" className="hover:text-gray-400">
            Buy
          </Link>
          <Link to="/rent" className="hover:text-gray-400">
            Rent
          </Link>
          <Link to="/sell" className="hover:text-gray-400">
            Sell
          </Link>
          <Link to="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </nav>
        <Button className="hidden md:inline-flex" >
        <Link to="/auth/login" className="hover:text-gray-400">
        Log in
          </Link></Button>
      </div>
    </header>
  );
};

export default Navbar;
