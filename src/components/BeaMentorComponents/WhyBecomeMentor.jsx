import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    icon: "🎯",
    title: "Teach on Your Terms",
    desc: "Set your availability and teach flexibly.",
  },
  {
    icon: "💸",
    title: "Earn by Helping",
    desc: "Get rewarded for sharing your knowledge.",
  },
  {
    icon: "🌍",
    title: "Grow Your Network",
    desc: "Join a mentor community from across India.",
  },
  {
    icon: "🌱",
    title: "Inspire Futures",
    desc: "Make a real difference in students' lives.",
  },
];

const WhyBecomeMentor = () => {
  return (
    <section className="py-16 bg-[#fff5f5] px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
        Why Become a Mentor?
      </h2>
      <p className="text-center text-gray-600 max-w-xl mx-auto mb-12">
        Be more than a tutor. Shape futures, inspire confidence, and join a
        community that’s driven by purpose.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {features.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 flex gap-4 items-start"
          >
            <div className="text-4xl">{item.icon}</div>
            <div>
              <h4 className="text-xl font-semibold text-[#e63946]">
                {item.title}
              </h4>
              <p className="text-gray-600 mt-1">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyBecomeMentor;
