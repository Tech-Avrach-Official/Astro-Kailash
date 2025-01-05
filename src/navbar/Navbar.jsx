import logo from "../assets/circle.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState); // Ensures correct state toggle
  };

  const closeDrawer = () => {
    setIsOpen(false); // Ensures the drawer is closed
  };

  return (
    <nav className="bg-white sticky top-0 px-5 lg:px-28 py-4 w-full flex justify-between shadow-sm shadow-zinc-800 z-10">
      <div className="w-full flex items-center md:flex md:justify-between md:gap-10 md:items-center">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Logo</h1>
        </div>

        <ul className="hidden md:flex justify-center items-center gap-10 ">
          <li>
            <Link to="/" className="text-black text-lg font-semibold">
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" className="text-black text-lg font-semibold">
              About
            </Link>
          </li>
          <li>
            <Link to="/Services" className="text-black text-lg font-semibold">
              Services
            </Link>
          </li>
          <li>
            <Link to="/ContactUs" className="text-black text-lg font-semibold">
              Contact
            </Link>
          </li>
        </ul>
        <div className="hidden pr-4 md:flex md:items-center">
          <button className="bg-[rgb(217,158,54)] px-4 py-1 rounded-2xl text-black text-center hover:bg-white">
            Login
          </button>
        </div>
      </div>
      <div>
        <button
          className="text-[rgb(217,158,54)] text-2xl md:hidden hover:text-white"
          onClick={toggleDrawer}
        >
          <RxHamburgerMenu />
        </button>
      </div>

      {/* Drawer component */}
      <div
        id="drawer-navigation"
        className={`fixed top-14 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${
          isOpen ? "-translate-x-0" : "translate-x-full"
        } bg-white w-48 `}
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <button
          type="button"
          onClick={toggleDrawer}
          aria-controls="drawer-navigation"
          className="text-gray-400 bg-transparent hover:text-[rgb(217,158,54)] rounded-lg text-xl w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center"
        >
          <IoClose />
        </button>

        <div className="mt-10 overflow-y-auto">
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                onClick={closeDrawer} // Close drawer on link click
                className="text-gray-600 text-lg"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                onClick={closeDrawer} // Close drawer on link click
                className="text-gray-600 text-lg"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/Services"
                onClick={closeDrawer} // Close drawer on link click
                className="text-gray-600 text-lg"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/ContactUs"
                onClick={closeDrawer} // Close drawer on link click
                className="text-gray-600 text-lg"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
