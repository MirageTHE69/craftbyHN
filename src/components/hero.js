import React from "react"
import Mirage from "../images/Mirage.png"

const Hero = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img
              src={Mirage}
              alt="Person"
              className="max-w-md h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="text-center flex  flex-col w-screen lg:w-full  justify-center md:text-left pr-20">
            <p className="text-3xl font-bold text-gray-800">
              Skill is the unified force of experience, intellect, and passion
              in their operation
            </p>
            <p className="mt-4 text-gray-600">- John Ruskin</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
