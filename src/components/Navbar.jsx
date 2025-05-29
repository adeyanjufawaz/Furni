import { useState } from "react";
import { FaUserCircle, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { Cart, Profile } from "../assets/icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="bg-pry flex justify-center items-center fixed left-0 top-0 w-full shadow-sm   text-white z-50">
      <nav className="w-3/4 mx-auto">
        <div className=" mx-auto p-4 flex w-full justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-medium">Furni.</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex max-w-full  justify-between items-center gap-10 px-10">
            <ul className="flex gap-4">
              <li className="hover:border-b-2 border-b-2 border-transparent font-medium text-base hover:border-b-yellow cursor-pointer">
                Home
              </li>
              <li className="hover:border-b-2 border-b-2 border-transparent font-medium text-base hover:border-b-yellow cursor-pointer">
                About Us
              </li>
              <li className="hover:border-b-2 border-b-2 border-transparent font-medium text-base hover:border-b-yellow cursor-pointer">
                Services
              </li>
              <li className="hover:border-b-2 border-b-2 border-transparent font-medium text-base hover:border-b-yellow cursor-pointer">
                Blog
              </li>
              <li className="hover:border-b-2 border-b-2 border-transparent font-medium text-base hover:border-b-yellow cursor-pointer">
                Contact Us
              </li>
            </ul>

            <div className="flex space-x-4 justify-center items-center relative  ">
              
              <Profile className="border-b-yellow cursor-pointer " />
              <Cart className="cursor-pointer" />
            </div>
          </div>

          {/* Mobile Icom */}
          <div className="md:hidden text-2xl" onClick={toggleMenu}>
            {!menuOpen && <FaBars />}
          </div>
        </div>

        {/* Mobileview Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-7/8 bg-yellow z-40 transform transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <div className="flex items-center justify-between px-4 py-4 border-b">
            <div className="text-xl font-bold">Furni</div>
            <FaTimes className="text-2xl cursor-pointer" onClick={toggleMenu} />
          </div>
          <ul className="flex flex-col space-y-4 px-4 py-6 font-medium">
            <li className="hover:text-gray-300 cursor-pointer">Home</li>
            <li className="hover:text-gray-300 cursor-pointer">About Us</li>
            <li className="hover:text-gray-300 cursor-pointer">Services</li>
            <li className="hover:text-gray-300 cursor-pointer">Blog</li>
            <li className="hover:text-gray-300 cursor-pointer">Contact Us</li>
          </ul>
          <div className="flex pl-4 space-x-4 justify-start items-center relative h-10 ">
            <Profile className="" />
            <Cart className="" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
