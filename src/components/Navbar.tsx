
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Calendar, Ticket } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-background/95 backdrop-blur-sm sticky top-0 z-50 w-full border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-safari-600 p-1 rounded-md">
            <Ticket className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold text-safari-800">SafariQuest</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/safaris" className="text-foreground/80 hover:text-foreground transition-colors">
            Safaris
          </Link>
          <Link to="/about" className="text-foreground/80 hover:text-foreground transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-foreground/80 hover:text-foreground transition-colors">
            Contact
          </Link>
        </div>
        
        <div className="flex items-center space-x-3">
          <Link to="/bookings">
            <Button variant="outline" size="sm" className="hidden md:flex gap-2">
              <Calendar className="h-4 w-4" />
              My Bookings
            </Button>
          </Link>
          <Link to="/safaris">
            <Button size="sm" className="bg-safari-600 hover:bg-safari-700">
              Explore Safaris
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
