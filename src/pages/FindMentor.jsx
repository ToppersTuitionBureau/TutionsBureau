import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FilterSidebar from "../components/FindaMentor/FilterSidebar";
import MentorList from "../components/FindaMentor/MentorList";
import MobileFilterDrawer from "../components/FindaMentor/MobileFilterDrawer"; // You must create this
import mentorData from "../data/mentors";

const FindMentor = () => {
  const [filters, setFilters] = useState({ subjects: [] });
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Mobile/Tablet Filter Button */}
      <div className="md:hidden px-4 py-3 bg-white sticky top-0 z-40 border-b border-gray-200">
        <button
          onClick={() => setShowMobileFilter(true)}
          className="bg-[#e63946] text-white px-4 py-2 rounded-full text-sm font-semibold shadow"
        >
          Filters
        </button>
      </div>

      <main className="flex flex-1 relative">
        {/* Desktop Sidebar */}
        <div className="hidden md:block">
          <FilterSidebar onFilter={setFilters} />
        </div>

        {/* Mobile Filter Drawer */}
        {showMobileFilter && (
          <MobileFilterDrawer
            onClose={() => setShowMobileFilter(false)}
            onFilter={setFilters}
          />
        )}

        {/* Mentor List */}
        <div className="flex-1 p-4 sm:p-6 bg-gray-50">
          <MentorList filters={filters} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FindMentor;
