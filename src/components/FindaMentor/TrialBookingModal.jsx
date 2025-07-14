import React, { useState } from "react";
import { X } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

const TrialBookingModal = ({ isOpen, onClose, mentorName }) => {
  const [form, setForm] = useState({
    studentName: "",
    board: "",
    grade: "",
    contact: "",
    country: "",
    state: "",
    subjects: "",
    preferredTime: "",
    email: "",
    mentor: mentorName || "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendWhatsApp = () => {
    if (!form.studentName || !form.contact || !form.email) {
      toast.error("Please fill in required fields: Name, Contact, Email");
      return;
    }

    const message = `📚 *New Trial Request* 📚
*Student Name:* ${form.studentName}
*Board:* ${form.board}
*Grade:* ${form.grade}
*Contact No:* ${form.contact}
*Country:* ${form.country}
*State:* ${form.state}
*Subjects:* ${form.subjects}
*Preferred Time:* ${form.preferredTime}
*Email:* ${form.email}
*Requested Mentor:* ${form.mentor}`;

    const encodedMsg = encodeURIComponent(message);
    window.open(`https://wa.me/919076061166?text=${encodedMsg}`, "_blank");
    toast.success("Redirecting to WhatsApp");
    setTimeout(() => onClose(), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
        >
          <Toaster />
          <motion.div
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative"
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              onClick={onClose}
            >
              <X size={20} />
            </button>

            <h2 className="text-xl font-bold mb-4 text-center text-[#e63946]">
              Book a Free Trial with {mentorName}
            </h2>

            <div className="space-y-4">
              <input
                name="studentName"
                value={form.studentName}
                onChange={handleChange}
                placeholder="Name of Student *"
                className="w-full border p-2 rounded"
              />
              <input
                name="board"
                value={form.board}
                onChange={handleChange}
                placeholder="Board"
                className="w-full border p-2 rounded"
              />
              <input
                name="grade"
                value={form.grade}
                onChange={handleChange}
                placeholder="Grade / Std"
                className="w-full border p-2 rounded"
              />
              <input
                name="contact"
                value={form.contact}
                onChange={handleChange}
                placeholder="Contact Number (include country code) *"
                className="w-full border p-2 rounded"
              />
              <div className="flex gap-2">
                <input
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  placeholder="Country"
                  className="w-1/2 border p-2 rounded"
                />
                <input
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  placeholder="State"
                  className="w-1/2 border p-2 rounded"
                />
              </div>
              <textarea
                name="subjects"
                value={form.subjects}
                onChange={handleChange}
                placeholder="Subjects requiring coaching"
                className="w-full border p-2 rounded"
              />
              <select
                name="preferredTime"
                value={form.preferredTime}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              >
                <option value="">Select Preferred Time</option>
                <option value="Morning (8am-12pm)">Morning (8am-12pm)</option>
                <option value="Afternoon (12pm-4pm)">
                  Afternoon (12pm-4pm)
                </option>
                <option value="Evening (4pm-8pm)">Evening (4pm-8pm)</option>
                <option value="Night (8pm-10pm)">Night (8pm-10pm)</option>
              </select>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address *"
                className="w-full border p-2 rounded"
              />
              <input
                name="mentor"
                value={form.mentor}
                readOnly
                className="w-full border p-2 rounded bg-gray-100"
              />

              <button
                onClick={sendWhatsApp}
                className="w-full bg-[#e63946] text-white py-2 rounded-lg font-semibold hover:bg-[#d42f3f] transition"
              >
                Send via WhatsApp
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TrialBookingModal;
