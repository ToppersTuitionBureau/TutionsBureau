import React from "react";
import logo from "../assets/logo/Logo 2 redCropped.jpg";

// Logo 2 cropped
const Footer = () => {
  return (
    <>
      <footer className="bg-white text-black py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <img src={logo} alt="Logo" />

          {/* About Section */}
          <div>
            <h3 className="text-lg mb-4 font-semibold text-[#e63946]">
              About Us
            </h3>
            <p className="text-black-400 text-sm leading-relaxed">
              Empowering students with quality education through personalized
              tutoring services. Connect with expert tutors for academic
              success.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4 px-6 font-semibold text-[#e63946]">
              Quick Links
            </h3>

            <ul className="space-y-2  px-7 text-sm">
              <li>
                <a
                  className="text-black-400 hover:text-red-500 transition-colors"
                  href="/home"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-black-400 hover:text-red-500 transition-colors"
                  href="/findmentor"
                >
                  Find A Mentor
                </a>
              </li>
              <li>
                <a
                  className="text-black-400 hover:text-red-500 transition-colors"
                  href="/apply"
                >
                  Be A Mentor
                </a>
              </li>
              <li>
                <a
                  className="text-black-400 hover:text-red-500 transition-colors"
                  href="/contactus"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg mb-4 font-semibold text-[#e63946]">
              Contact info
            </h3>

            <p className="text-black-400 mb-2 text-sm">
              Email: info@tutionBuearu.com
            </p>
            <p className="text-black-400 mb-2 text-sm">
              Phone: +1 (123) 456-7890
            </p>
            <p className="text-black-400 mb-2 text-sm">
              Address: 123 Education Lane, City, Country
            </p>
          </div>
        </div>
        {/* Footer bottom */}
        <div>
          <p className="mt-8 pt-8 border-t border-gray-300 text-center text-black-400 text-sm">
            &copy, 2025 Tuition Bureau. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
