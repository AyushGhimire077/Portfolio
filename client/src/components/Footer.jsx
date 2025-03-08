import React from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; 

const Footer = () => {
  return (
    <footer className="bg-[#00F0F] tetx-[#ccc] border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-6 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Let's Connect</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="h-5 w-5 text-purple-400" />
                <a
                  href="mailto:ayushghimire077@gmail.com"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  ayushghimire077@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon className="h-5 w-5 text-purple-400" />
                <a
                  href="tel:+9779810534413"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  +977 9810534413
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPinIcon className="h-5 w-5 text-purple-400" />
                <span className="text-gray-300">Biratnagar, Nepal</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Follow Me</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/yourgithub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/yourlinkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://x.com/aayushghimiree"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Aayush Ghimire. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
