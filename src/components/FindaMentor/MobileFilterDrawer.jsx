import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import mentors from "../../data/mentors";

const MobileFilterDrawer = ({ onClose, onFilter }) => {
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    // Extract unique subjects
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
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-30">
      <div className="fixed left-0 top-0 bottom-0 w-4/5 max-w-xs bg-white shadow-lg p-5 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Filters</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-600 hover:text-gray-800" />
          </button>
        </div>

        {/* Subjects */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
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

        {/* Action Buttons */}
        <div className="mt-6 flex gap-2">
          <button
            className="flex-1 bg-[#e63946] text-white py-2 rounded-lg font-semibold"
            onClick={applyFilters}
          >
            Apply Filters
          </button>
          <button
            className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg font-semibold"
            onClick={resetFilters}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileFilterDrawer;
