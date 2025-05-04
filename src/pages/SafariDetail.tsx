
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { 
  CalendarDays, 
  Clock, 
  Users, 
  MapPin, 
  ShieldCheck, 
  Camera, 
  Utensils, 
  Home,
  Calendar as CalendarIcon
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from 'date-fns';
import { toast } from "sonner";

// Define Safari type
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
  category: string;
  longDescription?: string;
  itinerary?: Array<{
    day: number;
    title: string;
    description: string;
  }>;
  includes?: string[];
  excludes?: string[];
}

// Sample safari data (expanded)
const allSafaris: Safari[] = [
  {
    id: "serengeti",
    title: "Serengeti Migration Safari",
    location: "Tanzania",
    description: "Witness the great migration with millions of wildebeest and zebras crossing the Serengeti plains.",
    longDescription: "Experience the breathtaking spectacle of the Great Migration, one of nature's most impressive wildlife events. Our Serengeti Migration Safari takes you deep into the heart of Tanzania's most famous national park to witness millions of wildebeest, zebras, and gazelles as they make their annual journey in search of fresh grazing and water. Led by experienced guides who know exactly where to position you for the best views, this safari offers unforgettable wildlife encounters in one of Africa's most diverse ecosystems.",
    price: 1999,
    duration: "5 days",
    groupSize: "6-12 people",
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=600&q=80",
    popular: true,
    category: "Wildlife",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Arusha",
        description: "Arrive at Kilimanjaro International Airport and transfer to your hotel in Arusha for an overnight stay. Pre-safari briefing with your guide."
      },
      {
        day: 2,
        title: "Arusha to Serengeti",
        description: "Early morning flight to Serengeti National Park. Afternoon game drive to spot wildlife. Overnight at a comfortable tented camp."
      },
      {
        day: 3,
        title: "Migration Tracking",
        description: "Full day tracking the migration herds. Witness river crossings (seasonal) or vast herds on the plains. Picnic lunch in the bush."
      },
      {
        day: 4,
        title: "Serengeti Exploration",
        description: "Continue exploring different areas of the Serengeti. Look for predators like lions, cheetahs, and leopards hunting. Optional hot air balloon safari."
      },
      {
        day: 5,
        title: "Departure",
        description: "Final morning game drive. Flight back to Arusha and transfer to the airport for your departure flight."
      }
    ],
    includes: [
      "All accommodations",
      "Transportation in a 4x4 safari vehicle",
      "Domestic flights",
      "Professional guide",
      "Park entrance fees",
      "All meals during the safari",
      "Bottled water",
      "Airport transfers"
    ],
    excludes: [
      "International flights",
      "Travel insurance",
      "Visa fees",
      "Personal items",
      "Tips and gratuities",
      "Optional activities"
    ]
  },
  {
    id: "kruger",
    title: "Kruger Big Five Adventure",
    location: "South Africa",
    description: "Track lions, elephants, buffalo, leopards and rhinos in South Africa's premier national park.",
    longDescription: "The Kruger Big Five Adventure offers wildlife enthusiasts the perfect opportunity to spot all of Africa's iconic Big Five animals: lions, leopards, elephants, rhinoceros, and Cape buffalo. South Africa's flagship national park spans nearly 2 million hectares and features diverse ecosystems that support an incredible array of wildlife beyond the Big Five. Our expert guides will track these magnificent animals while sharing insights about their behavior and the conservation efforts protecting them for future generations.",
    price: 1799,
    duration: "4 days",
    groupSize: "4-8 people",
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=600&q=80",
    category: "Wildlife",
    itinerary: [
      {
        day: 1,
        title: "Arrival at Kruger",
        description: "Pickup from Johannesburg or nearest airport. Transfer to your lodge on the border of Kruger National Park. Evening game drive."
      },
      {
        day: 2,
        title: "Big Five Tracking",
        description: "Early morning game drive to look for predators. Return for breakfast, then depart for a full day in the park searching for the Big Five."
      },
      {
        day: 3,
        title: "Bush Walk and Night Drive",
        description: "Morning bush walk with an armed ranger. Afternoon game drive followed by an exciting night drive to spot nocturnal animals."
      },
      {
        day: 4,
        title: "Departure",
        description: "Final morning game drive. Depart for Johannesburg or nearest airport."
      }
    ],
    includes: [
      "Accommodation in comfortable lodges",
      "Transportation in open safari vehicles",
      "Professional safari guide",
      "Park entrance fees",
      "All meals",
      "Bush walk",
      "Night drive",
      "Airport transfers"
    ],
    excludes: [
      "Flights to/from Johannesburg",
      "Travel insurance",
      "Personal items",
      "Tips for guides and staff",
      "Alcoholic beverages"
    ]
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
    popular: true,
    category: "Cultural"
  },
  {
    id: "okavango",
    title: "Okavango Delta Exploration",
    location: "Botswana",
    description: "Navigate the waterways of the Okavango Delta for a unique perspective on African wildlife.",
    price: 2499,
    duration: "7 days",
    groupSize: "4-8 people",
    image: "https://images.unsplash.com/photo-1501286353178-1ec871814838?w=600&q=80",
    category: "Adventure"
  },
  {
    id: "ngorongoro",
    title: "Ngorongoro Crater Safari",
    location: "Tanzania",
    description: "Descend into the Ngorongoro Crater, a UNESCO World Heritage Site with incredible biodiversity.",
    price: 1899,
    duration: "4 days",
    groupSize: "6-10 people",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=600&q=80",
    category: "Wildlife"
  },
  {
    id: "kilimanjaro",
    title: "Kilimanjaro Safari & Trek",
    location: "Tanzania",
    description: "Combine wildlife viewing with an ascent of Africa's highest mountain.",
    price: 2899,
    duration: "10 days",
    groupSize: "4-8 people",
    image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=600&q=80",
    popular: true,
    category: "Adventure"
  }
];

const SafariDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const safari = allSafaris.find(s => s.id === id);
  
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [travelers, setTravelers] = useState(2);
  
  if (!safari) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Safari Not Found</h1>
            <p className="mb-6">Sorry, we couldn't find the safari you're looking for.</p>
            <Button onClick={() => navigate('/safaris')}>
              View All Safaris
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const handleBooking = () => {
    if (!date) {
      toast.error("Please select a date");
      return;
    }
    
    if (travelers < 1) {
      toast.error("Please select at least 1 traveler");
      return;
    }
    
    // In a real app, this would navigate to a checkout page or add the safari to a cart
    toast.success("Safari booking initiated!", {
      description: `${safari.title} booked for ${format(date, 'PPP')} with ${travelers} travelers.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px]">
          <div className="absolute inset-0">
            <img 
              src={safari.image} 
              alt={safari.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl text-white">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{safari.title}</h1>
                <div className="flex items-center mb-4">
                  <MapPin className="h-5 w-5 mr-1" />
                  <span>{safari.location}</span>
                </div>
                <p className="text-lg">{safari.description}</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Safari Details */}
              <div className="w-full lg:w-2/3">
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="mb-6">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="gallery">Gallery</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-semibold mb-4">About This Safari</h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {safari.longDescription || safari.description}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <div className="bg-muted p-4 rounded-md text-center">
                        <Clock className="h-5 w-5 mx-auto mb-2 text-safari-600" />
                        <h3 className="font-medium">Duration</h3>
                        <p className="text-muted-foreground">{safari.duration}</p>
                      </div>
                      <div className="bg-muted p-4 rounded-md text-center">
                        <Users className="h-5 w-5 mx-auto mb-2 text-safari-600" />
                        <h3 className="font-medium">Group Size</h3>
                        <p className="text-muted-foreground">{safari.groupSize}</p>
                      </div>
                      <div className="bg-muted p-4 rounded-md text-center">
                        <CalendarDays className="h-5 w-5 mx-auto mb-2 text-safari-600" />
                        <h3 className="font-medium">Availability</h3>
                        <p className="text-muted-foreground">Year-round</p>
                      </div>
                      <div className="bg-muted p-4 rounded-md text-center">
                        <ShieldCheck className="h-5 w-5 mx-auto mb-2 text-safari-600" />
                        <h3 className="font-medium">Difficulty</h3>
                        <p className="text-muted-foreground">Easy</p>
                      </div>
                    </div>
                    
                    <div>
                      <h2 className="text-2xl font-semibold mb-4">Highlights</h2>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3">
                          <div className="bg-safari-100 p-2 rounded-full text-safari-600">
                            <Camera className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-medium">Wildlife Photography</h3>
                            <p className="text-muted-foreground">Capture stunning images of Africa's iconic wildlife.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-safari-100 p-2 rounded-full text-safari-600">
                            <Users className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-medium">Expert Guides</h3>
                            <p className="text-muted-foreground">Learn from experienced local guides with deep knowledge.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-safari-100 p-2 rounded-full text-safari-600">
                            <Utensils className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-medium">Authentic Cuisine</h3>
                            <p className="text-muted-foreground">Enjoy traditional meals prepared fresh daily.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-safari-100 p-2 rounded-full text-safari-600">
                            <Home className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-medium">Comfortable Accommodations</h3>
                            <p className="text-muted-foreground">Stay in well-appointed lodges or tented camps.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="itinerary">
                    <h2 className="text-2xl font-semibold mb-6">Safari Itinerary</h2>
                    
                    {safari.itinerary ? (
                      <div className="space-y-6">
                        {safari.itinerary.map((day) => (
                          <Card key={day.day} className="overflow-hidden">
                            <div className="bg-safari-700 text-white p-3">
                              <h3 className="font-semibold">Day {day.day}: {day.title}</h3>
                            </div>
                            <CardContent className="p-4">
                              <p className="text-muted-foreground">{day.description}</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted-foreground">
                        Detailed itinerary information will be provided upon booking confirmation.
                      </p>
                    )}
                  </TabsContent>
                  
                  <TabsContent value="details">
                    <h2 className="text-2xl font-semibold mb-6">Safari Details</h2>
                    
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-medium mb-3">What's Included</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {safari.includes ? (
                            safari.includes.map((item, index) => (
                              <li key={index} className="flex items-center gap-2">
                                <div className="text-green-500">✓</div>
                                <span>{item}</span>
                              </li>
                            ))
                          ) : (
                            <li className="flex items-center gap-2">
                              <div className="text-green-500">✓</div>
                              <span>Detailed inclusions will be provided upon booking.</span>
                            </li>
                          )}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-medium mb-3">What's Not Included</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {safari.excludes ? (
                            safari.excludes.map((item, index) => (
                              <li key={index} className="flex items-center gap-2">
                                <div className="text-red-500">✗</div>
                                <span>{item}</span>
                              </li>
                            ))
                          ) : (
                            <li className="flex items-center gap-2">
                              <div className="text-red-500">✗</div>
                              <span>Detailed exclusions will be provided upon booking.</span>
                            </li>
                          )}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-medium mb-3">What to Bring</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          <li className="flex items-center gap-2">
                            <div className="text-safari-600">•</div>
                            <span>Comfortable, neutral-colored clothing</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="text-safari-600">•</div>
                            <span>Sturdy walking shoes</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="text-safari-600">•</div>
                            <span>Sun hat and sunglasses</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="text-safari-600">•</div>
                            <span>Sunscreen and insect repellent</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="text-safari-600">•</div>
                            <span>Camera and binoculars</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="text-safari-600">•</div>
                            <span>Personal medications</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="gallery">
                    <h2 className="text-2xl font-semibold mb-6">Safari Gallery</h2>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <img 
                        src={safari.image} 
                        alt={safari.title}
                        className="w-full h-48 object-cover rounded-md"
                      />
                      <img 
                        src="https://images.unsplash.com/photo-1487252665478-49b61b47f302?w=600&q=80" 
                        alt="Safari landscape"
                        className="w-full h-48 object-cover rounded-md"
                      />
                      <img 
                        src="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=600&q=80" 
                        alt="Safari wildlife"
                        className="w-full h-48 object-cover rounded-md"
                      />
                      <img 
                        src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=600&q=80" 
                        alt="Safari landscape"
                        className="w-full h-48 object-cover rounded-md"
                      />
                      <img 
                        src="https://images.unsplash.com/photo-1501286353178-1ec871814838?w=600&q=80" 
                        alt="Safari wildlife"
                        className="w-full h-48 object-cover rounded-md"
                      />
                      <img 
                        src="https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=600&q=80" 
                        alt="Safari landscape"
                        className="w-full h-48 object-cover rounded-md"
                      />
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              
              {/* Booking Form */}
              <div className="w-full lg:w-1/3">
                <div className="bg-white p-6 rounded-lg shadow-sm border sticky top-24">
                  <h2 className="text-xl font-semibold mb-4">Book This Safari</h2>
                  <div className="space-y-4">
                    <div>
                      <p className="text-2xl font-bold text-safari-700">${safari.price}</p>
                      <p className="text-muted-foreground">per person</p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Select Date</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            disabled={(date) => 
                              date < new Date() || 
                              date > new Date(new Date().setFullYear(new Date().getFullYear() + 1))
                            }
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Number of Travelers</label>
                      <Input
                        type="number"
                        value={travelers}
                        onChange={(e) => setTravelers(Number(e.target.value))}
                        min={1}
                        max={20}
                      />
                    </div>
                    
                    <div className="pt-4">
                      <Button 
                        className="w-full bg-sand-600 hover:bg-sand-700 text-white" 
                        size="lg"
                        onClick={handleBooking}
                      >
                        Book Now
                      </Button>
                      <p className="text-xs text-muted-foreground text-center mt-2">
                        No payment required now. Reserve your spot.
                      </p>
                    </div>
                    
                    <div className="border-t pt-4 mt-4">
                      <h3 className="font-medium mb-2">Why Book With Us</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-sm">
                          <ShieldCheck className="h-4 w-4 text-safari-600" />
                          <span>Free cancellation up to 30 days before</span>
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <ShieldCheck className="h-4 w-4 text-safari-600" />
                          <span>Expert local guides</span>
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <ShieldCheck className="h-4 w-4 text-safari-600" />
                          <span>24/7 customer support</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SafariDetail;
