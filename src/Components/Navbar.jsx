import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LuSun } from "react-icons/lu";
import { FaMoon } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { CgMenuLeftAlt } from "react-icons/cg";
import { RiCloseLargeFill } from "react-icons/ri";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };


  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";  // Disable scrolling
    } else {
      document.body.style.overflow = "auto";   // Enable scrolling
    }

    // Cleanup when component unmounts or menu is toggled off
    return () => {
      document.body.style.overflow = "auto";   // Ensure scrolling is enabled when Navbar is unmounted
    };
  }, [showMenu]);

  return (
    <nav className="navbar flex justify-between items-center bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-600 h-16 px-2 relative">
      <div className="logo text-2xl font-semibold text-black dark:text-gray-200">
        FoodFiesta
      </div>
      <ul
        className={`nav-links bg-white dark:bg-gray-800 shadow-lg 
    absolute right-0 top-16 w-[50%] 
    ${showMenu ? "translate-x-[0%]" : "translate-x-[100%]"} 
    duration-300 ease-in-out h-[100vh] z-50 py-4 gap-10 flex flex-col items-center 
    lg:static lg:flex-row lg:w-auto lg:h-auto lg:shadow-none lg:translate-x-0 lg:transition-none overflow-hidden`}
    style={{overflow: 'hidden'}}
      >
        <li>
          <Link className="text-black dark:text-gray-300">Home</Link>
        </li>
        <li>
          <Link className="text-black dark:text-gray-300">About</Link>
        </li>
        <li>
          <Link className="text-black dark:text-gray-300">Menu</Link>
        </li>
        <li>
          <Link className="text-black dark:text-gray-300">Contact</Link>
        </li>
      </ul>

      <div className="toggle-button switch-light flex items-center gap-3">
        <button onClick={toggleTheme}>
          {theme === "light" ? (
            <FaMoon className="text-gray-700 text-xl cursor-pointer" />
          ) : (
            <LuSun className="text-yellow-300 text-2xl cursor-pointer" />
          )}
        </button>
        <IoMdCart className="text-2xl cursor-pointer text-black dark:text-white" />{" "}
        {/* cart icon */}
        <button onClick={handleToggleMenu}>
          {showMenu ? (
             <RiCloseLargeFill className="text-2xl text-black dark:text-white" />
          ) : (
           
            <CgMenuLeftAlt className="lg:hidden text-2xl text-black dark:text-white" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
