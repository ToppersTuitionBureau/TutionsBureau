import React from "react";

const testimonialsRow1 = [
  {
    name: "Rashida",
    text: "Rashida helped me find confidence in my voice and guided me to love my uniqueness.",
    subject: "Voice Tutor",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    name: "Charles",
    text: "Charles made chemistry simple and boosted my daughter's grades significantly.",
    subject: "Chemistry Tutor",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Danny",
    text: "Danny helped my son improve from D to B in one term.",
    subject: "Geometry Tutor",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    name: "Priya",
    text: "Priya's English lessons improved my writing dramatically.",
    subject: "English Tutor",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Rahul",
    text: "Rahul taught complex math in simple and fun ways.",
    subject: "Math Tutor",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Sophia",
    text: "Sophia's mentoring helped me land my first internship.",
    subject: "Career Coach",
    image: "https://randomuser.me/api/portraits/women/47.jpg",
  },
  {
    name: "Ankit",
    text: "Ankit gave me the confidence to crack NEET.",
    subject: "Exam Prep Expert",
    image: "https://randomuser.me/api/portraits/men/48.jpg",
  },
  
];

const testimonialsRow2 = [
  {
    name: "Ali",
    text: "Ali's technical guidance helped me publish my first app!",
    subject: "Tech Mentor",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Tara",
    text: "Tara made biology fun and easy to understand.",
    subject: "Biology Tutor",
    image: "https://randomuser.me/api/portraits/women/56.jpg",
  },
  {
    name: "Sameer",
    text: "Sameer helped me gain clarity for my UPSC prep.",
    subject: "UPSC Mentor",
    image: "https://randomuser.me/api/portraits/men/57.jpg",
  },
  {
    name: "Diya",
    text: "Diya's lessons boosted my IELTS score to 8.0!",
    subject: "IELTS Coach",
    image: "https://randomuser.me/api/portraits/women/58.jpg",
  },
  {
    name: "Neeraj",
    text: "Neeraj helped me understand investment basics.",
    subject: "Finance Mentor",
    image: "https://randomuser.me/api/portraits/men/59.jpg",
  },
  {
    name: "Zara",
    text: "Zara inspired me to take learning seriously.",
    subject: "Motivational Coach",
    image: "https://randomuser.me/api/portraits/women/60.jpg",
  },
  {
    name: "Arjun",
    text: "Arjun is the best mentor I've ever had.",
    subject: "Career Mentor",
    image: "https://randomuser.me/api/portraits/men/61.jpg",
  },
];


const ReviewCard = ({ image, text, name, subject }) => (
  <div className="flex-shrink-0 w-80 p-6 rounded-2xl shadow-md bg-white mx-4">
    <div className="flex items-center gap-4 mb-4">
      <img
        src={image}
        alt={name}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-500">{subject}</p>
      </div>
    </div>
    <p className="text-gray-700 text-sm italic">“{text}”</p>
  </div>
);

const AutoScrollRow = ({ reviews, direction }) => {
  const fullList = [...reviews, ...reviews]; // duplicate for seamless loop

  return (
    <div className="overflow-hidden group py-4">
      <div
        className={`flex w-max gap-6 ${
          direction === "left" ? "scroll-left" : "scroll-right"
        } group-hover:[animation-play-state:paused]`}
      >
        {fullList.map((review, idx) => (
          <ReviewCard key={idx} {...review} />
        ))}
      </div>
    </div>
  );
};




const TestimonialsSection = () => {
  return (
    <section className="py-12 bg-[#ffecee]">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-2">
        Trusted by <span className="text-[#e63946]">Thousands of Learners</span>
      </h2>
      <p className="text-center text-gray-600 font-semibold text-base max-w-xl mx-auto mb-8">
        Real stories from learners who’ve found clarity, confidence, and success with the help of our mentors.
      </p>
      <AutoScrollRow reviews={testimonialsRow1} direction="left" />
      <AutoScrollRow reviews={testimonialsRow2} direction="right" />
    </section>
  );
};

export default TestimonialsSection;
