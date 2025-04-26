"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from '@/components/motion';

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src="https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Immersive Game Background"
            fill
            priority
            className="object-cover brightness-[0.6]"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 z-10 pt-16 md:pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="font-orbitron text-4xl md:text-6xl font-bold leading-tight">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                CRAZY CHICKEN 3D
              </span>
              <span className="block mt-2 text-white text-2xl md:text-4xl">
                The Ultimate Feathered Adventure
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-lg">
              Join the wildest chicken adventure ever! Run, jump, and solve puzzles in this 
              action-packed 3D world full of feathered mayhem and egg-citing challenges.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button 
                asChild
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-medium"
              >
                <a href="https://crazychicken3d.com/" target="_blank" rel="noopener noreferrer">
                  Play Now
                </a>
              </Button>
              <Button 
                asChild
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
              >
                <a href="#gameplay">
                  Watch Gameplay
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block relative h-[500px] w-full rounded-xl overflow-hidden shadow-2xl transform -rotate-3"
          >
            <Image
              src="https://images.pexels.com/photos/5601135/pexels-photo-5601135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Crazy Chicken 3D Game"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="bg-black/50 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-white text-lg font-orbitron">
                  Experience the chaos. Feel the feathers.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white/80 text-sm mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <motion.div 
            className="w-1.5 h-3 bg-white rounded-full mt-1"
            animate={{ 
              y: [0, 12, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>
    </section>
  );
}