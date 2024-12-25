import React, { useState } from "react";

const HowSection = () => {
  const steps = [
    {
      title: "Sign Up",
      description:
        "Create your free account and get access to a world of opportunities.",
      icon: "https://img.icons8.com/?size=80&id=yPLLSMVy0oHZ&format=png",
    },
    {
      title: "Develop Your Skills",
      description:
        "Enhance your knowledge with top-notch resources and courses.",
      icon: "https://img.icons8.com/?size=50&id=58862&format=png",
    },
    {
      title: "Browse Opportunities",
      description:
        "Explore thousands of job listings and internships tailored just for you.",
      icon: "https://img.icons8.com/?size=50&id=86247&format=png",
    },
    {
      title: "Get Hired",
      description:
        "Connect with recruiters and land your dream job or internship.",
      icon: "https://img.icons8.com/?size=48&id=12208&format=png",
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
    <div className="bg-gradient-to-r from-green-900 to-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">How It Works</h2>
        <div className="relative">
          <div className="flex justify-center items-center mb-6">
            <button
              className="text-white text-2xl p-2 bg-gray-800 rounded-full mr-4"
              onClick={prevStep}
              disabled={currentStep === 0}
            >
              &#8592;
            </button>
            <div className="flex-shrink-0 w-80 h-96 bg-gray-300 rounded-lg shadow-xl p-6 flex flex-col items-center justify-center">
              <img
                src={steps[currentStep].icon}
                alt={steps[currentStep].title}
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-bold text-black">{steps[currentStep].title}</h3>
              <p className="text-black mt-2">{steps[currentStep].description}</p>
            </div>
            <button
              className="text-white text-2xl p-2 bg-gray-800 rounded-full ml-4"
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

export default HowSection;
