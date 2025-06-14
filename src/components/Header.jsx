import React from "react";
import logoHead from "../assets/logo/Logo 2 redCropped.jpg";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Find A Mentor", to: "/findmentor" },
  { name: "Be A Mentor", to: "/apply" },
  { name: "Contact Us", to: "/contact" },
];

const Header = () => {
  const location = useLocation();

  return (
    <div className="header flex justify-between items-center w-full h-24 bg-white px-8">
      <div className="headerLeft">
        <Link to="/">
          <img src={logoHead} alt="Logo" className="h-20" />
        </Link>
      </div>
      <div className="headerRight flex items-center gap-6">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.to;
          return (
            <div
              key={link.to}
              className={`cursor-pointer rounded-md py-2 px-4 font-bold ${
                isActive
                  ? "bg-[#e63946] text-white"
                  : "bg-transparent text-[#e63946] hover:bg-[#ffecee] transition"
              }`}
            >
              <Link to={link.to}>{link.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
