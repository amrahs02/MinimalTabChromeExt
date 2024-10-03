import React from 'react';
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white/10 backdrop-blur-lg text-white py-10 border-t border-white/30">
      <div className="container mx-auto text-center">
        <p className="mb-4">&copy; 2024 MinimalTab. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/amrahs02/MinimalTabChromeExt" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-gray-400 transition" />
          </a>
          <a href="https://www.linkedin.com/in/sandeepsharma2183/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-gray-400 transition" />
          </a>
          <a href="https://amrahs.vercel.app" target="_blank" rel="noopener noreferrer">
            <FaGlobe className="text-2xl hover:text-gray-400 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
