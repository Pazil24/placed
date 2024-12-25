import React, { useState } from "react";

const HowForRecruiters = () => {
  const steps = [
    {
      title: "Post a Job",
      description:
        "Quickly post job listings or internships for your company, with all the details you need.",
      icon: "https://img.icons8.com/fluency/48/000000/briefcase.png",
    },
    {
      title: "Search for Candidates",
      description:
        "Search through a database of qualified and passionate students eager to contribute to your organization.",
      icon: "https://img.icons8.com/fluency/48/000000/search.png",
    },
    {
      title: "Shortlist Candidates",
      description:
        "Review applications, shortlist candidates, and connect with them directly.",
      icon: "https://img.icons8.com/fluency/48/000000/checklist.png",
    },
    {
      title: "Make a Hire",
      description:
        "After reviewing, schedule interviews and make the perfect hire for your company.",
      icon: "https://img.icons8.com/fluency/48/000000/handshake.png",
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="bg-gradient-to-r from-green-600 to-teal-800 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">How It Works for Recruiters</h2>
        <div className="relative">
          <div className="flex justify-center items-center mb-6 space-x-6">
            <button
              className="text-white text-2xl p-2 bg-gray-800 rounded-full"
              onClick={prevStep}
              disabled={currentStep === 0}
            >
              &#8592;
            </button>
            <div className="relative w-80 h-96 flex-shrink-0">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`absolute top-0 left-0 w-full h-full transition-all duration-500 transform ${
                    index === currentStep
                      ? "scale-100 opacity-100 z-10"
                      : "scale-90 opacity-50 z-0"
                  }`}
                >
                  <div className="bg-white w-full rounded-lg shadow-xl p-6 flex flex-col items-center justify-center">
                    <img
                      src={step.icon}
                      alt={step.title}
                      className="w-16 h-16 mb-4"
                    />
                    <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                    <p className="text-gray-600 mt-2">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="text-white text-2xl p-2 bg-gray-800 rounded-full"
              onClick={nextStep}
              disabled={currentStep === steps.length - 1}
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowForRecruiters;
