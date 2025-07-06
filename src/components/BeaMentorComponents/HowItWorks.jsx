import React from "react";
import { motion } from "framer-motion";
import { FiEdit, FiSearch, FiUserCheck } from "react-icons/fi";

const steps = [
  {
    icon: <FiEdit size={28} />,
    title: "Submit Your Application",
    desc: "Fill out our mentor application form with your details.",
  },
  {
    icon: <FiSearch size={28} />,
    title: "Get Reviewed by Our Team",
    desc: "Our team will review your profile and credentials.",
  },
  {
    icon: <FiUserCheck size={28} />,
    title: "Get Listed & Start Mentoring",
    desc: "Once approved, you'll be listed and ready to guide students.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
        How It Works
      </h2>
      <p className="text-center text-gray-600 max-w-xl mx-auto mb-12">
        Start your mentoring journey in just a few simple steps.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-[#fff5f5] flex-1 p-6 rounded-2xl shadow-md text-center border border-[#e63946]/30"
          >
            <div className="mb-4 flex justify-center items-center text-[#e63946]">
              <div className="bg-[#ffecee] p-4 rounded-full">{step.icon}</div>
            </div>
            <h4 className="text-xl font-bold text-[#e63946] mb-2">
              {step.title}
            </h4>
            <p className="text-gray-600">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
