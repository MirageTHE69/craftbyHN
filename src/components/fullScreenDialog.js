import React from 'react';

const FullScreenDialog = ({ isOpen, onClose }) => {
  const services = [
    'RESUME REVIEW',
    'RESUME WRITING',
    'COVER LETTER WRITING',
    'INTERVIEW SIMULATION'
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg mx-4 p-8 relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="service">
              Select a Service
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              id="service"
              name="service"
              required
            >
              {services.map(service => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
          <button
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FullScreenDialog;
