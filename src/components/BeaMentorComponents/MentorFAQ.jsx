import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
  {
    question: "Is there a fee to become a mentor?",
    answer:
      "No, signing up as a mentor is completely free. However, we take a small commission per booking to cover platform services.",
  },
  {
    question: "How much can I earn?",
    answer:
      "You set your own rates. Earnings depend on the number of sessions you take and your experience level.",
  },
  {
    question: "How will students contact me?",
    answer:
      "Students can view your profile and book a free session directly via our platform. You'll get notified instantly.",
  },
  {
    question: "Can I choose the subjects I want to teach?",
    answer:
      "Yes! You decide your areas of expertise, and students can filter by subjects when searching for mentors.",
  },
];

const FAQItem = ({ faq, isOpen, toggle }) => (
  <div
    className="border-b border-gray-300 py-4 cursor-pointer"
    onClick={toggle}
  >
    <div className="flex justify-between items-center">
      <h4 className="text-lg font-semibold text-[#e63946]">{faq.question}</h4>
      <span className="text-[#e63946] text-xl">
        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
      </span>
    </div>
    {isOpen && <p className="mt-2 text-gray-600">{faq.answer}</p>}
  </div>
);

const MentorFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 bg-[#fff5f5] px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-gray-600 max-w-xl mx-auto mb-12">
        Still have questions? Here are some quick answers for mentors.
      </p>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <FAQItem
            key={idx}
            faq={faq}
            isOpen={openIndex === idx}
            toggle={() =>
              setOpenIndex(openIndex === idx ? null : idx)
            }
          />
        ))}
      </div>
    </section>
  );
};

export default MentorFAQ;
