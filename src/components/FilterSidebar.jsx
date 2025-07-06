// import { useState } from "react";
// import * as Slider from "@radix-ui/react-slider";

// const SUBJECTS = [
//   "Mathematics",
//   "Physics",
//   "Chemistry",
//   "Biology",
//   "Computer Science",
//   "English",
//   "Economics",
//   "Geography",
//   "History",
//   "Political Science",
//   "Psychology",
//   "Sociology",
//   "Business Studies",
// ];

// export default function FilterSidebar() {
//   const [experience, setExperience] = useState([3]);
//   const [price, setPrice] = useState([3000]);
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredSubjects = SUBJECTS.filter((subject) =>
//     subject.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="w-64 p-5 bg-white shadow-lg rounded-xl border border-gray-200">
//       <h2 className="text-xl font-semibold mb-6">Filters</h2>

//       {/* Subject Search */}
//       <div className="mb-6">
//         <label className="text-sm font-medium text-gray-700 mb-2 block">
//           Search Subject:
//         </label>
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           placeholder="Start typing..."
//         />
//         {searchTerm && (
//           <ul className="mt-2 bg-gray-100 border rounded-md max-h-32 overflow-y-auto">
//             {filteredSubjects.map((subject, index) => (
//               <li
//                 key={index}
//                 className="px-3 py-1 hover:bg-blue-100 cursor-pointer text-sm"
//                 onClick={() => setSearchTerm(subject)}
//               >
//                 {subject}
//               </li>
//             ))}
//             {filteredSubjects.length === 0 && (
//               <li className="px-3 py-1 text-gray-500 text-sm">No match found</li>
//             )}
//           </ul>
//         )}
//       </div>

//       {/* Experience Filter */}
//       <div className="mb-6">
//         <label className="text-sm font-medium text-gray-700 mb-2 block">
//           Experience (Years): {experience[0]}
//         </label>

//         <Slider.Root
//           className="relative flex items-center select-none touch-none w-full h-5"
//           min={1}
//           max={6}
//           step={1}
//           value={experience}
//           onValueChange={setExperience}
//         >
//           <Slider.Track className="bg-gray-200 relative grow rounded-full h-[4px]">
//             <Slider.Range className="absolute bg-blue-500 rounded-full h-full" />
//           </Slider.Track>
//           <Slider.Thumb
//             className="block w-4 h-4 bg-blue-600 rounded-full shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//             aria-label="Experience"
//           />
//         </Slider.Root>
//       </div>

//       {/* Price Filter */}
//       <div>
//         <label className="text-sm font-medium text-gray-700 mb-2 block">
//           Price (₹): {price[0]}
//         </label>

//         <Slider.Root
//           className="relative flex items-center select-none touch-none w-full h-5"
//           min={1000}
//           max={5000}
//           step={100}
//           value={price}
//           onValueChange={setPrice}
//         >
//           <Slider.Track className="bg-gray-200 relative grow rounded-full h-[4px]">
//             <Slider.Range className="absolute bg-green-500 rounded-full h-full" />
//           </Slider.Track>
//           <Slider.Thumb
//             className="block w-4 h-4 bg-green-600 rounded-full shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//             aria-label="Price"
//           />
//         </Slider.Root>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import * as Slider from "@radix-ui/react-slider";

const SUBJECTS = [
  "Mathematics", "Physics", "Chemistry", "Biology",
  "Computer Science", "Economics", "History", "Geography",
  "English", "Political Science", "Psychology", "Sociology"
];

export default function FilterSidebar() {
  const [experience, setExperience] = useState([3]);
  const [price, setPrice] = useState([3000]);
  const [subjectQuery, setSubjectQuery] = useState("");
  const [filteredSubjects, setFilteredSubjects] = useState([]);

  const handleSubjectChange = (e) => {
    const value = e.target.value;
    setSubjectQuery(value);

    const filtered = SUBJECTS.filter((subject) =>
      subject.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredSubjects(value ? filtered : []);
  };

  return (
    <div className="w-72 bg-white border-r border-gray-200 p-6 h-full">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Filters</h2>

      {/* Subject Search */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Subject
        </label>
        <input
          type="text"
          value={subjectQuery}
          onChange={handleSubjectChange}
          placeholder="Search subject..."
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {filteredSubjects.length > 0 && (
          <ul className="border border-gray-200 mt-1 rounded-md bg-white shadow-sm max-h-40 overflow-y-auto text-sm">
            {filteredSubjects.map((subject, index) => (
              <li
                key={index}
                className="px-3 py-2 hover:bg-blue-100 cursor-pointer"
                onClick={() => {
                  setSubjectQuery(subject);
                  setFilteredSubjects([]);
                }}
              >
                {subject}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Experience Slider */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Experience (Years): <span className="font-semibold">{experience[0]}</span>
        </label>
        <Slider.Root
          className="relative flex items-center select-none touch-none w-full h-6"
          min={1}
          max={5}
          step={1}
          value={experience}
          onValueChange={setExperience}
        >
          <Slider.Track className="bg-gray-200 relative grow rounded-full h-[6px]">
            <Slider.Range className="absolute bg-blue-600 rounded-full h-full" />
          </Slider.Track>
          <Slider.Thumb
            className="block w-5 h-5 bg-blue-600 rounded-full shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            aria-label="Experience"
          />
        </Slider.Root>
      </div>

      {/* Price Slider */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Price (₹): <span className="font-semibold">{price[0]}</span>
        </label>
        <Slider.Root
          className="relative flex items-center select-none touch-none w-full h-6"
          min={1000}
          max={5000}
          step={500}
          value={price}
          onValueChange={setPrice}
        >
          <Slider.Track className="bg-gray-200 relative grow rounded-full h-[6px]">
            <Slider.Range className="absolute bg-green-600 rounded-full h-full" />
          </Slider.Track>
          <Slider.Thumb
            className="block w-5 h-5 bg-green-600 rounded-full shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            aria-label="Price"
          />
        </Slider.Root>
      </div>

      <button className="w-full bg-[#e63946] text-white py-2 rounded-lg hover:bg-blue-700 transition shadow">
        Apply Filters
      </button>
    </div>
  );
}
