import React from 'react';
import Hiral from "../images/HIRAL.jpg"

const Hero = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white" data-aos="fade-up">
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center" data-aos="fade-right">
            <div className=" p-2 rounded-lg ">
              <img
                src={Hiral}
                alt="Person"
                className="max-w-md h-auto p-14 sm:p-0"
              />
            </div>
          </div>
          <div className="text-start md:text-left  sm:ml-0 sm:pr-20" data-aos="fade-left">
            <p className="text-sm md:text-lg font-bold text-gray-800 font-playfair">
              Skill is the unified force of experience, intellect, and passion
              in their operation
            </p>
            <p className="mt-4 text-gray-600">- John Ruskin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
