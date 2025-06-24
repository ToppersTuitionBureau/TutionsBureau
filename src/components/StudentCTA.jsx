function StudentCTA() {
  const student_illus =
    "https://res.cloudinary.com/dywebgn1p/image/upload/v1750669228/Online_learning-amico_woej3d.svg";
  return (
     <section className="flex justify-center px-4 py-12">
      <div className="max-w-6xl w-full bg-white border border-gray-300 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row items-stretch">
        
        {/* Illustration */}
        <div className="md:w-1/2 bg-white flex justify-center items-center p-6">
          <img
            src={student_illus}
            alt="Student Illustration"
            className="w-full max-w-md"
          />
        </div>

        {/* Content */}
        <div className="md:w-1/2 bg-white p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Find Your <span className="text-[#e63946]">Perfect Mentor</span>
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Discover mentors who match your learning style, pace, and goals.
            Get expert help anytime you need it.
          </p>
          <ul className="list-disc list-inside text-gray-800 font-semibold text-lg mb-6">
            <li>Browse expert mentors in every subject</li>
            <li>Learn 1-on-1 at your convenience</li>
            <li>Get help with school, exams, or projects</li>
            <li>Pay only for sessions you book</li>
          </ul>
          <button className="bg-[#e63946] hover:bg-[#d22e3f] text-white font-semibold py-3 px-6 rounded-lg w-full sm:w-auto text-lg transition duration-300">
            Find a Mentor →
          </button>
        </div>
      </div>
    </section>
  );
}

export default StudentCTA;
