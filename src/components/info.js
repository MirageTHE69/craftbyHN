import React from "react"

const Info = () => {
  return (
    <div
      className="flex items-center justify-around  md:px-36 bg-white ml-10 sm:ml-0"
      data-aos="fade-up"
    >
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-start md:text-left">
            <p
              className="text-2xl font-light text-gray-800 w-[80%]  sm:ml-0"
              data-aos="fade-right"
            >
              I’m Hiral Nanwani, a seasoned HR Professional with a passion to
              coach job seekers to confidently succeed in interviews.
            </p>
          </div>
          <div className="text-start md:text-left pr-2">
            <p
              className="text-base font-medium text-gray-800 font-playfair"
              data-aos="fade-left"
            >
              Welcome to my personalized career development platform, where I
              offer expert resume reviews and career guidance for students and
              professionals. With extensive industry experience, I help you
              refine your resume to effectively showcase your strengths and
              achievements. In addition to resume reviews, I provide support in
              interview preparation, networking strategies, and professional
              growth. Whether you're entering the job market or seeking career
              advancement, I’m here to help you stand out and secure the
              opportunities you deserve. Let’s refine your approach and elevate
              your career prospects together.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
