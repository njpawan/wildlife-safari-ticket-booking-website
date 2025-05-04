
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Ticket } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=1600&q=80" 
          alt="Safari landscape with animals"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            Experience the Wilderness <span className="text-sand-300">Up Close</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100 animate-fade-in" style={{animationDelay: "0.2s"}}>
            Book unforgettable safari adventures across Africa's most spectacular wildlife reserves. 
            Witness majestic animals in their natural habitat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
            <Link to="/safaris">
              <Button size="lg" className="bg-safari-600 hover:bg-safari-700 text-white px-8 py-6">
                <Ticket className="mr-2 h-5 w-5" />
                Book a Safari
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white hover:bg-white/20 text-white px-8 py-6">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
