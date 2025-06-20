"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
function Mission() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl overflow-hidden"
        >
          <Image
            src="/images/5.jpg"
            alt="People viewing a home"
            width={600}
            height={600}
            className="w-full h-auto object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-6"
        >
          {/* <div className="inline-flex items-center rounded-full bg-gray-100 px-4 py-2">
            <Star className="h-4 w-4 mr-2 text-gray-500" />
            <span className="text-sm font-medium">Our mission</span>
          </div> */}
          <div className="inline-flex items-center p-2 gap-2 bg-[#EEEFF1]  text-gray-700 rounded-full font-semibold text-sm mb-4">
            <div className="rounded-full bg-gray-400 p-2">
              <Star className="h-3 w-3 text-white" />
            </div>
            Our mission
          </div>

          <h2 className="text-4xl font-bold tracking-tight">
            We have only one goal: To help you bring your envisioned dream home
            to reality
          </h2>

          <p className="text-gray-600">
            To empower individuals and businesses by delivering exceptional real
            estate solutions that combine innovation, quality, and trust —
            creating spaces that inspire, communities that thrive, and
            investments that grow.
            <br />
            We strive to be a trusted partner in every step of your real estate
            journey, committed to transparency, sustainability, and unmatched
            customer satisfaction.
          </p>

          {/* <Button
            variant="default"
            className="rounded-full px-6 py-6 h-auto mt-4"
          >
            Start exploring
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button> */}
          {/* <div className=" items-center px-2 bg-black rounded-full inline-flex transform transition-transform duration-300 ease-in-out hover:scale-90 group hover:bg-neutral-800">
            <button className="rounded-full p-3  bg-black group group-hover:bg-neutral-800 text-white">
              Start exploring
            </button>
            <div className="rounded-full bg-white p-2 group">
              <IoMdArrowRoundForward className="h-4 w-4 text-black" />
            </div>
          </div> */}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Mission;
