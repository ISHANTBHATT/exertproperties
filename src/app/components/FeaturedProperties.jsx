// "use client";
// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight, Star } from "lucide-react";
// import PropertyCard from "@/components/ui/PropertyCard";
// import { motion } from "framer-motion";

// const FeaturedProperties = ({ properties }) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const featuredProperties = properties.filter((p) => p.featured);

//   const handleNext = () => {
//     setActiveIndex((prev) =>
//       prev === featuredProperties.length - 1 ? 0 : prev + 1
//     );
//   };

//   const handlePrev = () => {
//     setActiveIndex((prev) =>
//       prev === 0 ? featuredProperties.length - 1 : prev - 1
//     );
//   };

//   return (
//     <div className="py-16 bg-gray-900 text-white">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center mb-6">
//           <span className="bg-gray-800 p-2 rounded-full mr-3">
//             <Star className="h-5 w-5 text-white" />
//           </span>
//           <h2 className="text-2xl font-semibold">Featured properties</h2>
//         </div>

//         <motion.p
//           className="max-w-2xl mb-12 text-gray-300"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//         >
//           Lorem ipsum dolor sit amet consectetur fermentum eget fringilla
//           egestas a aliquam arcu arcu nunc pretium id.
//         </motion.p>

//         <div className="relative">
//           <button
//             onClick={handlePrev}
//             className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white text-black rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
//           >
//             <ChevronLeft className="h-5 w-5" />
//           </button>

//           <div className="overflow-hidden">
//             <div
//               className="flex transition-transform duration-500 ease-in-out"
//               style={{ transform: `translateX(-${activeIndex * 100}%)` }}
//             >
//               {featuredProperties.map((property) => (
//                 <div key={property.id} className="min-w-full">
//                   <div className="px-10">
//                     <PropertyCard property={property} featured />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <button
//             onClick={handleNext}
//             className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white text-black rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
//           >
//             <ChevronRight className="h-5 w-5" />
//           </button>
//         </div>

//         <div className="flex justify-center mt-8">
//           <a
//             href="#"
//             className="text-blue-400 hover:text-blue-300 flex items-center transition-colors"
//           >
//             Browse all properties
//             <ChevronRight className="h-4 w-4 ml-1" />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeaturedProperties;

//v0
"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { useState } from "react";
import PropertyCard from "./PropertyCard";

export default function FeaturedProperties({ properties }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-zinc-800/80 rounded-full px-4 py-2 flex items-center gap-2">
            <Star className="h-4 w-4 fill-white text-white" />
            <span className="text-sm font-medium">Featured properties</span>
          </div>
        </div>

        <h2 className="text-5xl font-bold text-center mb-6">
          Featured properties
        </h2>

        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
          Lorem ipsum dolor sit amet consectetur fermentum eget fringilla
          egestas a aliquam arcu arcu nunc pretium id.
        </p>

        <div className="relative">
          <Carousel
            opts={{
              loop: true,
              align: "center",
            }}
            className="w-full"
            onSelect={(index) => setActiveIndex(index)}
          >
            <CarouselContent>
              {properties.map((property) => (
                <CarouselItem
                  key={property.id}
                  className="md:basis-3/4 lg:basis-2/3"
                >
                  <PropertyCard property={property} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-black hover:bg-white hover:text-black h-10 w-10 border-none" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-black hover:bg-white hover:text-black h-10 w-10 border-none" />
          </Carousel>
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="#"
            className="text-white flex items-center gap-2 hover:underline"
          >
            Browse all properties
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
