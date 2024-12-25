import React, { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const CarouselBanner = () => {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZyZWVsYW5jZSUyMHRlY2h8ZW58MHx8MHx8fDA%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1597239450996-ea7c2c564412?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGZyZWVsYW5jZSUyMHRlY2h8ZW58MHx8MHx8fDA%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1524508762098-fd966ffb6ef9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGZyZWVsYW5jZSUyMHRlY2h8ZW58MHx8MHx8fDA%3D",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const handleNext = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <div className="group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-[100vh] bg-center bg-cover"
      >
        <Navbar/>
        <Hero/>
      </div>
      <div className="md:hidden md:group-hover:block absolute translate-y-[-50%] md:top-[50%] top-[80%] left-5 cursor-pointer text-green-800 font-bold">
        <BsChevronCompactLeft onClick={handlePrevious} size={50}/>
      </div>
      <div className="md:hidden md:group-hover:block absolute translate-y-[-50%] md:top-[50%] top-[80%] md:left-[90rem] sm:left-10 cursor-pointer text-green-800 font-bold">
        <BsChevronCompactRight onClick={handleNext} size={50}/>
      </div>
    </div>
  );
};

export default CarouselBanner;
