import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FinalMentorCTA = () => {
  return (
    <section className="bg-[#e63946] text-white py-16 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
            Ready to Inspire Young Minds?
          </h2>
          <p className="text-lg md:text-xl text-white/90">
            Join Tuitions Bureau and begin your mentorship journey today.
          </p>
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 md:mt-0"
        >
          <Link
            to="/apply"
            className="inline-block bg-white text-[#e63946] font-semibold py-3 px-6 rounded-full text-lg transition duration-300 shadow-md hover:bg-[#ffecee]"
          >
            Start Your Mentor Journey →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalMentorCTA;
