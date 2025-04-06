import React, { useContext, useState } from "react";
import { FaShopify, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { productcontext } from "../App";

const Navbar = () => {
  const { setSearchTerm } = useContext(productcontext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [prevRoute, setPrevRoute] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const getinput = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() !== "") {
      if (location.pathname !== "/products") {
        setPrevRoute(location.pathname); // store current route
        navigate("/products");
      }
    }

    if (value.trim() === "") {
      if (location.pathname === "/products" && prevRoute) {
        navigate(prevRoute); // go back to previous route
        setPrevRoute(null); // clear previous route
      }
    }
  };

  return (
    <div className="w-full shadow-[0_2px_6px_-1px_rgba(0,0,0,0.1)] bg-white z-50 sticky top-0">
      <div className="flex justify-between items-center px-5 md:px-10 py-4 relative">
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl text-blue-950 font-bold">
          <FaShopify className="w-8 h-8" />
          <span>ShopCart</span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex gap-6 text-blue-900 font-medium absolute left-1/2 transform -translate-x-1/2">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link to="/products" className="hover:text-blue-600">
            Products
          </Link>
          <Link to="/about" className="hover:text-blue-600">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-600">
            Contact
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex">
          <form className="flex items-center border border-gray-300 rounded px-2 py-1">
            <input
              type="text"
              placeholder="Search"
              className="outline-none text-sm"
              onChange={getinput}
            />
            <button type="submit">
              <FaSearch className="text-blue-900 ml-2" />
            </button>
          </form>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu and Search */}
      {menuOpen && (
        <div className="md:hidden px-5 pb-4 flex flex-col gap-4 text-blue-900 font-medium">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/products" onClick={() => setMenuOpen(false)}>
            Products
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>

          <form className="flex items-center border border-gray-300 rounded px-2 py-1">
            <input
              type="text"
              placeholder="Search"
              className="outline-none text-sm w-full"
              onChange={getinput}
            />
            <button type="submit">
              <FaSearch className="text-blue-900 ml-2" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Navbar;
