import React from 'react';

const Services = () => {
  const services = [
    { number: '1', title: 'RESUME REVIEW', description: 'Receive expert feedback on your current resume to enhance clarity, relevance, and impact.' },
    { number: '2', title: 'RESUME WRITING', description: 'Let me craft a compelling resume that highlights your skills and experience effectively.' },
    { number: '3', title: 'COVER LETTER WRITING', description: 'Create a customized cover letter that complements your resume and grabs employers\' attention.' },
    { number: '4', title: 'INTERVIEW SIMULATION', description: 'Practice and refine your interview skills through realistic simulations tailored to your target industry.' },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen  sm:px-36 bg-white">
      <div className="container mx-auto px-8 py-16">
        <h2 className="text-3xl font-semibold mb-8 text-center md:text-left" data-aos="fade-up">Services</h2>
        <div className="space-y-6">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-300 py-4" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className="text-2xl font-light text-gray-800">{service.number}</div>
                <div className="pl-4 md:pl-10 sm:mt-5">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
