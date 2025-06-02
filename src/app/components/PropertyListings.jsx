"use client";
import React from "react";
import PropertyCard from "@/components/ui/PropertyCard";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BiSolidHomeAlt2 } from "react-icons/bi";
const PropertyListings = ({ properties }) => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* <div className="flex items-center mb-6">
          <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
            All properties
          </span>
        </div> */}
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="inline-flex items-center p-2 gap-2 bg-[#EEEFF1]  text-gray-700 rounded-full font-semibold text-sm">
            <div className="rounded-full bg-gray-400 p-2">
              <BiSolidHomeAlt2 className="h-3 w-3 text-white" />
            </div>
            All properties
          </div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Check on all properties we have available
          </motion.h2>

          <p className="text-gray-600 mb-12 max-w-2xl text-center">
            Explore our complete portfolio of handpicked properties — designed
            to match every dream and investment goal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12 lg:px-20">
          {properties.map((property) => (
            <div key={property.id}>
              <PropertyCard property={property} />
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-4">
          <Button className="rounded-full">Start exploring</Button>
          <Button variant="secondary" className="rounded-full">
            Browse all properties
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyListings;
