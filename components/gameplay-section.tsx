"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { motion } from '@/components/motion';

const gameModes = [
  {
    id: "adventure",
    title: "Adventure Mode",
    description: "Embark on an epic journey as you navigate through increasingly challenging levels. Collect golden eggs, defeat predators, and become the legendary Super Chicken!",
    image: "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1600",
    features: ["30+ Campaign Levels", "Story-driven", "Boss Battles", "Hidden Collectibles"]
  },
  {
    id: "multiplayer",
    title: "Multiplayer Mayhem",
    description: "Challenge up to 8 friends in frantic multiplayer modes! Compete in races, capture-the-egg, and the fan-favorite 'King of the Coop' mode where only one chicken can rule the roost.",
    image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1600",
    features: ["8-Player Support", "5 Game Modes", "Voice Chat", "Custom Matches"]
  },
  {
    id: "sandbox",
    title: "Sandbox Farm",
    description: "Let your creativity run wild in your own customizable farm! Build structures, create obstacle courses, and invite friends to explore your chicken paradise.",
    image: "https://images.pexels.com/photos/3045685/pexels-photo-3045685.jpeg?auto=compress&cs=tinysrgb&w=1600",
    features: ["Unlimited Building", "Weather Control", "Sharable Creations", "NPC Interactions"]
  }
];

export function GameplaySection() {
  const [activeTab, setActiveTab] = useState("adventure");

  return (
    <section id="gameplay" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-white">
            <span className="text-orange-500">Gameplay</span> Modes
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Multiple ways to enjoy the crazy chicken experience, from solo adventures to multiplayer madness!
          </p>
        </motion.div>

        <Tabs defaultValue="adventure" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-800/70 p-1">
              {gameModes.map((mode) => (
                <TabsTrigger 
                  key={mode.id} 
                  value={mode.id}
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white font-medium px-6"
                >
                  {mode.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {gameModes.map((mode) => (
            <TabsContent key={mode.id} value={mode.id}>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
                  <Image 
                    src={mode.image}
                    alt={mode.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-orange-500 hover:bg-orange-600 text-white font-medium">
                      {mode.title}
                    </Badge>
                  </div>
                </div>
                
                <div className="text-white p-4">
                  <h3 className="text-2xl font-bold mb-4 font-orbitron">{mode.title}</h3>
                  <p className="text-gray-300 text-lg mb-6">{mode.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {mode.features.map((feature, index) => (
                      <div 
                        key={index}
                        className="flex items-center bg-gray-700/50 p-3 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                        <span className="text-gray-200">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <a 
                      href="https://crazychicken3d.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      Play This Mode
                    </a>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}