import React, { useEffect, useState } from "react";
import {
  FaBars,
  FaCalendarAlt,
  FaHandHoldingHeart,
  FaPray,
  FaTimes,
} from "react-icons/fa";
import { FiHome, FiUsers } from "react-icons/fi";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { to: "/", icon: <FiHome />, label: "Home" },
    { to: "/donate", icon: <FaHandHoldingHeart />, label: "Donate" },
    {
      to: "/directory",
      icon: <FiUsers />,
      label: "Directory",
      special: false,
    },
    { to: "/prayer", icon: <FaPray />, label: "Prayer" },
    { to: "/events", icon: <FaCalendarAlt />, label: "Events" },
  ];

  // Scroll effect
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolled(window.scrollY > 50);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-md 
        bg-base
      `}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to={"/"}>
            <div className="flex items-center gap-3 cursor-pointer">
              <img
                src="/EgliseLogo.png"
                alt="logo"
                className="w-12 h-12 object-contain drop-shadow-md"
              />
              <div className="hidden lg:block">
                <h2
                  className={` font-bold text-lg leading-tight   ${scrolled ? "text-base" : "text-primary"}`}
                >
                  St. Mary's
                </h2>
                <p
                  className={`${scrolled ? "text-base" : "text-primary"} text-xs`}
                >
                  Parish
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-6 font-semibold">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300
                  
                  ${scrolled ? "text-base hover:text-primary" : "text-primary hover:text-secondary hover:scale-105"}
                    ${
                      link.special
                        ? "bg-primary text-white shadow-lg hover:bg-base hover:scale-105"
                        : ""
                    }
                    ${isActive && !link.special ? `  border-b-4 border-secondary  ${scrolled ? "text-base border-white" : ""}` : ""}
                  `
                  }
                >
                  {link.icon}
                  <span>{link.label}</span>

                  {/* Badge */}
                  {/* {link.special && (
                    <span className="ml-1 bg-secondary text-white text-[10px] px-2 py-0.5 rounded-full">
                      NEW
                    </span>
                  )} */}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-primary text-2xl p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} }
        `}
      >
        <ul
          className={`border-t border-primary/20 px-4 py-4 space-y-2 flex flex-col items-center ${scrolled ? "bg-gradient-to-b from-black/40 via-black/30 to-black/70  " : "bg-base"}`}
        >
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `flex items-center justify-center gap-3 p-3 rounded-lg transition-all duration-200 w-min
                  ${link.special ? "bg-primary text-white shadow-md" : ""}
                  ${isActive ? "border-b-2 border-secondary" : ""}
                  ${scrolled ? "text-base" : "text-primary"}
                `
                }
              >
                <span className="text-xl">{link.icon}</span>
                <span className="font-semibold">{link.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
