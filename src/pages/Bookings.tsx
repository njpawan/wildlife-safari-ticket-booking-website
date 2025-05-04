
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin, Ticket, X } from 'lucide-react';
import { toast } from "sonner";

// Define Booking type
interface Booking {
  id: string;
  safariId: string;
  safariTitle: string;
  location: string;
  image: string;
  date: string;
  travelers: number;
  totalAmount: number;
  status: "confirmed" | "pending" | "completed";
}

// Sample booking data
const bookings: Booking[] = [
  {
    id: "B001",
    safariId: "serengeti",
    safariTitle: "Serengeti Migration Safari",
    location: "Tanzania",
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=600&q=80",
    date: "June 15, 2025",
    travelers: 2,
    totalAmount: 3998,
    status: "confirmed"
  },
  {
    id: "B002",
    safariId: "maasai",
    safariTitle: "Maasai Mara Experience",
    location: "Kenya",
    image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=600&q=80",
    date: "August 22, 2025",
    travelers: 4,
    totalAmount: 8796,
    status: "pending"
  }
];

const Bookings: React.FC = () => {
  const handleCancelBooking = (bookingId: string) => {
    // In a real app, this would send a cancellation request to a server
    toast.success("Booking cancelled successfully", {
      description: "Your booking has been cancelled and you'll receive an email confirmation."
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-safari-800 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-2">My Bookings</h1>
            <p className="text-lg">Manage your safari adventures</p>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            {bookings.length > 0 ? (
              <div className="space-y-6">
                {bookings.map(booking => (
                  <div 
                    key={booking.id} 
                    className="bg-white rounded-lg shadow-sm border overflow-hidden"
                  >
                    <div className="md:flex">
                      <div className="md:w-1/4 h-48 md:h-auto">
                        <img 
                          src={booking.image} 
                          alt={booking.safariTitle}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 flex-1">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                          <div>
                            <div className="flex items-center space-x-2 mb-2">
                              <Ticket className="h-5 w-5 text-safari-600" />
                              <span className="text-sm text-muted-foreground">Booking #{booking.id}</span>
                            </div>
                            <h2 className="text-xl font-semibold mb-1">{booking.safariTitle}</h2>
                            <div className="flex items-center text-muted-foreground mb-4">
                              <MapPin className="h-4 w-4 mr-1" />
                              <span>{booking.location}</span>
                            </div>
                          </div>
                          <div className="mt-4 md:mt-0 md:text-right">
                            <div className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                              booking.status === 'confirmed' 
                                ? 'bg-green-100 text-green-800'
                                : booking.status === 'pending'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-blue-100 text-blue-800'
                            }`}>
                              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-4 mt-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Date</p>
                            <div className="flex items-center mt-1">
                              <CalendarDays className="h-4 w-4 mr-2 text-safari-600" />
                              <span>{booking.date}</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Travelers</p>
                            <div className="flex items-center mt-1">
                              <span>{booking.travelers} {booking.travelers === 1 ? 'person' : 'people'}</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Total Amount</p>
                            <div className="flex items-center mt-1 font-semibold">
                              ${booking.totalAmount}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-3 mt-6">
                          <Button 
                            variant="outline" 
                            className="border-safari-600 text-safari-700 hover:bg-safari-50"
                          >
                            View Details
                          </Button>
                          {booking.status !== "completed" && (
                            <Button 
                              variant="outline" 
                              className="border-red-600 text-red-700 hover:bg-red-50"
                              onClick={() => handleCancelBooking(booking.id)}
                            >
                              <X className="h-4 w-4 mr-2" />
                              Cancel Booking
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="bg-safari-100 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4">
                  <Ticket className="h-8 w-8 text-safari-600" />
                </div>
                <h2 className="text-2xl font-bold mb-2">No Bookings Yet</h2>
                <p className="text-muted-foreground mb-6">
                  You haven't booked any safaris yet. Start exploring our available adventures!
                </p>
                <Button className="bg-safari-600 hover:bg-safari-700" onClick={() => window.location.href = '/safaris'}>
                  Explore Safaris
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Bookings;
