// import Image from "next/image";
// import { Download } from "lucide-react";

// export default function AboutSection() {
//   return (
//     <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
//       <div className="grid md:grid-cols-2 gap-8 items-center">
//         <div className="relative rounded-lg overflow-hidden border border-neutral-200">
//           <Image
//             src="/images/h2.jpg"
//             alt="Modern apartment building"
//             width={600}
//             height={600}
//             className="w-full h-auto object-cover"
//           />
//         </div>
//         <div className="space-y-6">
//           <div className="text-neutral-500 font-medium">// About us</div>
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
//             Where modern design meets comfort
//           </h2>
//           <p className="text-neutral-600 text-lg">
//             Experience the perfect blend of modern design and ultimate comfort,
//             crafted for contemporary living.
//           </p>

//           <div className="grid grid-cols-2 gap-4 pt-4">
//             <div className="space-y-4">
//               <div className="flex items-center gap-2">
//                 <span className="text-amber-500">■</span>
//                 <span>Spacious floor plans</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <span className="text-amber-500">■</span>
//                 <span>Designer interiors</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <span className="text-amber-500">■</span>
//                 <span>Panoramic city views</span>
//               </div>
//             </div>
//             <div className="space-y-4">
//               <div className="flex items-center gap-2">
//                 <span className="text-amber-500">■</span>
//                 <span>Resort-style amenities</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <span className="text-amber-500">■</span>
//                 <span>24/7 maintenance support</span>
//               </div>
//             </div>
//           </div>

//           <button className="mt-6 bg-amber-200 hover:bg-amber-300 text-amber-900 px-6 py-3 rounded flex items-center gap-2 transition-colors">
//             Download brochure
//             <Download className="h-5 w-5" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Bath, Bed, Car, Square } from "lucide-react";
import { motion } from "framer-motion";
import { IoPersonSharp } from "react-icons/io5";
import { IoMdArrowRoundForward } from "react-icons/io";
const AboutSection = () => {
  return (
    <div className="py-10 md:p-10 lg:p-16 ">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex  items-center p-2 gap-2 bg-[#EEEFF1]  text-gray-700 rounded-full font-semibold text-sm">
              <div className="rounded-full bg-gray-400 p-2">
                <IoPersonSharp className="h-3 w-3 text-white" />
              </div>
              About us
            </div>
            <motion.h2
              className="text-5xl font-semibold mt-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              The best way to find your perfect home
            </motion.h2>
            <motion.p
              className="text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet consectetur. Gravida elementum dolor
              semper felis pulvinar feugiat risus adipiscing dictum. Ultricies
              nec elementum nisi ut. Cras diam odio sed auctor pellentesque. Sit
              nisl ipsum id convallis tristique. Malesuada.
            </motion.p>
            <div className=" items-center px-2 bg-black rounded-full inline-flex transform transition-transform duration-300 ease-in-out hover:scale-90 group hover:bg-neutral-800">
              <button
                // size="lg"
                className="rounded-full p-3  bg-black group group-hover:bg-neutral-800 text-white"
              >
                Start exploring
              </button>
              <div className="rounded-full bg-white p-2 group">
                <IoMdArrowRoundForward className="h-4 w-4 text-black" />
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Modern home"
              className="w-full h-96 object-cover rounded-lg"
            />

            <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-md">
              <div className="flex items-center space-x-2">
                <Square className="h-5 w-5 text-gray-500" />
                <span className="text-sm font-medium">4,821 sqft</span>
              </div>
            </div>

            <div className="absolute top-16 left-4 bg-white px-4 py-2 rounded-full shadow-md">
              <div className="flex items-center space-x-2">
                <Bath className="h-5 w-5 text-gray-500" />
                <span className="text-sm font-medium">3 bathrooms</span>
              </div>
            </div>

            <div className="absolute bottom-24 right-4 bg-white px-4 py-2 rounded-full shadow-md">
              <div className="flex items-center space-x-2">
                <Bed className="h-5 w-5 text-gray-500" />
                <span className="text-sm font-medium">3 bedrooms</span>
              </div>
            </div>

            <div className="absolute bottom-8 left-4 bg-white px-4 py-2 rounded-full shadow-md">
              <div className="flex items-center space-x-2">
                <Car className="h-5 w-5 text-gray-500" />
                <span className="text-sm font-medium">6 parking zones</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
