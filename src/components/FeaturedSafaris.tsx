
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CalendarDays, Clock, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

// Define a type for our safari data
interface Safari {
  id: string;
  title: string;
  location: string;
  description: string;
  price: number;
  duration: string;
  groupSize: string;
  image: string;
  popular?: boolean;
}

// Sample safari data
const safaris: Safari[] = [
  {
    id: "serengeti",
    title: "Serengeti Migration Safari",
    location: "Tanzania",
    description: "Witness the great migration with millions of wildebeest and zebras crossing the Serengeti plains.",
    price: 1999,
    duration: "5 days",
    groupSize: "6-12 people",
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=600&q=80",
    popular: true
  },
  {
    id: "kruger",
    title: "Kruger Big Five Adventure",
    location: "South Africa",
    description: "Track lions, elephants, buffalo, leopards and rhinos in South Africa's premier national park.",
    price: 1799,
    duration: "4 days",
    groupSize: "4-8 people",
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=600&q=80"
  },
  {
    id: "maasai",
    title: "Maasai Mara Experience",
    location: "Kenya",
    description: "Explore the world-renowned Maasai Mara and meet local Maasai warriors.",
    price: 2199,
    duration: "6 days",
    groupSize: "6-10 people",
    image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=600&q=80",
    popular: true
  }
];

const FeaturedSafaris: React.FC = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Safari Adventures</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Embark on a journey of discovery with our most popular safari experiences.
            Each safari is led by experienced guides to ensure an unforgettable adventure.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {safaris.map(safari => (
            <Card key={safari.id} className="overflow-hidden safari-card-hover">
              <div className="relative h-48">
                <img 
                  src={safari.image} 
                  alt={safari.title}
                  className="w-full h-full object-cover"
                />
                {safari.popular && (
                  <Badge className="absolute top-2 right-2 bg-safari-500">
                    Popular
                  </Badge>
                )}
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">{safari.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{safari.location}</p>
                <p className="mb-4">{safari.description}</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{safari.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{safari.groupSize}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <CalendarDays className="h-4 w-4" />
                    <span>Year-round</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between border-t pt-4">
                <div className="font-semibold">
                  <span className="text-lg text-safari-700">${safari.price}</span>
                  <span className="text-sm text-muted-foreground"> per person</span>
                </div>
                <Link to={`/safaris/${safari.id}`}>
                  <Button className="bg-sand-600 hover:bg-sand-700 text-white">
                    View Details
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/safaris">
            <Button variant="outline" size="lg" className="border-safari-600 text-safari-700 hover:bg-safari-50">
              View All Safaris
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSafaris;
