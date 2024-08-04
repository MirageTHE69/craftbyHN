import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Logo from "../images/logo.png"

const Navbar = () => {
  return (
    <nav className="bg-white  ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex  justify-between  h-16  flex-row md:flex-row-reverse md:mx-20 ">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0">
              <img className=" h-36 w-36 mt-5" src={Logo} alt="Logo" />
            </a>
          </div>
          <div className="flex items-center space-x-4 mr-5">
            <a href="https://facebook.com" className="text-black hover:text-gray-700">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="https://twitter.com" className="text-black hover:text-gray-700">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="https://instagram.com" className="text-black hover:text-gray-700">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
