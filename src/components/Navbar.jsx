import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Handle scroll for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Volunteer", path: "/volunteer" },
    { name: "Events", path: "/events" },
    { name: "Blog", path: "/blog" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <Motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isSticky
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className={`text-2xl font-bold ${
            isSticky ? "text-primary" : "text-white"
          }`}
        >
    <div className="">
       <img 
  src={isSticky ? "/logob.png" : "/logow.png"} 
  alt="Logo" 
  className="w-40 h-12 object-contain" 
/>
    </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">

          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`font-medium transition ${
                isSticky
                  ? "text-dark hover:text-primary"
                  : "text-white hover:text-primary"
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* Donate Button */}
          <Link
            to="/donate"
          >
<Button isSticky={isSticky}/>
          </Link>

        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden text-2xl ${
            isSticky ? "text-dark" : "text-white"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <Motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="flex flex-col px-6 py-4 space-y-4">

            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-dark font-medium hover:text-primary"
              >
                {item.name}
              </Link>
            ))}

            <Link
              to="/donate"
              onClick={() => setIsOpen(false)}
            >
              <Button isSticky={isSticky}/>
            </Link>

          </div>
        </Motion.div>
      )}

    </Motion.header>
  );
};

export default Navbar;

