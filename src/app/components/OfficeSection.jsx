"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiSolidHomeAlt2 } from "react-icons/bi";
import { IoMdArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

const officeCard = {
  hidden: { opacity: 0, y: 30 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.6,
    },
  }),
};
function OfficeSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="md:mx-6 lg:mx-20"
    >
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-[#3A9188] text-white rounded-4xl">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            {/* <div className="inline-flex items-center rounded-full bg-gray-800 px-4 py-2 mb-6">
              <Star className="h-4 w-4 mr-2 text-gray-400" />
              <span className="text-sm font-medium">Our offices</span>
            </div> */}
            <div className="inline-flex items-center p-2 gap-2 bg-teal-500 text-white rounded-full font-semibold text-sm mb-4">
              <div className="rounded-full bg-teal-400 p-2">
                <BiSolidHomeAlt2 className="h-3 w-3 text-white" />
              </div>
              Our offices
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Your dream property awaits!
            </h2>

            <p className="text-gray-200 max-w-2xl">
              Drop by our office—where your property journey begins with a
              friendly smile and expert guidance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={officeCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="rounded-3xl overflow-hidden"
            >
              <div className="relative h-80">
                <Image
                  src="/images/p0.jpg"
                  alt="San Francisco Office"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8 space-y-6">
                <h3 className="text-2xl font-semibold">Nigeria</h3>
                {/* <p className="text-gray-200">
                  287B Akin Olugbade Street Victoria Island, Lagos Lagos State
                  Nigeria
                </p> */}

                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 mr-3"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    {/* <span>Info@exertproperties.com</span> */}
                    <Image
                      src="/images/info.png"
                      alt="Office Map"
                      className="w-48 h-6"
                      width={1000}
                      height={1000}
                    />
                  </div>

                  <div className="flex items-center">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 mr-3"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>+2347025012424, +2348180000567</span> */}
                    <Image
                      src="/images/c22.png"
                      alt="Office Map"
                      width={1000}
                      height={1000}
                      className="w-56"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={officeCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="rounded-3xl overflow-hidden"
            >
              <div className="relative h-80">
                <Image
                  src="/images/p2-4.jpg"
                  alt="Los Angeles Office"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8 space-y-6">
                <h3 className="text-2xl font-semibold">United States</h3>
                {/* <p className="text-gray-200">
                  3403 Pistoia Trail, Temple Texas 776502 United States
                </p> */}

                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 mr-3"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    {/* <span>Info@exertproperties.com</span> */}
                    <Image
                      src="/images/info.png"
                      alt="Office Map"
                      className="w-48 h-6"
                      width={1000}
                      height={1000}
                    />
                  </div>

                  <div className="flex items-center">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 mr-3"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>+12549520712, +16465049826</span> */}
                    <Image
                      src="/images/c11.png"
                      alt="Office Map"
                      width={1000}
                      height={1000}
                      className="w-56"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex justify-center mt-12"
          >
            {/* <Button
              variant="outline"
              className="rounded-full px-6 py-6 h-auto border-white text-white hover:bg-white hover:text-black"
            >
              Contact us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button> */}
            <Link href="/contact">
              <div className=" items-center px-2 bg-white rounded-full inline-flex transform transition-transform duration-300 ease-in-out hover:scale-90 group hover:bg-gray-300">
                <button className="rounded-full p-2 font-semibold group group-hover:bg-gray-300 text-black">
                  Contact us
                </button>
                <div className="rounded-full bg-[#3A9188] p-2 group">
                  <IoMdArrowRoundForward className="h-4 w-4 text-white" />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default OfficeSection;
