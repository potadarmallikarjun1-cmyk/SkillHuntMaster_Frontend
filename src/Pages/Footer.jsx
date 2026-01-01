import React from "react";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";


const Footer = () => {
  return (

    <footer className="bg-gray-200 text-gray-700 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand Section */}
    
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Skil Hunt Master
          </h2>
          <p className="text-sm text-gray-600">
            Empowering skills, shaping careers, and building future-ready
            professionals.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">About Us</li>
            <li className="hover:text-black cursor-pointer">Courses</li>
            <li className="hover:text-black cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-black cursor-pointer">Blog</li>
            <li className="hover:text-black cursor-pointer">Career Guidance</li>
            <li className="hover:text-black cursor-pointer">Privacy Policy</li>
            <li className="hover:text-black cursor-pointer">
              Terms & Conditions
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Connect With Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-600 transition">
              <Facebook size={22} />
            </a>
            <a href="#" className="hover:text-pink-600 transition">
              <Instagram size={22} />
            </a>
            <a href="#" className="hover:text-sky-500 transition">
              <Twitter size={22} />
            </a>
            <a href="#" className="hover:text-red-500 transition">
              <Mail size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-300 mt-8 pt-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Skil Hunt Master. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
