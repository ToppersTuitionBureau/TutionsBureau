import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { useEffect, useRef } from "react";
import logoHead from "../assets/logo/Logo 2 redCropped.jpg"; 

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Find A Mentor", to: "/findmentor" },
  { name: "Be A Mentor", to: "/apply" },
  { name: "Contact Us", to: "/contact" },
];

const Sidebar = ({ isOpen, setIsOpen }) => {
  const sidebarRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, setIsOpen]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300" />
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        {/* Logo + Close Button */}
        <div className="p-4 border-b flex justify-between items-center">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img src={logoHead} alt="Tutions Bureau Logo" className="h-12" />
          </Link>
          <FaTimes
            className="cursor-pointer text-[#e63946] text-xl"
            onClick={() => setIsOpen(false)}
          />
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-4 p-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="relative group text-[#e63946] font-semibold rounded px-3 py-2"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#e63946] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
