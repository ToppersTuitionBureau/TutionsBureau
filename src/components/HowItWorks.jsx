import React from 'react';

const steps = [
  {
    id: 1,
    title: 'Find your perfect online tutor',
  },
  {
    id: 2,
    title: 'Start with a FREE online trial lesson',
  },
  {
    id: 3,
    title: 'Become a member and save time and money',
  },
];

const HowItWorks = () => {
  return (
    <div className="bg-[#ffecee] py-16 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">How it works</h1>
      <p className="text-gray-600 text-center mb-12 max-w-xl leading-relaxed">
        Personalized online tutoring to boost grades and confidence.<br />
        Improve your grades by 3x with lessons that match your needs and learning goals.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white rounded-xl p-6 shadow-md hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center mb-4 text-4xl font-bold">
              {step.id}
            </div>
            <h2 className="text-xl font-semibold text-gray-800">{step.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
