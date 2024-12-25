import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const RecruiterSection = () => {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1598257006626-48b0c252070d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGpvYiUyMHJlY3J1aXRlcnxlbnwwfHwwfHx8MA%3D%3D",
      title: "Access Top Talent",
      description:
        "Explore a pool of skilled and passionate students ready to excel in your organization.",
      buttonText: "Discover Talent",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1679936310303-9e53ef265fc7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8am9iJTIwcmVjcnVpdGVyfGVufDB8fDB8fHww",
      title: "Streamline Hiring",
      description:
        "Effortlessly find the right candidates through our intuitive platform.",
      buttonText: "Post a Job",
    },
    {
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8am9iJTIwcmVjcnVpdGVyfGVufDB8fDB8fHww",
      title: "Partner for Growth",
      description: "Collaborate with us to build a thriving talent ecosystem.",
      buttonText: "Partner With Us",
    },
  ];

  return (
    <div className="bg-gray-200 py-12 my-0">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Hire Skilled Talent, Simplified
        </h1>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          className="w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-96 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-6">
                  <h2 className="text-3xl font-bold text-black">{slide.title}</h2>
                  <p className="mt-4 text-lg text-black">{slide.description}</p>
                  <button className="mt-6 bg-green-800 hover:bg-green-600 px-6 py-3 rounded text-black font-semibold">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <p className="text-center text-black mt-8">
          Connect with career poised individuals- simplify your hiring process today and hire people that empower your team.
        </p>
        <div className="text-center mt-4">
          <button className="bg-green-800 text-white px-6 py-3 rounded-md shadow-md text-xl hover:bg-green-600">
            Sign Up as a Recruiter
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecruiterSection;
