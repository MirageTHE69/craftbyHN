import React, { useState } from "react"
import { FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa"
import FullScreenDialog from "./fullScreenDialog" // Adjust the path according to your file structure

const Footer = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleOpenDialog = () => {
    setIsDialogOpen(true)
  }

  const handleCloseDialog = () => {
    setIsDialogOpen(false)
  }

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto flex flex-col items-center text-center">
        <div className="pb-6 mb-6 w-full">
          <h2 className="text-2xl font-bold mt-2">HIRAL NANWANI</h2>
          <p className="text-gray-600 mt-4 mx-auto text-base text-bold text-2    max-w-lg font-playfair">
            Your career goals matter and I am here to enhance your prospects.
          </p>
        </div>
        <div className="mt-2">
          <p
            className="mt-1 text-black py-2 px-4 text-2xl rounded-lg  transition-colors"
            onClick={handleOpenDialog}
          >
            Get in Touch
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a
              href="https://instagram.com"
              className="text-black hover:text-gray-800"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://twitter.com"
              className="text-black hover:text-gray-800"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="mailto:interviewinsights.hn@gmail.com"
              className="text-black hover:text-gray-800"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>

      <FullScreenDialog isOpen={isDialogOpen} onClose={handleCloseDialog} />
    </div>
  )
}

export default Footer
