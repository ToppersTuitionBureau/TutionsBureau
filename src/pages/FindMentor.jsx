// import React from 'react'
// import Header from '../components/Header'
// import Footer from '../components/Footer'
// import FilterSidebar from '../components/FilterSidebar'

// function FindMentor() {
//   return (
//     <div><Header />
//     <FilterSidebar />
//     <Footer /> 
//     </div>

//   )
// }

// export default FindMentor

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FilterSidebar from '../components/FilterSidebar';

function FindMentor() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Header */}
      <Header />

      {/* Middle Section */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <FilterSidebar />

        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-50">
          <h1 className="text-2xl font-semibold mb-4">Available Mentors</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-4 shadow rounded">Mentor 1</div>
            <div className="bg-white p-4 shadow rounded">Mentor 2</div>
            <div className="bg-white p-4 shadow rounded">Mentor 3</div>
          </div>
        </main>
      </div>

      {/* Bottom Footer */}
      <Footer />
    </div>
  );
}

export default FindMentor;

