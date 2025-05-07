"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-300 to-blue-100 z-0" />

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1
              className="text-5xl md:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Discover your dream home now
            </motion.h1>
            <motion.p
              className="text-lg mb-8 text-gray-700 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Lorem ipsum dolor sit amet consectetur fermentum eget fringilla
              egestas a aliquam arcu arcu nunc pretium id semper ut volutpat. Id
              gravida aenean.
            </motion.p>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button size="lg">Start exploring</Button>
              <Button variant="secondary" size="lg">
                Post properties
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-full md:w-2/3 h-2/3 z-0">
        <img
          src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Luxury Home"
          className="w-full h-full object-cover object-bottom rounded-tl-3xl"
        />
      </div>
    </div>
  );
};

export default Hero;
