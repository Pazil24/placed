import React from "react";

const Features = () => {
  const features = [
    {
      icon: "https://img.icons8.com/fluency/48/000000/light-on.png",
      title: "Discover Opportunities",
      description:
        "Access a vast array of job and internship listings tailored to your skills and interests.",
    },
    {
      icon: "https://img.icons8.com/?size=50&id=58862&format=png",
      title: "Skill Development",
      description:
        "Take advantage of our resources to grow your skills and prepare for the future.",
    },
    {
      icon: "https://img.icons8.com/fluency/48/000000/teamwork.png",
      title: "Connect With Recruiters",
      description:
        "Build meaningful relationships with top recruiters and secure your dream job.",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-green-900 to-green-200 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
            >
              <div className="flex justify-center mb-4">
                <img src={feature.icon} alt={feature.title} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;