
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-safari-900 text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SafariQuest</h3>
            <p className="text-gray-300 mb-4">
              Experience the wild with our premium safari adventures. Book your journey today.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/safaris" className="text-gray-300 hover:text-white transition-colors">Safaris</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3">Popular Safaris</h4>
            <ul className="space-y-2">
              <li><Link to="/safaris/serengeti" className="text-gray-300 hover:text-white transition-colors">Serengeti Adventure</Link></li>
              <li><Link to="/safaris/kruger" className="text-gray-300 hover:text-white transition-colors">Kruger National Park</Link></li>
              <li><Link to="/safaris/maasai" className="text-gray-300 hover:text-white transition-colors">Maasai Mara Experience</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3">Connect With Us</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Email: info@safariquest.com</li>
              <li className="text-gray-300">Phone: +1 234 567 8900</li>
              <li className="text-gray-300">Location: Nairobi, Kenya</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 SafariQuest. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
