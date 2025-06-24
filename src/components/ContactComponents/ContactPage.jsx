import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPhone, FiMail, FiMessageSquare } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { Toaster, toast } from "react-hot-toast";

const ContactOption = ({ icon, label, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
    className="cursor-pointer flex flex-col items-center justify-center w-60 h-52 p-6 rounded-2xl shadow-md border border-[#e63946] bg-white transition duration-300 hover:bg-[#ffecee]"
    onClick={onClick}
  >
    <div className="text-[#e63946] border-4 border-[#e63946] p-4 rounded-full mb-4 text-3xl">
      {icon}
    </div>
    <p className="text-lg font-semibold text-gray-700">{label}</p>
  </motion.div>
);

const ContactPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", number: "", query: "" });

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const isValid = form.checkValidity();
    if (!isValid) return;

    form.submit();
    toast.success("Form submitted! We'll get back to you soon.");
    setShowForm(false);
  };

  return (
    <section className="px-4 py-16 bg-white min-h-96 text-center">
      <Toaster position="top-center" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#e63946] mb-2">Get in Touch</h2>
      <p className="text-gray-600 mb-10 font-medium">
        Have a question or want to connect with us?
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        <ContactOption
          icon={<FiPhone />}
          label="Request a Call Back"
          onClick={() => setShowForm(true)}
        />
        <ContactOption
          icon={<FiMail />}
          label="Email"
          onClick={() => {
            window.location.href =
              "mailto:infotopperstuitionbureau@gmail.com";
          }}
        />
        <ContactOption
          icon={<FaWhatsapp />}
          label="WhatsApp"
          onClick={() => {
            window.open("https://wa.me/919999999999", "_blank");
          }}
        />
      </div>

      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full relative border-2 border-[#e63946]"
            >
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-2xl"
              >
                ×
              </button>
              <h3 className="text-xl font-semibold mb-4 text-[#e63946]">Request a Call Back</h3>
              <form
                onSubmit={handleSubmit}
                action="https://formsubmit.co/infotopperstuitionbureau@gmail.com"
                method="POST"
                className="space-y-4 text-left"
              >
                <input type="hidden" name="_captcha" value="false" />
                <div>
                  <label className="block text-sm font-medium text-[#e63946]">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full border rounded-md px-3 py-2 mt-1 focus:border-[#e63946] focus:ring-[#e63946]"
                    onChange={handleInput}
                    value={formData.name}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#e63946]">Phone Number</label>
                  <input
                    type="tel"
                    name="number"
                    required
                    className="w-full border rounded-md px-3 py-2 mt-1 focus:border-[#e63946] focus:ring-[#e63946]"
                    onChange={handleInput}
                    value={formData.number}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#e63946]">Your Query</label>
                  <textarea
                    name="query"
                    rows="3"
                    required
                    className="w-full border rounded-md px-3 py-2 mt-1 focus:border-[#e63946] focus:ring-[#e63946]"
                    onChange={handleInput}
                    value={formData.query}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#e63946] hover:bg-[#d42f3f] text-white py-2 px-4 rounded-md font-semibold transition"
                >
                  Submit
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ContactPage;
