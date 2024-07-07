import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto flex flex-col gap-4 justify-between items-center">
        <div className="text-center  mb-8 lg:mb-0">
          <h2 className="text-3xl font-bold">Contact Me</h2>
          <p className="mt-2">Email: kabunartey@gmail.com</p>
          <p>Phone: +233 20 783 6067</p>
        </div>
        <div className="flex gap-4">
          <a
            href="#"
            className="text-3xl hover:text-blue-500 transition-colors duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="text-3xl hover:text-blue-500 transition-colors duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-3xl hover:text-pink-500 transition-colors duration-300"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; {currentYear} Kabu Nartey. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
