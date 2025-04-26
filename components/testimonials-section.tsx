"use client";

import { useState } from 'react';
import Image from 'next/image';
import { StarIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from '@/components/motion';

const testimonials = [
  {
    id: 1,
    name: "Mike Johnson",
    role: "Casual Gamer",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1600",
    content: "The funniest game I've played in years! The chicken physics are surprisingly realistic, and the multiplayer mode has become a weekend tradition with my friends.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Game Streamer",
    avatar: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
    content: "My viewers absolutely love when I stream Crazy Chicken 3D! The sandbox mode allows for endless creative possibilities, and the physics-based fails always get big laughs.",
    rating: 5
  },
  {
    id: 3,
    name: "David Chen",
    role: "Game Reviewer",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
    content: "A surprisingly deep game with mechanics that are easy to learn but hard to master. The adventure mode offers a genuine challenge, and the art style is consistently charming.",
    rating: 4
  },
  {
    id: 4,
    name: "Emma Rodriguez",
    role: "Family Gamer",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    content: "My kids and I play together every evening. It's one of the few games that's genuinely fun for all ages. The split-screen mode is perfect for family game nights!",
    rating: 5
  },
];

const reviews = [
  { source: "GameSpot", rating: 9.2, quote: "Hilariously unpredictable gameplay" },
  { source: "IGN", rating: 8.8, quote: "Surprisingly addictive" },
  { source: "PC Gamer", rating: 87, quote: "Best party game of the year" },
  { source: "GameInformer", rating: 9, quote: "Clucking good fun" },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-white">
            Player <span className="text-orange-500">Reviews</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it - hear what our players are saying!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="bg-gray-800/70 border-gray-700 backdrop-blur-sm h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-orange-500 font-orbitron">
                      {review.rating}
                    </span>
                    <span className="text-2xl text-orange-500">/10</span>
                  </div>
                  <div className="mb-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon 
                        key={i} 
                        className="h-5 w-5 text-yellow-400" 
                        fill={i < Math.round(review.rating / 2) ? "currentColor" : "none"} 
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-3 italic">"{review.quote}"</p>
                  <p className="text-white font-medium">- {review.source}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="w-full flex-shrink-0 px-4"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex items-center mb-6">
                        <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4">
                          <Image 
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                          <p className="text-gray-400">{testimonial.role}</p>
                        </div>
                        <div className="ml-auto flex">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon 
                              key={i} 
                              className="h-5 w-5 text-yellow-400" 
                              fill={i < testimonial.rating ? "currentColor" : "none"} 
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-300 text-lg italic">"{testimonial.content}"</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? 'bg-orange-500' : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}