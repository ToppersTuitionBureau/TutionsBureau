const MentorCTA = () => {
  const illustration =
    "https://res.cloudinary.com/dywebgn1p/image/upload/v1750666974/Mathematics-bro_blbc5s.svg";
  return (
    <section className="flex justify-center px-4 py-16">
      <div className="max-w-6xl w-full rounded-3xl shadow-2xl overflow-hidden border border-gray-300 flex flex-col md:flex-row">
        {/* Left Side: Illustration */}
        <div className="md:w-1/2 bg-white p-8 flex justify-center items-center">
          <img
            src={illustration}
            alt="Mentor Illustration"
            className="w-full max-w-md"
          />
        </div>

        {/* Right Side: Full background color + Content */}
        <div className="md:w-1/2 bg-[#ffecee] p-8 flex flex-col justify-center">
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            Become a <span className="text-[#e63946]">Mentor</span>
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Share your knowledge, inspire learners, and earn by helping students
            reach their goals. Join our growing network of passionate mentors.
          </p>
          <ul className="list-disc list-inside text-gray-800 mb-6 font-bold text-xl">
            <li>Connect with students who need your help</li>
            <li>Set your own schedule</li>
            <li>Get paid securely</li>
          </ul>
          <button className="bg-[#e63946] hover:bg-[#d22e3f] text-white font-semibold py-3 px-6 rounded-lg w-full sm:w-auto text-lg transition duration-300">
            Apply as a Mentor →
          </button>
        </div>
      </div>
    </section>
  );
};

export default MentorCTA;
