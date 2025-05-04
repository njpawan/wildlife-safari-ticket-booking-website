
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from 'lucide-react';
import { toast } from "sonner";

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a server
    toast.success("Message sent!", {
      description: "We've received your message and will get back to you shortly.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-safari-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Have questions about our safaris? Want to customize your adventure?
              Our team is here to help you plan the perfect safari experience.
            </p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">First Name</label>
                      <Input required placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Last Name</label>
                      <Input required placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <Input type="email" required placeholder="your@email.com" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Subject</label>
                    <Input required placeholder="How can we help you?" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Message</label>
                    <Textarea 
                      required 
                      placeholder="Please provide details about your inquiry..." 
                      className="min-h-[150px]"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-safari-600 hover:bg-safari-700">
                    Send Message
                  </Button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="bg-muted p-6 rounded-lg mb-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-safari-100 p-2 rounded-full text-safari-700 mt-1">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Our Office</h3>
                        <address className="text-muted-foreground not-italic">
                          123 Safari Road<br />
                          Nairobi, Kenya<br />
                          East Africa
                        </address>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-safari-100 p-2 rounded-full text-safari-700 mt-1">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-muted-foreground">+254 123 456 789</p>
                        <p className="text-muted-foreground">+1 234 567 8900 (US office)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-safari-100 p-2 rounded-full text-safari-700 mt-1">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-muted-foreground">info@safariquest.com</p>
                        <p className="text-muted-foreground">bookings@safariquest.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">Office Hours</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM EAT</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 4:00 PM EAT</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Our emergency support line is available 24/7 for clients on safari.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-xl font-bold mb-4">Our Locations</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                      <h3 className="font-medium mb-1">Kenya</h3>
                      <p className="text-sm text-muted-foreground">Main Office</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                      <h3 className="font-medium mb-1">Tanzania</h3>
                      <p className="text-sm text-muted-foreground">Safari Operations</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                      <h3 className="font-medium mb-1">South Africa</h3>
                      <p className="text-sm text-muted-foreground">Regional Office</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                      <h3 className="font-medium mb-1">USA</h3>
                      <p className="text-sm text-muted-foreground">Bookings Office</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-8">Find Us On The Map</h2>
            {/* In a real app, this would be a Google Map or similar */}
            <div className="h-[400px] bg-white rounded-lg flex items-center justify-center border">
              <p className="text-muted-foreground">
                Map would be displayed here in a production environment
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
