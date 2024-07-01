import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import classNames from "classnames";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleisMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 text-white py-4 px-6 md:px-10 flex flex-col md:flex-row md:items-center justify-between">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          InmoSmart
        </Link>

        {isMenuOpen ? (
          <FaTimes
            onClick={handleisMenuOpen}
            className="flex md:hidden cursor-pointer"
          />
        ) : (
          <FaBars
            onClick={handleisMenuOpen}
            className="flex md:hidden cursor-pointer"
          />
        )}
      </div>
      <nav
        className={classNames(
          "md:flex flex-col mt-4 gap-3 md:mt-0 md:flex-row items-center md:space-x-6 ",
          { hidden: !isMenuOpen, flex: isMenuOpen }
        )}
      >
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
        <Button className="hidden md:inline-flex">
          <Link to="/auth/login" className="hover:text-gray-400">
            Log in
          </Link>
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
