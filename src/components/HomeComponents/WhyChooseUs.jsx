import {
  FaUserCheck,
  FaFilter,
  FaCalendarCheck,
  FaHandshake,
} from "react-icons/fa";
import { BsArrowRightSquareFill } from "react-icons/bs";


const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaUserCheck className="text-5xl text-[#e63946]" />,
      title: "Verified Tutors",
      points: [
        "Qualified & experienced",
        "Subject & level specialization",
        "Rated by students",
      ],
    },
    {
      icon: <FaFilter className="text-5xl text-[#e63946]" />,
      title: "Smart Matching",
      points: [
        "Filter by subject",
        "Fast tutor recommendations",
        "Tailored search experience",
      ],
    },
    {
      icon: <FaCalendarCheck className="text-5xl text-[#e63946]" />,
      title: "Simple Booking",
      points: [
        "One-click booking",
        "Flexible availability",
        "Direct contact with tutor",
      ],
    },
    {
      icon: <FaHandshake className="text-5xl text-[#e63946]" />,
      title: "Transparent Pricing",
      points: [
        "Affordable",
        "Fair pricing model",
        "No hidden or surprise costs",
      ],
    },
  ];

  return (
    <section className="whyChooseUs-section bg-white py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto text-left mb-12">
        <h2 className="text-3xl font-bold">
          Why Choose <span className="text-[#]">Tutions Bureau</span>?
        </h2>
        <p className="text-gray-600 text-lg font-semibold max-w-7xl mx-auto mt-2 font-poppins">
          We help students connect with top-rated tutors tailored to their goals
          — quickly, easily, and for free.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className="whyChooseUs-card text-left p-6 bg-[#ffecee] rounded-lg shadow hover:shadow-lg transition duration-300"
          >
            <div className="mb-4 flex justify-start">{item.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <ul className="text-b text-gray-600 space-y-1 font-poppins">
              {item.points.map((point, idx) => (
                <li key={idx} className="flex items-center justify-start gap-3">
                  <span className="text-[#e63946] text-lg"><BsArrowRightSquareFill/></span> {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
