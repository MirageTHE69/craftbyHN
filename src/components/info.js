import React from 'react';

const Info = () => {
  return (
    <div className="flex items-center justify-around px-4 md:px-36 bg-white ml-10 sm:ml-0" data-aos="fade-up">
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <p className="text-2xl font-light text-gray-800 w-[80%] ml-5 sm:ml-0" data-aos="fade-right">
              I’m Hiral Nanwani, a seasoned HR Professional with a passion to coach job seekers to confidently succeed in interviews.
            </p>
           
          </div>
          <div className="text-center md:text-left">
            <p className="text-base font-medium text-gray-800" data-aos="fade-left">
              Welcome to my personalized career development platform, where I offer expert guidance to students and new professionals aiming to excel in their chosen fields. With a wealth of industry experience, I specialize in crafting impactful resumes that highlight your strengths and achievements effectively. Beyond resumes, I provide comprehensive support in honing essential skills such as interview preparation, networking strategies, and professional growth tactics. Together, we’ll navigate the competitive job market and tailor your approach to meet industry demands. Whether you’re just starting out or seeking to advance your career, let’s collaborate to unlock your full potential and secure the opportunities you deserve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
