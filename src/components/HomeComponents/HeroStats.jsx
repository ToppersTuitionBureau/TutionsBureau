import React from "react";
import { FaVideo, FaUsers, FaStar, FaChalkboardTeacher } from "react-icons/fa";

const HeroStats = () => {
  const bg_video =
    "https://res.cloudinary.com/dywebgn1p/video/upload/v1750596619/63328-506377472_small_rcs8rg.mp4";

  return (
    <div className="stats-main relative w-full h-[750px] overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src={bg_video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold">Learn from the Best.</h1>
        <p className="text-xl md:text-2xl mt-3 max-w-2xl">
          Real results. Real mentorship. Get matched with experienced mentors across academics, exams, careers, and life skills.
        </p>

        {/* Stat cards */}
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          <StatCard
            icon={<FaVideo size={32} />}
            stat="10K+"
            label="Sessions Booked"
          />
          <StatCard
            icon={<FaUsers size={32} />}
            stat="2K+"
            label="Happy Students"
          />
          <StatCard
            icon={<FaStar size={32} />}
            stat="4.8"
            label="Average Rating"
          />
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, stat, label }) => (
  <div className="bg-white text-[#e63946] px-10 py-8 rounded-xl flex flex-col items-center shadow-lg w-64 transition transform hover:scale-105">
    <div className="mb-2">{icon}</div>
    <div className="text-3xl font-extrabold">{stat}</div>
    <div className="text-base font-medium text-center mt-1">{label}</div>
  </div>
);

export default HeroStats;
