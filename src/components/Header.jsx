import React from "react";
import logoHead from "../assets/logo/Logo 2 cropped.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header w-full h-20 bg-[#F7F7F7] px-8">
        <div className="headerLeft">
          <Link to="/">
            <img src={logoHead} alt="Logo"  className="h-20"/>
          </Link>
        </div>
        <div className="headerRight">
          <div className=""><Link to="/"></Link>Home</div>
          <div><Link to="/findmentor">Find A Mentor</Link></div>
          <div><Link to="/apply">Be A Mentor</Link></div>
          <div><Link to="/contact">Contact Us</Link></div>
        </div>
      </div>
    </>
  );
};

export default Header;
