"use client";

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Gamepad2, Map, Egg, Medal, Users, Star } from 'lucide-react';
import { motion } from '@/components/motion';

const features = [
  {
    icon: <Gamepad2 className="h-10 w-10 text-orange-500" />,
    title: "Immersive 3D Gameplay",
    description: "Experience the world through the eyes of a chicken with stunning 3D graphics and responsive controls.",
  },
  {
    icon: <Map className="h-10 w-10 text-orange-500" />,
    title: "Expansive Open World",
    description: "Explore various environments from barnyard chaos to forest adventures, each with unique challenges.",
  },
  {
    icon: <Egg className="h-10 w-10 text-orange-500" />,
    title: "Egg-citing Power-ups",
    description: "Collect special eggs that grant temporary abilities like super speed, flying, or egg bombs.",
  },
  {
    icon: <Medal className="h-10 w-10 text-orange-500" />,
    title: "Achievement System",
    description: "Unlock achievements and collect golden feathers to prove your chicken mastery.",
  },
  {
    icon: <Users className="h-10 w-10 text-orange-500" />,
    title: "Multiplayer Modes",
    description: "Challenge friends in competitive races or team up to complete objectives together.",
  },
  {
    icon: <Star className="h-10 w-10 text-orange-500" />,
    title: "Regular Updates",
    description: "Enjoy frequent content updates with new levels, challenges, and seasonal events.",
  },
];

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section 
      id="features" 
      ref={sectionRef} 
      className="py-24 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-white">
            Game <span className="text-orange-500">Features</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Discover what makes Crazy Chicken 3D the most egg-citing adventure game on the market!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/80 transition-colors overflow-hidden group">
                <CardContent className="p-6">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 relative rounded-xl overflow-hidden"
        >
          <div className="aspect-video relative">
            <Image
              src="https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Crazy Chicken 3D Gameplay"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center p-8 bg-black/60 backdrop-blur-sm rounded-xl max-w-2xl">
                <h3 className="text-2xl font-bold text-white mb-4 font-orbitron">Revolutionary Chicken Physics</h3>
                <p className="text-gray-200">
                  Experience realistic feather dynamics and chicken movement patterns developed with our proprietary "Egg-gine" technology. Every wing flap and chicken dance feels authentic!
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}