import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 py-12 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4">
        <div className="mb-8 text-center   lg:mb-0">
          <h2 className="text-3xl font-bold">Contact Me</h2>
          <p className="mt-2">Email: kabunartey@gmail.com</p>
          <p>Phone: +233 20 783 6067</p>
        </div>
        <div className="flex gap-4">
          <a
            href="#"
            className="text-3xl transition-colors duration-300 hover:text-blue-500"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="text-3xl transition-colors duration-300 hover:text-blue-500"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-3xl transition-colors duration-300 hover:text-pink-500"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; {currentYear} Kabu Nartey. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
