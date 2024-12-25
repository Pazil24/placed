import React, { useState, useEffect, useRef } from "react";

const StudentSection = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);
  
  const images = [
    "https://images.unsplash.com/photo-1498677231914-50deb6ba4217?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGZyZWVsYW5jZSUyMHRlY2h8ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1725472983249-01c107da16d8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fGZyZWVsYW5jZSUyMHRlY2h8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-white py-10" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6">
          Are you looking to learn a skill?
        </h1>
        <p className="text-center text-gray-700 text-xl mb-8">
          Be Career Poised! While learning a skill is important, something even
          more important is learning to use that skill in the real world. Here, you learn both but that's not all. We know the huge hassle it is to
          get a job after learning so we've brought the job to you. The best part
          yet- <span className="font-comfortaa text-green-800 px-1">placed.</span> is FREE!!!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative group transform ${
                inView
                  ? "translate-x-0 opacity-100"
                  : "translate-x-96 opacity-0"
              } transition-all duration-1000`}
            >
              <img
                src={image}
                alt={`Student ${index + 1}`}
                className="w-full h-60 object-cover rounded-lg shadow-lg transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-white text-lg font-bold">
                  Start Learning Today
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-green-800 text-white px-6 py-3 rounded-md text-xl shadow-md hover:bg-green-700">
            Sign Up Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentSection;