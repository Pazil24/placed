import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div>
      <div className="max-w-auto w-full h-screen mx-auto text-center flex flex-col justify-center">
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4 text-gray-700">
            The focus is on
          </p>
          <ReactTyped
            className="md:text-5xl sm:text-3xl text-xl font-bold md:pl-4 pl-2 text-green-800"
            strings={["Building Careers", "Empowering Teams", "Getting Placed!"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-2xl font-bold text-gray-800 py-3">Where Careers Grow and Teams Thrive</p>
        <button className="bg-green-800 w-[200px] rounded-md font-medium ny-6 mx-auto py-3 text-gray-900 text-xl">Be Placed</button>
      </div>
    </div>
  );
};

export default Hero;