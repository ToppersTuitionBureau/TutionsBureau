import React, { useState, useEffect } from "react";
import MentorCard from "./MentorCard";
import mentorData from "../../data/mentors"; // import full data

const MentorList = ({ filters }) => {
  const [filteredMentors, setFilteredMentors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const mentorsPerPage = 6;

  useEffect(() => {
    // Apply filters here
    const result = mentorData.filter((mentor) => {
      const matchesSubject =
        filters.subjects.length === 0 ||
        filters.subjects.some((subject) => mentor.subjects.includes(subject));
      return matchesSubject;
    });

    setFilteredMentors(result);
    setCurrentPage(1); // reset page on new filters
  }, [filters]);

  const totalPages = Math.ceil(filteredMentors.length / mentorsPerPage);
  const startIndex = (currentPage - 1) * mentorsPerPage;
  const currentMentors = filteredMentors.slice(startIndex, startIndex + mentorsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#ffecee] py-6 px-4 md:px-10 text-center rounded-md mb-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
          Find Your Perfect <span className="text-[#e63946]">Mentor</span>
        </h1>
        <p className="text-gray-700 text-sm md:text-base max-w-xl mx-auto">
          Connect with experienced educators across subjects and skill levels.
        </p>
      </section>

      {/* Mentor Cards */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {currentMentors.length > 0 ? (
          currentMentors.map((mentor, idx) => (
            <MentorCard key={idx} mentor={mentor} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No mentors match your filters.
          </p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-3 mb-6">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 text-sm font-medium bg-white border rounded hover:bg-gray-100 disabled:opacity-50"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 rounded text-sm font-semibold ${
                currentPage === i + 1
                  ? "bg-[#e63946] text-white"
                  : "bg-white border text-gray-800 hover:bg-gray-100"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-sm font-medium bg-white border rounded hover:bg-gray-100 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default MentorList;
