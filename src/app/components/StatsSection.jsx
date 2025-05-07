"use client";
import React from "react";
import { motion } from "framer-motion";

const StatsSection = () => {
  return (
    <div className="p-2 md:p-10 lg:p-16 bg-[#fafafb]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-10 lg:gap-2">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="font-normal text-gray-500">Homes purchased</h3>
            <p className="text-6xl font-bold">
              10k<span className="text-gray-500">+</span>
            </p>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur fermentum
            </p>
          </motion.div>

          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-normal text-gray-500">Published properties</h3>
            <p className="text-6xl font-bold">
              200<span className="text-gray-500">k</span>
            </p>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur fermentum
            </p>
          </motion.div>

          <motion.div
            className="space-y-4 col-span-2 flex flex-col md:items-end bg-white p-10 rounded-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4">
              <div className="w-20">
                <img
                  src="https://images.pexels.com/photos/5717632/pexels-photo-5717632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Sophie Moore"
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg font-semibold">
                  "If you wanna sell fast, call John Carter"
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur ultrices rutrum fusce
                  dui nisl neque placerat velit.
                </p>
                <p className="text-gray-500">Sophie Moore, NY</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
