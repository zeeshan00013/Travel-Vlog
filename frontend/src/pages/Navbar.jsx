import { useState } from "react";
import logo from "../images/Frame 1.svg";
import { TiThMenuOutline } from "react-icons/ti";
import { IoMdClose } from "react-icons/io"; // Import close icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="py-5 flex justify-between px-5 lg:px-20 items-center">
        {/* Menu button for mobile */}
        <div className="lg:hidden">
          <TiThMenuOutline
            size={30}
            className="text-purpple1"
            onClick={toggleMenu}
          />
        </div>

        {/* Logo */}
        <div>
          <img src={logo} alt="Logo" />
        </div>

        {/* Navigation Links for large screens */}
        <div className="hidden lg:block">
          <ul className="flex space-x-10 text-gray-600 font-semibold">
            <li>Home</li>
            <li>Discover</li>
            <li>Special Deals</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Buttons for medium and large screens */}
        <div className="hidden md:flex md:space-x-4 lg:space-x-4">
          <button className="border shadow py-3 px-5 rounded-3xl text-sm font-semibold">
            Log In
          </button>
          <button className="bg-purpple1 py-3 px-5 rounded-3xl text-white text-sm font-semibold">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Dropdown Menu for mobile */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md">
          {/* Close button */}
          <div className="flex justify-end p-4">
            <IoMdClose
              size={30}
              className="text-purpple1 cursor-pointer"
              onClick={toggleMenu}
            />
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col items-center space-y-4 text-gray-600 font-semibold pb-4">
            <li className="border-b-2 w-52 text-center py-3" onClick={toggleMenu}>Home</li>
            <li className="border-b-2 w-52 text-center py-3" onClick={toggleMenu}>Discover</li>
            <li className="border-b-2 w-52 text-center py-3" onClick={toggleMenu}>Special Deals</li>
            <li className="border-b-2 w-52 text-center py-3" onClick={toggleMenu}>Contact</li>
          </ul>

          {/* Buttons */}
          <div className="flex flex-col items-center space-y-4 pb-4">
            <button className="border shadow py-3 px-5 rounded-3xl text-sm font-semibold">
              Log In
            </button>
            <button className="bg-purpple1 py-3 px-5 rounded-3xl text-white text-sm font-semibold">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
