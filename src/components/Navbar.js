import { useState } from "react";
import { Link } from "react-router-dom";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import LandingPage from "./LandingPage";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav className={`p-4 flex justify-between items-center ${darkMode ? "bg-blue-900" : "bg-blue-900"}`}>

      <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
        HIV/TB Dashboard
      </h1>
      <ul className="flex space-x-6 text-gray-300">
        <li><Link to="/" className="hover:text-white">Home</Link></li>
        <li><Link to="/about" className="hover:text-white">About Us</Link></li>
        <li><Link to="/team" className="hover:text-white">Team</Link></li>
        <li><Link to="/partners" className="hover:text-white">Partners</Link></li>
        <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
      </ul>
      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 text-white rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
          Get into system
        </button>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <SunIcon className="w-6 h-6 text-white" /> : <MoonIcon className="w-6 h-6 text-white" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
