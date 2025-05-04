
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  image: string;
  quote: string;
  safari: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "London, UK",
    image: "",
    quote: "The Serengeti safari exceeded all my expectations. The wildlife sightings were incredible, and our guide was incredibly knowledgeable. I'll never forget watching a pride of lions at sunset.",
    safari: "Serengeti Migration Safari"
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Toronto, Canada",
    image: "",
    quote: "Our family had an amazing time on the Kruger safari. The accommodations were comfortable, and we saw all of the Big Five! The kids are still talking about the elephants.",
    safari: "Kruger Big Five Adventure"
  },
  {
    id: 3,
    name: "Priya Sharma",
    location: "Mumbai, India",
    image: "",
    quote: "The Maasai Mara experience was truly life-changing. Learning about the Maasai culture while seeing such incredible wildlife was the perfect combination. Highly recommend!",
    safari: "Maasai Mara Experience"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-safari-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Adventurers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Hear from travelers who have experienced
            our safari adventures firsthand.
          </p>
        </div>
        
        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/1 lg:basis-4/5">
                <Card className="border-none shadow-sm">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src={testimonial.image} />
                          <AvatarFallback className="bg-safari-200 text-safari-700 text-xl">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <div>
                        <blockquote className="text-lg italic mb-4">
                          "{testimonial.quote}"
                        </blockquote>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                          <p className="text-sm text-safari-600 mt-2">{testimonial.safari}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
