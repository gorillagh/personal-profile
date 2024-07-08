"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/Kabu.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }

    // Add event listener for clicks outside the menu
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Function to handle clicks outside the menu
  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // Function to scroll to the footer
  const scrollToFooter = () => {
    setIsOpen(false);
    // Example: Replace with actual logic to scroll to the footer
    window.scrollTo({
      top: document.body.scrollHeight, // Scrolls to the bottom of the page
      behavior: "smooth", // Smooth scrolling
    });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        ref={navbarRef}
        className="glass fixed left-0 top-0 mx-auto flex w-full justify-center border-b border-gray-300 pt-8 lg:px-20"
      >
        <div className="container mx-auto flex items-center justify-around md:w-[90%]">
          <div className="text-lg font-bold text-white">
            <Link href="/">
              <Image
                src={logo}
                alt="Kabu Logo"
                width={300}
                height={100}
                priority
              />
            </Link>
          </div>
          {/* // eslint-disable-next-line tailwindcss/no-contradicting-classname */}
          <div className="hidden w-1/2 items-center justify-around md:flex">
            <button
              className="rounded-2xl border-2 border-primary p-4 text-sm font-semibold text-primary hover:border-white hover:bg-primary hover:text-white"
              onClick={scrollToFooter}
            >
              Download Profile
            </button>
            <button
              className="mt-4 block text-sm font-semibold text-primary hover:text-secondary lg:mt-0 lg:inline-block"
              onClick={scrollToFooter}
            >
              Get In Touch
            </button>
          </div>
          <div className="block lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-primary focus:outline-none"
            >
              <svg className="size-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.364 5.636a1 1 0 010 1.414L13.414 12l4.95 4.95a1 1 0 01-1.414 1.414L12 13.414l-4.95 4.95a1 1 0 01-1.414-1.414L10.586 12 5.636 7.05a1 1 0 011.414-1.414L12 10.586l4.95-4.95a1 1 0 011.414 0z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 5h16a1 1 0 110 2H4a1 1 0 110-2zm0 6h16a1 1 0 110 2H4a1 1 0 110-2zm0 6h16a1 1 0 110 2H4a1 1 0 110-2z"
                  />
                )}
              </svg>
            </button>
          </div>
          <div
            // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
            className={`fixed right-0 top-0 w-4/5 transform bg-white shadow-lg transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } z-50 lg:hidden`}
          >
            <div className="flex h-full flex-col items-center justify-center py-8">
              <button
                className="mb-4 rounded-2xl border-2 border-primary p-4 text-sm font-semibold text-primary hover:border-white hover:bg-primary hover:text-white"
                onClick={scrollToFooter}
              >
                Download Profile
              </button>
              <button
                className="mt-4 block text-sm font-semibold text-primary hover:text-secondary lg:mt-0 lg:inline-block"
                onClick={scrollToFooter}
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div style={{ height: `${navbarHeight}px` }} />
    </>
  );
};

export default Navbar;
