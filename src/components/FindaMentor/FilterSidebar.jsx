import React, { useState, useEffect } from "react";
import mentors from "../../data/mentors";

const FilterSidebar = ({ onFilter }) => {
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const allSubjects = mentors.flatMap((mentor) => mentor.subjects || []);
    const uniqueSubjects = Array.from(new Set(allSubjects));
    setSubjects(uniqueSubjects);
  }, []);

  const toggleSubject = (subject) => {
    setSelectedSubjects((prev) =>
      prev.includes(subject)
        ? prev.filter((s) => s !== subject)
        : [...prev, subject]
    );
  };

  const resetFilters = () => {
    setSelectedSubjects([]);
    onFilter({ subjects: [] });
  };

  const applyFilters = () => {
    onFilter({ subjects: selectedSubjects });
  };

  return (
    <div className="w-72 bg-white border-r border-gray-200 p-6 h-full">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Filters</h2>

      {/* Subject Pills */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Subjects
        </label>
        <div className="flex flex-wrap gap-2">
          {subjects.map((subj, index) => (
            <button
              key={index}
              onClick={() => toggleSubject(subj)}
              className={`px-3 py-1 rounded-full text-sm border transition ${
                selectedSubjects.includes(subj)
                  ? "bg-[#ffecee] text-[#e63946] border-[#e63946]"
                  : "bg-gray-100 text-gray-700 border-gray-300"
              }`}
            >
              {subj}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-2">
        <button
          className="flex-1 bg-[#e63946] hover:bg-[#d9313d] text-white py-2 rounded-lg transition shadow-md font-semibold"
          onClick={applyFilters}
        >
          Apply Filters
        </button>
        <button
          className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg transition shadow-md font-semibold"
          onClick={resetFilters}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;
