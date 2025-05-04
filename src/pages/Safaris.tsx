
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { CalendarDays, Clock, Filter, Search, Users } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

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
}

// Sample safari data (expanded)
const allSafaris: Safari[] = [
  {
    id: "serengeti",
    title: "Serengeti Migration Safari",
    location: "Tanzania",
    description: "Witness the great migration with millions of wildebeest and zebras crossing the Serengeti plains.",
    price: 1999,
    duration: "5 days",
    groupSize: "6-12 people",
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=600&q=80",
    popular: true,
    category: "Wildlife"
  },
  {
    id: "kruger",
    title: "Kruger Big Five Adventure",
    location: "South Africa",
    description: "Track lions, elephants, buffalo, leopards and rhinos in South Africa's premier national park.",
    price: 1799,
    duration: "4 days",
    groupSize: "4-8 people",
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=600&q=80",
    category: "Wildlife"
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

const Safaris: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([1000, 3000]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filteredSafaris, setFilteredSafaris] = useState(allSafaris);
  
  // Extract unique locations and categories for filters
  const locations = [...new Set(allSafaris.map(safari => safari.location))];
  const categories = [...new Set(allSafaris.map(safari => safari.category))];

  // Handle filter change
  const applyFilters = () => {
    let result = allSafaris;
    
    // Apply search term filter
    if (searchTerm) {
      result = result.filter(safari => 
        safari.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        safari.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        safari.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply price range filter
    result = result.filter(safari => 
      safari.price >= priceRange[0] && safari.price <= priceRange[1]
    );
    
    // Apply location filter
    if (selectedLocations.length > 0) {
      result = result.filter(safari => selectedLocations.includes(safari.location));
    }
    
    // Apply category filter
    if (selectedCategories.length > 0) {
      result = result.filter(safari => selectedCategories.includes(safari.category));
    }
    
    setFilteredSafaris(result);
  };

  const handleLocationChange = (location: string) => {
    setSelectedLocations(prev => {
      if (prev.includes(location)) {
        return prev.filter(loc => loc !== location);
      } else {
        return [...prev, location];
      }
    });
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(cat => cat !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  // Reset filters
  const resetFilters = () => {
    setSearchTerm("");
    setPriceRange([1000, 3000]);
    setSelectedLocations([]);
    setSelectedCategories([]);
    setFilteredSafaris(allSafaris);
  };

  // Apply filters when any filter changes
  React.useEffect(() => {
    applyFilters();
  }, [searchTerm, priceRange, selectedLocations, selectedCategories]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-safari-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Explore Our Safaris</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Discover our diverse range of safari adventures across Africa's most spectacular wilderness areas.
            </p>
          </div>
        </section>
        
        <section className="py-10 bg-muted">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filter Sidebar */}
              <div className="w-full lg:w-1/4">
                <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                      <Filter className="h-5 w-5" />
                      Filters
                    </h2>
                    <Button variant="ghost" size="sm" onClick={resetFilters}>Reset</Button>
                  </div>
                  
                  {/* Search */}
                  <div className="mb-6">
                    <h3 className="font-medium mb-2">Search</h3>
                    <div className="relative">
                      <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input 
                        placeholder="Search safaris..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-8"
                      />
                    </div>
                  </div>
                  
                  {/* Price Range */}
                  <div className="mb-6">
                    <h3 className="font-medium mb-2">Price Range</h3>
                    <Slider 
                      defaultValue={[1000, 3000]}
                      min={1000}
                      max={3000}
                      step={100}
                      value={priceRange}
                      onValueChange={setPriceRange}
                    />
                    <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                  
                  {/* Location */}
                  <div className="mb-6">
                    <h3 className="font-medium mb-2">Location</h3>
                    <div className="space-y-2">
                      {locations.map(location => (
                        <div key={location} className="flex items-center">
                          <Checkbox 
                            id={`location-${location}`} 
                            checked={selectedLocations.includes(location)}
                            onCheckedChange={() => handleLocationChange(location)}
                          />
                          <Label htmlFor={`location-${location}`} className="ml-2">
                            {location}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Category */}
                  <div className="mb-6">
                    <h3 className="font-medium mb-2">Category</h3>
                    <div className="space-y-2">
                      {categories.map(category => (
                        <div key={category} className="flex items-center">
                          <Checkbox 
                            id={`category-${category}`} 
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={() => handleCategoryChange(category)}
                          />
                          <Label htmlFor={`category-${category}`} className="ml-2">
                            {category}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Safari Listings */}
              <div className="w-full lg:w-3/4">
                <div className="flex justify-between items-center mb-6">
                  <p className="text-muted-foreground">
                    Showing <span className="font-medium text-foreground">{filteredSafaris.length}</span> safaris
                  </p>
                  <Select defaultValue="recommended">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recommended">Recommended</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="duration">Duration</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredSafaris.length > 0 ? (
                    filteredSafaris.map(safari => (
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
                          <Badge className="absolute bottom-2 left-2" variant="outline">
                            {safari.category}
                          </Badge>
                        </div>
                        <CardContent className="pt-6">
                          <h3 className="text-xl font-semibold mb-2">{safari.title}</h3>
                          <p className="text-sm text-muted-foreground mb-4">{safari.location}</p>
                          <p className="mb-4 line-clamp-2">{safari.description}</p>
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
                    ))
                  ) : (
                    <div className="col-span-2 py-10 text-center">
                      <p className="text-muted-foreground text-lg">No safaris found matching your criteria.</p>
                      <Button variant="link" onClick={resetFilters}>Clear filters</Button>
                    </div>
                  )}
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

export default Safaris;
