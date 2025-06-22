import academic from "../assets/images/Academic.webp";
import exam from "../assets/images/Exam.webp";
import guidance from "../assets/images/Guidance.webp";
import softskills from "../assets/images/softSkills.webp";

export default function LearningCategories() {
  const categories = [
    {
      title: "Academic Help",
      image: academic, // Replace with your generated image path
      description:
        "Personalized tutoring in school subjects like Math, Science, English and more — customized for your grade, board, and pace.",
    },
    {
      title: "Exam Prep",
      image: exam,
      description:
        "Prepare confidently for school exams, entrance tests, and Olympiads with experienced mentors who know what it takes to succeed.",
    },
    {
      title: "Career Guidance",
      image: guidance,
      description:
        "Get expert help with stream selection, resume building, interview prep, and future planning — tailored to your goals.",
    },
    {
      title: "Soft Skills",
      image: softskills,
      description:
        "Develop communication, public speaking, and leadership skills through personalized coaching for school and life.",
    },
  ];
  return (
    <section className="categories-section py-16 bg-[#e63946] px-4 sm:px-8">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold text-white">
          Find the Right Mentor for Your Goals
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold text-black mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700 font-poppins">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
