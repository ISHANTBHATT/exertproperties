import Image from "next/image";
import {
  Check,
  ArrowRight,
  CircleIcon,
  Search,
  Square,
  Bath,
  Bed,
  Car,
} from "lucide-react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";

const lists = [
  { li: "Expertise That Guides You" },
  { li: "Prime Properties, Carefully Curated" },
  { li: "Transparent Dealings, Every Step of the Way" },
  { li: "One-Stop Real Estate Solutions" },
  { li: "Client-Centric Approach" },
  { li: "Proven Track Record" },
];
export default function WhyUs() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full py-10 md:p-10 lg:p-16"
    >
      <div className="w-full container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="relative"
          >
            <div className="bg-white rounded-3xl overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/p2-6.jpg"
                  alt="Modern luxury home"
                  fill
                  className="object-cover"
                />

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 shadow-md"
                >
                  <Square className="h-5 w-5 text-gray-500" />
                  <span className="text-sm font-medium">2,553 sqft</span>
                </motion.div>

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute top-1/3 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 shadow-md"
                >
                  <Bath className="h-5 w-5 text-gray-500" />
                  <span className="text-sm font-medium">2 bathrooms</span>
                </motion.div>

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute bottom-1/4 left-8 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 shadow-md"
                >
                  <Bed className="h-5 w-5 text-gray-500" />
                  <span className="text-sm font-medium">4 bedrooms</span>
                </motion.div>

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 shadow-md"
                >
                  <Car className="h-5 w-5 text-gray-500" />
                  <span className="text-sm font-medium">4 parking zones</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-[#EEEFF1] rounded-full p-2 mb-6"
            >
              <div className="rounded-full bg-gray-400 p-2">
                <Search className="h-3 w-3 text-white" />
              </div>

              <span className="text-gray-700 font-semibold text-sm">
                Why Choose us?
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Because you deserve more than just a property — you deserve peace
              of mind.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-600 mb-8"
            >
              At Exert Properties, we believe real estate is not just about
              buildings, but about building relationships, trust, and futures.
              Here's why thousands choose us as their real estate partner:
            </motion.p>

            <motion.ul className="space-y-4 mb-8">
              {lists.map((list, i) => (
                <motion.li
                  key={i}
                  variants={fadeIn("right", "tween", 0.1 * i, 0.5)}
                  className="flex items-center gap-3"
                >
                  <div className="bg-black rounded-full p-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span>{list.li}</span>
                </motion.li>
              ))}
              {/* <li className="flex items-center gap-3">
                <div className="bg-black rounded-full p-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span>Expertise That Guides You</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-black rounded-full p-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span>Prime Properties, Carefully Curated</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-black rounded-full p-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span>Transparent Dealings, Every Step of the Way</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-black rounded-full p-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span>One-Stop Real Estate Solutions</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-black rounded-full p-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span>Client-Centric Approach</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-black rounded-full p-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span>Proven Track Record</span>
              </li> */}
            </motion.ul>

            {/* <button className="bg-black text-white rounded-full px-3 py-2 flex items-center gap-2 hover:bg-neutral-800 transform transition-transform duration-300 ease-in-out hover:scale-90">
              Start exploring

              <div className="rounded-full bg-white p-2 group">
                <IoMdArrowRoundForward className="h-4 w-4 text-black" />
              </div>
            </button> */}
            {/* <div className=" items-center px-2 bg-black rounded-full inline-flex transform transition-transform duration-300 ease-in-out hover:scale-90 group hover:bg-neutral-800">
              <button
                // size="lg"
                className="rounded-full p-3  bg-black group group-hover:bg-neutral-800 text-white"
              >
                Start exploring
              </button>
              <div className="rounded-full bg-white p-2 group">
                <IoMdArrowRoundForward className="h-4 w-4 text-black" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
