"use client";
import React from "react";
import PropertyCard from "@/components/ui/PropertyCard";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BiSolidHomeAlt2 } from "react-icons/bi";
import Link from "next/link";
import { fadeIn, staggerContainer } from "@/utils/motion";

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center p-2 gap-2 bg-[#EEEFF1]  text-gray-700 rounded-full font-semibold text-sm"
          >
            <div className="rounded-full bg-gray-400 p-2">
              <BiSolidHomeAlt2 className="h-3 w-3 text-white" />
            </div>
            All properties
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Check on all properties we have available
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-600 mb-12 max-w-2xl text-center"
          >
            Explore our complete portfolio of handpicked properties — designed
            to match every dream and investment goal.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12 lg:px-20"
        >
          {properties.map((property, i) => (
            <motion.div
              key={property.id}
              variants={fadeIn("up", "tween", 0.1 * i, 1)}
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center space-x-4">
          <Link href="/projects">
            <Button className="rounded-full cursor-pointer bg-[#3A9188] hover:bg-teal-700">
              Start exploring
            </Button>
          </Link>
          <Link href="/gallery">
            <Button variant="secondary" className="rounded-full cursor-pointer">
              Browse all properties
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyListings;
