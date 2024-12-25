import React, { useState, useEffect } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    // Trigger the slide-in animation when the component mounts
    setSlideIn(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission (e.g., API call)
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <div className="bg-gradient-to-r from-green-900 to-green-400 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          Get in Touch with Us
        </h2>
        <div className="flex flex-wrap justify-between gap-12">
          {/* Contact Form Section */}
          <div
            className={`w-full md:w-1/2 bg-white text-gray-800 p-8 rounded-lg shadow-xl transform ${
              slideIn
                ? "translate-x-0 opacity-100"
                : "-translate-x-96 opacity-0"
            } transition duration-1000`}
          >
            <h3 className="text-3xl font-semibold text-green-600 mb-4">
              We'd love to hear from you
            </h3>
            <p className="text-lg mb-6">
              Whether you have a question, feedback, or just want to chat, we're
              here to help.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 mt-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 mt-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-lg font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full p-3 mt-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition duration-300"
              >
                {isSubmitted ? "Thank You!" : "Send Message"}
              </button>
            </form>
          </div>

          {/* Location and Social Media Section */}
          <div
            className={`w-full md:w-1/3 bg-white text-gray-800 p-8 rounded-lg shadow-xl transform ${
              slideIn ? "translate-x-0 opacity-100" : "translate-x-96 opacity-0"
            } transition duration-1000`}
          >
            <h3 className="text-3xl font-semibold text-green-600 mb-4">
              Find Us On Social Media
            </h3>
            <p className="text-lg mb-6">
              Drop by and say hi!
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-6 justify-center">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-green-600 transition duration-300"
              >
                <i className="fab fa-facebook-square"></i>
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-green-600 transition duration-300"
              >
                <i className="fab fa-twitter-square"></i>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-green-600 transition duration-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-green-600 transition duration-300"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
