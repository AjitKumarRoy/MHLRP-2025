import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Text } from '@mantine/core';
import logo from '../assets/mhlrp-logo.png';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const mobileMenuRef = useRef(null);
  const fullTitle = "MHLRP 2025";
  const [animatedTitle, setAnimatedTitle] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        closeMobileMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Prevent background scroll when menu is open (mobile)
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  // Scroll hide/show behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false); // hide on scroll down
      } else {
        setShowNavbar(true); // show on scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);


  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex < fullTitle.length) {
        setAnimatedTitle((prevTitle) => prevTitle + fullTitle[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typingInterval);
        // Wait for a moment and then restart the animation
        setTimeout(() => {
          setAnimatedTitle("");
          setCurrentIndex(0);
        }, 1500); // Adjust the delay before retyping (in milliseconds)
      }
    }, 150); // Adjust typing speed here

    return () => clearInterval(typingInterval);
  }, [fullTitle, currentIndex]);

  return (
    <nav
      className={`bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg py-2 px-4 pr-6
 md:px-8 fixed w-full z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-full flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center font-semibold text-xl text-white">
          <Link
            to="/"
            className="flex items-center hover:opacity-80 transition-opacity duration-300"
            onClick={closeMobileMenu}
          >
            <img
              src= {logo}
              alt="MHLRP-2025 Logo"
              className="mr-2"
              style={{ width: "70px", height: "auto" }}
            />
          <Text style={{ width: '160px', display: 'inline-block' }}>{animatedTitle}<span className="blinking-cursor">|</span></Text>
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden xl:flex space-x-6 text-white font-medium items-center">
          {[
            ["About", "/about"],
            ["Important Dates", "/important-dates"],
            ["Call for Papers", "/call-for-papers"],
            ["Paper Submission", "/paper-submission"],
            ["Committee", "/committee"],
            ["Speakers", "/speakers"],
            ["Registration", "/registration"],
            ["Program Schedule", "/program-schedule"],
            ["Venue", "/venue"],
            ["Contact", "/contact"],
          
          ].map(([label, path]) => (
            <li key={path}>
              <Link
                to={path}
                className={`hover:text-indigo-200 transition-colors duration-300 ${
                  location.pathname === path ? "text-indigo-200" : ""
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/registration"
              className="bg-white text-indigo-600 py-2 px-4 rounded-full font-semibold hover:bg-indigo-100 transition-colors duration-300 shadow-md whitespace-nowrap"
            >
              Register Now
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="xl:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white cursor-pointer focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        ref={mobileMenuRef}
        className={`absolute top-full left-0 w-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 shadow-lg transition-all duration-300 ease-in-out transform origin-top z-40 ${
          isMobileMenuOpen
            ? "scale-y-100 opacity-100 translate-y-0"
            : "scale-y-0 opacity-0 -translate-y-4 pointer-events-none"
        } xl:hidden`}
      >
        <ul className="py-4 flex flex-col items-start space-y-4 px-8 text-white font-medium">
          {[
            ["About", "/about"],
            ["Important Dates", "/important-dates"],
            ["Call for Papers", "/call-for-papers"],
            ["Paper Submission", "/paper-submission"],
            ["Committee", "/committee"],
            ["Speakers", "/speakers"],
            ["Registration", "/registration"],
            ["Program Schedule", "/program-schedule"],
            ["Venue", "/venue"],
            ["Contact", "/contact"],
          ].map(([label, path]) => (
            <li key={path}>
              <Link
                to={path}
                className={`hover:text-indigo-200 transition-colors duration-300 ${
                  location.pathname === path ? "text-indigo-200" : ""
                }`}
                onClick={closeMobileMenu}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/registration"
              onClick={closeMobileMenu}
              className="bg-white text-indigo-600 py-2 px-4 rounded-full font-semibold hover:bg-indigo-100 transition-colors duration-300 shadow-md"
            >
              Register Now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
