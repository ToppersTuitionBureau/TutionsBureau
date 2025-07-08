import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import TrialBookingModal from "../FindaMentor/TrialBookingModal";

const TopMentorCard = () => {
  const [showModal, setShowModal] = useState(false);
  const mentorName = "Zain Shaikh";

  const starBadge = "https://res.cloudinary.com/dywebgn1p/image/upload/v1750689583/star-mentor-medal-badge_rdgmkg.webp";
  const zain = "https://res.cloudinary.com/dywebgn1p/image/upload/v1750690644/Zain_Draft_twepec.jpg";

  return (
    <section className="px-4 py-12 bg-gradient-to-br from-[#fff5ea] via-[#fffdf8] to-[#fff5ea]">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-2">
        Meet Our <span className="text-[#e63946]">Top-Rated Mentor</span> 🌟
      </h2>
      <p className="text-center text-gray-600 text-base mb-8 max-w-2xl mx-auto">
        🎯 7+ years of experience. 400+ success stories. Book a free trial and experience the difference.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center"
      >
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-start bg-[#fff9ed] border border-yellow-200 shadow-2xl rounded-3xl overflow-hidden p-6 md:p-10">
          {/* Image & Badge */}
          <div className="relative w-full md:w-1/3 max-w-sm">
            <img
              src={zain}
              alt="Mentor"
              className="rounded-2xl w-full h-full object-cover shadow-md"
            />
            <img
              src={starBadge}
              alt="Top Mentor Badge"
              className="absolute top-[-10px] right-[-10px] w-16 h-20"
            />
          </div>

          {/* Info */}
          <div className="md:ml-10 mt-6 md:mt-0 w-full md:w-2/3">
            <div className="flex items-center flex-wrap gap-4">
              <h2 className="text-3xl md:text-4xl font-extrabold">{mentorName}</h2>
              <span className="text-sm px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full font-medium">
                7+ Years Experience
              </span>
              <span className="text-sm px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-medium">
                ⭐ 5.0 (420+ mentees)
              </span>
            </div>

            <div className="flex items-center text-gray-600 mt-2 space-x-4 text-sm">
              <span className="flex items-center">
                <FaMapMarkerAlt className="mr-1" /> Mumbai, India
              </span>
              <span>Languages: English, Hindi</span>
            </div>

            <p className="text-gray-700 mt-4 text-base leading-relaxed">
              I will carve out a personalized roadmap for your goals. If you follow it with consistency and dedication, I will ensure you get there.
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {[
                "System Design",
                "DSA",
                "Java",
                "Java Springboot",
                "APIs",
                "Distributed Systems",
                "AWS",
              ].map((skill, i) => (
                <span
                  key={i}
                  className="bg-white border border-gray-300 text-sm font-medium px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-col md:flex-row items-start md:items-center gap-4">
              <button
                onClick={() => setShowModal(true)}
                className="bg-[#e63946] hover:bg-[#d42f3f] text-white font-semibold px-6 py-3 rounded-lg text-lg transition"
              >
                Book a Free Trial ✨
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <TrialBookingModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        mentorName={mentorName}
      />
    </section>
  );
};

export default TopMentorCard;
