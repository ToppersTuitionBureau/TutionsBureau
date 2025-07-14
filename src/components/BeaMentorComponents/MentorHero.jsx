import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import mentorHero from "../assets/illustrations/mentor-hero.svg"; // Replace with your actual path

const MentorHero = () => {
    const mentorHero = "https://res.cloudinary.com/dywebgn1p/image/upload/v1750773262/Professor-pana_jkm1d1.svg";


  return (
    <section className="bg-[#ffecee] px-14 py-20 flex flex-col-reverse md:flex-row items-center justify-center gap-10">
      {/* Text Content */}
      <motion.div
        className="md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4 text-[#e63946]">
          Empower Students. <br /> Elevate Your Impact.
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Join <span className="font-semibold">Toppers Tuition Bureau</span> and mentor students on their path to success.
        </p>
        <Link
          to= "https://forms.gle/2wWJnxAgyNGdAcXb7"
          target="_blank"
          className="bg-[#e63946] hover:bg-[#d42f3f] text-white font-semibold px-6 py-3 rounded-lg transition duration-300 shadow-lg"
        >
          Apply Now →
        </Link>
      </motion.div>

      {/* Illustration */}
      <motion.div
        className="md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <img
          src={mentorHero}
          alt="Mentor Illustration"
          className="w-full max-w-md"
        />
      </motion.div>
    </section>
  );
};

export default MentorHero;