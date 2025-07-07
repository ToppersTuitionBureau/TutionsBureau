import React, { useState } from "react";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import TrialBookingModal from "./TrialBookingModal"; // ✅ Import the modal

const MentorCard = ({ mentor }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // ✅ Modal state

  return (
    <>
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 flex flex-col justify-between">
        {/* Top - Image & Info */}
        <div>
          <div className="flex gap-4 items-center mb-4">
            <img
              src={mentor.image}
              alt={mentor.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{mentor.name}</h3>
              <p className="flex items-center text-sm text-gray-500">
                <FaMapMarkerAlt className="mr-1" /> {mentor.location}
              </p>
              <p className="text-sm text-gray-600">
                {mentor.experience} years experience
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-2">
            Languages: {mentor.languages.join(", ")}
          </p>

          <div className="flex flex-wrap gap-2 mb-3">
            {mentor.subjects.map((subj, i) => (
              <span
                key={i}
                className="text-xs bg-[#ffecee] text-[#e63946] px-3 py-1 rounded-full"
              >
                {subj}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom - Price, Rating & Button */}
        <div className="mt-4 flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <span className="text-[#e63946] font-bold">₹{mentor.price} /month</span>
            <span className="flex items-center text-sm text-yellow-500">
              <FaStar className="mr-1" /> {mentor.rating}
            </span>
          </div>

          {/* ✅ Trigger modal */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full mt-2 bg-[#e63946] hover:bg-[#d9313d] text-white text-sm font-medium py-2 px-4 rounded-lg transition"
          >
            Book a Free Trial
          </button>
        </div>
      </div>

      {/* ✅ Modal rendering */}
      {isModalOpen && (
        <TrialBookingModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          mentorName={mentor.name}
        />
      )}
    </>
  );
};

export default MentorCard;
