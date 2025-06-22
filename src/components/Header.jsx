import React, { useState } from "react";
import logoHead from "../assets/logo/Logo 2 redCropped.jpg";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Find A Mentor", to: "/findmentor" },
  { name: "Be A Mentor", to: "/apply" },
  { name: "Contact Us", to: "/contact" },
];

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="w-full h-24 bg-white px-8 flex justify-between items-center shadow">
      <Link to="/">
        <img src={logoHead} alt="Logo" className="h-20" />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-6">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.to;
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`whitespace-nowrap rounded-md py-2 px-4 font-bold transition ${
                isActive
                  ? "bg-[#e63946] text-white"
                  : "text-[#e63946] hover:bg-[#ffecee]"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>

      {/* Hamburger for Mobile */}
      <div className="md:hidden">
        <FaBars
          className="text-2xl text-[#e63946] cursor-pointer"
          onClick={() => setSidebarOpen(true)}
        />
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
    </header>
  );
};

export default Header;
