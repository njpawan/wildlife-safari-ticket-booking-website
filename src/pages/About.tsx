
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[300px]">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=1600&q=80" 
              alt="Safari landscape"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl text-white">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">About SafariQuest</h1>
                <p className="text-lg">
                  Your gateway to authentic African safari experiences since 2010
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  SafariQuest was founded by a team of passionate wildlife conservationists and travel enthusiasts with a shared vision: to create extraordinary safari experiences that connect people with nature while supporting conservation efforts and local communities.
                </p>
                <p className="text-muted-foreground mb-4">
                  What began as a small operation with just two safari vehicles has grown into one of Africa's most respected safari companies, offering a diverse range of expertly guided wildlife experiences across multiple countries.
                </p>
                <p className="text-muted-foreground">
                  Our commitment to sustainable tourism and authentic experiences has earned us multiple awards and the trust of thousands of travelers from around the world.
                </p>
              </div>
              <div className="relative h-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=600&q=80"
                  alt="Safari guide"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-12">Our Core Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Conservation First</h3>
                <p className="text-muted-foreground">
                  We believe that responsible tourism can be a powerful force for conservation. A portion of every safari booking goes directly to wildlife conservation initiatives and community projects.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Authentic Experiences</h3>
                <p className="text-muted-foreground">
                  We strive to create genuine connections between our guests and the natural world. Our guides share not just facts, but stories and traditions that bring Africa's wilderness to life.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Local Empowerment</h3>
                <p className="text-muted-foreground">
                  We hire locally and invest in training programs to ensure that tourism benefits the communities where we operate. Many of our best guides started as trainees in our development program.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Sustainable Operations</h3>
                <p className="text-muted-foreground">
                  From solar-powered camps to eliminating single-use plastics, we continuously strive to minimize our ecological footprint and operate in harmony with nature.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <p className="text-muted-foreground">
                  We believe that knowledge leads to conservation. Our safaris are designed not just to show wildlife, but to educate about ecosystems, conservation challenges, and solutions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Safety & Quality</h3>
                <p className="text-muted-foreground">
                  We never compromise on the safety of our guests or the quality of our experiences. Our vehicles are meticulously maintained, and our guides undergo rigorous training.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-12">Meet Our Team</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="relative h-64 mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1487252665478-49b61b47f302?w=600&q=80" 
                    alt="Team Member" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="font-semibold">David Njabu</h3>
                <p className="text-sm text-muted-foreground">Founder & CEO</p>
              </div>
              <div className="text-center">
                <div className="relative h-64 mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=600&q=80" 
                    alt="Team Member" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="font-semibold">Sarah Kimathi</h3>
                <p className="text-sm text-muted-foreground">Head Guide & Conservation Director</p>
              </div>
              <div className="text-center">
                <div className="relative h-64 mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=600&q=80" 
                    alt="Team Member" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="font-semibold">Michael Omondi</h3>
                <p className="text-sm text-muted-foreground">Operations Manager</p>
              </div>
              <div className="text-center">
                <div className="relative h-64 mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=600&q=80" 
                    alt="Team Member" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="font-semibold">Emily Wangari</h3>
                <p className="text-sm text-muted-foreground">Customer Experience Director</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-safari-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-6">Our Commitment to Conservation</h2>
            <p className="max-w-3xl mx-auto mb-8">
              Since our founding, we've contributed over $500,000 to conservation projects across Africa, 
              helping to protect endangered species and their habitats for future generations.
            </p>
            <Separator className="bg-white/20 mb-8 max-w-md mx-auto" />
            <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div>
                <h3 className="text-4xl font-bold text-sand-300">15+</h3>
                <p className="text-white/80">Conservation projects supported</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-sand-300">10,000+</h3>
                <p className="text-white/80">Happy safari participants</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-sand-300">4</h3>
                <p className="text-white/80">African countries</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
