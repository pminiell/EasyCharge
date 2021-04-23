import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => (
  <footer className="container mx-auto px-3 mb-8 text-gray-800">
    <div className="space-x-4 flex justify-center">
      <a href="https://github.com/pminiell" rel="noreferrer noopener" target="_blank">
        <FaGithub size={24} color="#211F1F" />
      </a>
      <a
        href="https://www.linkedin.com/in/philip-minielly-162230191/"
        rel="noreferrer noopener"
        target="_blank"
      >
        <FaLinkedin size={24} color="#006192" />
      </a>
      <a href="https://twitter.com/PhilipMinielly" rel="noreferrer" target="_blank">
        <FaTwitter size={24} color="#55ACEE" />
      </a>
      <h4><a className="text-primary-darker hover:text-primary" href="https://phildev.netlify.app" rel="noreferrer" target="_blank">&copy; Philip Minielly</a></h4>
    </div>
  </footer>
);

export default Footer;
