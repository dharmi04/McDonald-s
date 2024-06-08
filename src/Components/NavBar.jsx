import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdFastfood, MdShoppingCart } from 'react-icons/md';
import logo from '../assets/Images/MCDLogo.png'

const NavBar = () => {
  return (
    <div className="flex items-center justify-between bg-red-600 p-2">
      <div className="flex items-center">
        <img
          src={logo}
          alt="McDonald's Logo"
          className="h-12"
        />
      </div>
      <div className="flex space-x-10 text-xl">
        <a href="#items" className="flex items-center text-gray-800 hover:text-yellow-600">
          <MdFastfood className="mr-1" /> Items
        </a>
        <a href="#deals" className="text-gray-800 hover:text-yellow-500">
          Deals
        </a>
        <a href="#about" className="text-gray-800 hover:text-yellow-500">
          About Us
        </a>
        <a href="#contact" className="text-gray-800 hover:text-yellow-500">
          Contact
        </a>
      </div>
      <div className="flex space-x-4">
        <button className="flex items-center bg-yellow-500 text-white px-3 py-2 rounded hover:bg-yellow-600">
          <MdShoppingCart className="mr-1" /> Order Now
        </button>
        <button className="flex items-center bg-yellow-500 text-white px-3 py-2 rounded hover:bg-yellow-600">
          <FaMapMarkerAlt className="mr-1" /> Location
        </button>
      </div>
    </div>
  );
}

export default NavBar;
