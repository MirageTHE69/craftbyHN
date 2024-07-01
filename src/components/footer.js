    import React from 'react';
    import { FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa'; // Importing icons

    const Footer = () => {
    return (
        <div className="bg-white py-12">
        <div className="container mx-auto flex flex-col items-center text-center">
            <div className="pb-6 mb-6 w-full">
            <h2 className="text-2xl font-bold mt-2">HIRAL NANWANI</h2>
            <p className="text-gray-600 mt-4 mx-auto max-w-lg">
                As a highly experienced career development specialist, I provide top-notch resume reviews,
                writing services, cover letter crafting, and interview preparation. If you're seeking personalized
                and professional support to enhance your career prospects, email me.
            </p>
            </div>
            <div className="mt-2">
            <p className="text-lg font-semibold">GET IN TOUCH</p>
            <div className="flex justify-center space-x-6 mt-4">
                <a href="https://instagram.com" className="text-black hover:text-gray-800"><FaInstagram size={24} /></a>
                <a href="https://twitter.com" className="text-black hover:text-gray-800"><FaTwitter size={24} /></a>
                <a href="mailto:email@example.com" className="text-black hover:text-gray-800"><FaEnvelope size={24} /></a>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default Footer;
