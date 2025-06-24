import React from "react";
import { FaSearch } from "react-icons/fa";

const HeroSection = () => {
  const tags = [
    "Academic",
    "Non-Academic",
    "Language Learning",
    "Competitive Exams",
    "Soft Skills"
  ];
  const heroIllustration = "https://res.cloudinary.com/dywebgn1p/image/upload/v1750756243/Webinar-bro_gpvrnz.svg";

  return (
    <section className="bg-[#fff0f1] py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-4 leading-tight">
            Find your <br />
            <span className="text-[#e63946]">Personal Tutor</span>
          </h1>
          <p className="text-gray-700 text-lg mb-6 max-w-md mx-auto md:mx-0">
            Learning had to be a better way. So we built it. <br />
            <strong className="text-black">Online & Home Tuition</strong>
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-full shadow-md flex items-center px-4 py-2 max-w-md mx-auto md:mx-0">
            <FaSearch className="text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="What do you want to learn today?"
              className="flex-grow focus:outline-none text-sm"
            />
            <button className="ml-4 bg-[#e63946] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#d42f3f] transition">
              Find Tutor
            </button>
          </div>

          {/* Category Tags */}
          <div className="flex flex-wrap gap-3 mt-6 text-sm justify-center md:justify-start">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-[#ffecee] text-[#e63946] px-4 py-1 rounded-full font-medium border border-[#e63946]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Illustration */}
        <div className="md:w-1/2">
          <img
            src={heroIllustration}
            alt="Tutor Illustration"
            className="w-full max-w-md mx-auto md:mx-0"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
