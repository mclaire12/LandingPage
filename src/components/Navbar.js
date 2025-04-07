import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Check if user has a theme preference in localStorage
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 p-4 transition-all duration-300 ${
      isSticky ? 'bg-blue-900 shadow-lg' : 'bg-blue-900'
    } ${darkMode ? 'dark:bg-gray-900' : ''}`}>
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          HIV/TB Dashboard
        </h1>
        <ul className="flex space-x-6 text-gray-300">
          <li>
            <button onClick={() => scrollToSection('home')} className="hover:text-white">
              Home
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('about')} className="hover:text-white">
              About Us
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('team')} className="hover:text-white">
              Team
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('partners')} className="hover:text-white">
              Partners
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('contact')} className="hover:text-white">
              Contact Us
            </button>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <Link to="/login" className="no-underline">
            <button className="px-4 py-2 text-white rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition-all duration-300">
              Get into system
            </button>
          </Link>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 text-white rounded-full hover:bg-gray-700 transition-colors duration-300"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? (
              <SunIcon className="w-6 h-6" />
            ) : (
              <MoonIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
