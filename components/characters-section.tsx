"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Badge } from "@/components/ui/badge";
import { motion } from '@/components/motion';

const characters = [
  {
    id: "clucky",
    name: "Clucky",
    role: "The Hero",
    description: "Our main protagonist with lightning-fast reflexes and an uncanny ability to find golden eggs. His signature red comb is recognized throughout the chicken world.",
    image: "https://images.pexels.com/photos/1405930/pexels-photo-1405930.jpeg?auto=compress&cs=tinysrgb&w=1600",
    stats: {
      speed: 85,
      strength: 60,
      intelligence: 75,
      special: 90
    }
  },
  {
    id: "henrietta",
    name: "Henrietta",
    role: "The Genius",
    description: "The brains behind the operation. With her special technologically enhanced wings, she can build gadgets to help the team overcome obstacles.",
    image: "https://images.pexels.com/photos/6897077/pexels-photo-6897077.jpeg?auto=compress&cs=tinysrgb&w=1600",
    stats: {
      speed: 65,
      strength: 50,
      intelligence: 95,
      special: 80
    }
  },
  {
    id: "colonel",
    name: "Colonel Peckington",
    role: "The Veteran",
    description: "A battle-hardened rooster with years of experience. His powerful crow can stun enemies, and his leadership inspires other chickens to fight harder.",
    image: "https://images.pexels.com/photos/7260250/pexels-photo-7260250.jpeg?auto=compress&cs=tinysrgb&w=1600",
    stats: {
      speed: 60,
      strength: 90,
      intelligence: 80,
      special: 75
    }
  },
];

export function CharactersSection() {
  const [activeCharacter, setActiveCharacter] = useState(characters[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCharacterChange = (character: any) => {
    if (character.id === activeCharacter.id) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setActiveCharacter(character);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section id="characters" className="py-24 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-white">
            Meet The <span className="text-orange-500">Characters</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            A cast of feathered heroes, each with unique abilities and personalities!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {characters.map((character) => (
            <div 
              key={character.id}
              onClick={() => handleCharacterChange(character)}
              className={`cursor-pointer rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                character.id === activeCharacter.id 
                  ? 'border-orange-500 scale-105 shadow-lg shadow-orange-500/20' 
                  : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <div className="relative aspect-[3/4]">
                <Image 
                  src={character.image}
                  alt={character.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-xl font-bold font-orbitron">{character.name}</h3>
                  <Badge className="mt-1 bg-orange-500">{character.role}</Badge>
                </div>
              </div>
            </div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isAnimating ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold font-orbitron text-orange-500 mb-2">
                {activeCharacter.name}
              </h3>
              <Badge className="mb-4 bg-gray-700 text-gray-200">{activeCharacter.role}</Badge>
              
              <p className="text-gray-300 mb-6">{activeCharacter.description}</p>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Character Stats</h4>
                
                <div className="space-y-3">
                  {Object.entries(activeCharacter.stats).map(([stat, value]) => (
                    <div key={stat} className="space-y-1">
                      <div className="flex justify-between">
                        <span className="capitalize text-gray-300">{stat}</span>
                        <span className="text-orange-400">{value}/100</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"
                          style={{ width: `${value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="hidden md:block relative rounded-xl overflow-hidden aspect-square">
              <Image 
                src={activeCharacter.image}
                alt={activeCharacter.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}