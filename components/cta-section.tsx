"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from '@/components/motion';

export function CtaSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background particles/feathers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, 100, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            <div 
              className="absolute w-4 h-4 rounded-full bg-orange-500/20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          </motion.div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white font-orbitron mb-4">
                  Ready for some <span className="text-orange-500">crazy</span> fun?
                </h2>
                <p className="text-gray-300 mb-8">
                  Join millions of players already enjoying the wildest chicken adventure game! Available now on PC, consoles, and mobile.
                </p>
                
                <div className="space-y-4">
                  <Button 
                    asChild 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-medium"
                  >
                    <a href="https://crazychicken3d.com/" target="_blank" rel="noopener noreferrer">
                      Play Now
                    </a>
                  </Button>
                  
                  <div className="pt-4 border-t border-gray-700">
                    <p className="text-gray-400 text-sm mb-2">Available on:</p>
                    <div className="flex space-x-4">
                      <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                        <span className="font-semibold text-white">PC</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                        <span className="font-semibold text-white">PS</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                        <span className="font-semibold text-white">XB</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                        <span className="font-semibold text-white">NS</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                        <span className="font-semibold text-white">M</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="relative h-64 md:h-full">
              <Image
                src="https://images.pexels.com/photos/6498990/pexels-photo-6498990.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Crazy Chicken 3D Game"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm p-3 rounded-lg">
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className="w-4 h-4 text-yellow-400 fill-current" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-white text-sm">5.0 (2.3k reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white font-orbitron mb-6">
            Join Our Community
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Discord', 'Twitter', 'Instagram', 'YouTube'].map((platform) => (
              <a 
                key={platform} 
                href="https://crazychicken3d.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
              >
                <span className="text-white">{platform}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}