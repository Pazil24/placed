import React from "react";

const Features = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Our Features</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-green-400 rounded-lg">
          <h2 className="text-2xl font-semibold">For Students</h2>
          <p className="text-gray-900">
            Learn industry-ready skills, track your progress, and showcase your
            portfolio.
          </p>
        </div>
        <div className="p-4 bg-green-400 rounded-lg">
          <h2 className="text-2xl font-semibold">For Recruiters</h2>
          <p className="text-gray-900">
            Find the perfect candidate with advanced search and assessment
            tools.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
