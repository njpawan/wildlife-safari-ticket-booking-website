
import React from 'react';
import { Shield, ThumbsUp, Award, Users } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm">
      <div className="bg-safari-100 p-3 rounded-full mb-4 text-safari-700">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Safe Adventures",
      description: "Safety is our top priority. All tours include medical emergency coverage and experienced guides."
    },
    {
      icon: <ThumbsUp className="h-6 w-6" />,
      title: "Sustainable Tourism",
      description: "We practice responsible tourism that respects wildlife and supports local communities."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Expert Guides",
      description: "Our certified guides have extensive knowledge about local wildlife and ecosystems."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Small Groups",
      description: "We keep our groups small to ensure a personalized and intimate safari experience."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose SafariQuest</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            With over 15 years of experience organizing safaris in Africa, we pride ourselves
            on creating unforgettable wildlife experiences that respect nature and local communities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Feature 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
