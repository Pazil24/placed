import React, { useState } from "react";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is the purpose of this platform?",
      answer:
        "Our platform connects students and recruiters, helping students find job opportunities and recruiters find skilled talent.",
      icon: "https://img.icons8.com/fluency/48/000000/question-mark.png",
    },
    {
      question: "How can I sign up?",
      answer:
        "You can sign up by clicking on the 'Sign Up' button at the top of the page and providing your details.",
      icon: "https://img.icons8.com/fluency/48/000000/registration.png",
    },
    {
      question: "What kind of jobs can I find here?",
      answer:
        "You can find a wide range of job opportunities from internships to full-time positions in various industries.",
      icon: "https://img.icons8.com/fluency/48/000000/job.png",
    },
    {
      question: "How do I post a job as a recruiter?",
      answer:
        "As a recruiter, you can post jobs by signing up and following the easy steps to create a job listing on the platform.",
      icon: "https://img.icons8.com/fluency/48/000000/add-job.png",
    },
    {
      question: "Is there any cost to using the platform?",
      answer:
        "No, signing up and posting jobs is completely free for both students and recruiters.",
      icon: "https://img.icons8.com/fluency/48/000000/free.png",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-r from-green-600 to-teal-800 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center text-white">
        <h2 className="text-4xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-xl transition-all duration-500"
            >
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center space-x-4">
                  <img src={faq.icon} alt="icon" className="w-8 h-8" />
                  <h3 className="text-xl font-semibold text-gray-800">{faq.question}</h3>
                </div>
                <span
                  className={`transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  style={{ fontSize: "24px" }}
                >
                  &#8595;
                </span>
              </div>
              <div
                className={`mt-4 transition-all duration-500 ${
                  openIndex === index ? "max-h-screen" : "max-h-0 overflow-hidden"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;