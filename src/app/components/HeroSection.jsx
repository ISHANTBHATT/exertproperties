// import Image from "next/image";
// import { ArrowRight } from "lucide-react";

// function HeroSection() {
//   return (
//     <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
//       <div className="grid md:grid-cols-2 gap-8 items-center">
//         <div className="space-y-6">
//           <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
//             Luxury living
//             <br />
//             &amp; city vibes
//           </h1>

//           <div className="flex items-start gap-4 pt-4">
//             <div className="text-amber-500 mt-1">
//               <svg
//                 width="40"
//                 height="40"
//                 viewBox="0 0 40 40"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M20 0L40 20L20 40L0 20L20 0Z"
//                   fill="currentColor"
//                   fillOpacity="0.2"
//                 />
//                 <path d="M20 10L30 20L20 30L10 20L20 10Z" fill="currentColor" />
//               </svg>
//             </div>
//             <p className="text-neutral-600 text-lg">
//               Where luxury meets convenience. Nestled in the heart of the city.
//               Our modern apartments offer unparalleled comfort and stunning
//               views.
//             </p>
//           </div>

//           <button className="mt-6 bg-amber-200 hover:bg-amber-300 text-amber-900 px-6 py-3 rounded flex items-center gap-2 transition-colors">
//             Explore floor plans
//             <ArrowRight className="h-5 w-5" />
//           </button>
//         </div>

//         <div className="grid grid-cols-4 gap-2">
//           <div className="col-span-4">
//             <Image
//               src="/images/h1.jpg"
//               alt="Luxury apartment building"
//               width={800}
//               height={600}
//               className="w-full h-auto rounded-lg"
//             />
//           </div>
//           <div className="col-span-2 hidden md:block">
//             <div className="h-32 bg-amber-100 rounded-lg"></div>
//           </div>
//           <div className="col-span-2 hidden md:block">
//             <div className="h-32 bg-neutral-100 rounded-lg"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default HeroSection;

//test
// "use client";

// import Link from "next/link";
// import { ArrowRight } from "lucide-react";
// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// export default function HeroSection() {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//     offset: ["start start", "end start"],
//   });

//   const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
//   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

//   return (
//     <section
//       ref={targetRef}
//       style={{ scale }}
//       className="relative min-h-screen"
//     >
//       {/* Background with gradient overlay */}
//       <div className="absolute inset-0 bg-sky-400"></div>

//       {/* Content */}
//       <div className="relative pt-32 pb-16 md:pt-40 md:pb-24 container mx-auto px-4 md:px-6">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div>
//             <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
//               Discover your
//               <br />
//               dream home now
//             </h1>
//             <div className="mt-8 flex flex-wrap gap-4">
//               <Link
//                 href="/explore"
//                 className="flex items-center px-6 py-3 rounded-full bg-black text-white font-medium hover:bg-gray-800 transition-colors"
//               >
//                 Start exploring <ArrowRight className="ml-2 h-5 w-5" />
//               </Link>
//               <Link
//                 href="/post-property"
//                 className="flex items-center px-6 py-3 text-white font-medium hover:underline"
//               >
//                 Post properties <ArrowRight className="ml-2 h-5 w-5" />
//               </Link>
//             </div>
//           </div>
//           <div className="lg:max-w-md">
//             <p className="text-white text-lg">
//               Lorem ipsum dolor sit amet consectetur fermentum eget fringilla
//               egestas a aliquam arcu arcu nunc pretium id semper ut volutpat. Id
//               gravida aenean.
//             </p>
//           </div>
//         </div>

//         {/* Property Image with scaling effect */}
//         {/* <div className="mt-12 md:mt-16 h-[500px] relative">
//           <motion.div
//             ref={targetRef}
//             style={{
//               scale,
//               backgroundImage: `url(https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//             className="sticky top-20 w-full h-[500px] rounded-lg overflow-hidden origin-center"
//           >
//             <motion.div
//               className="absolute inset-0 bg-neutral-950/30"
//               style={{
//                 opacity,
//               }}
//             />
//           </motion.div>
//         </div> */}
//       </div>
//     </section>
//   );
// }

//current
// "use client";

// import Link from "next/link";
// import { ArrowRight } from "lucide-react";
// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";

// export default function HeroSection() {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//     offset: ["start start", "end start"],
//   });

//   // Transform scale and opacity based on scroll
//   const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
//   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

//   return (
//     // Use motion.section to apply animation props
//     <motion.section
//       ref={targetRef}
//       style={{
//         scale,
//         borderRadius: useTransform(scrollYProgress, [0.7, 1], ["0rem", "2rem"]),
//       }}
//       className="relative min-h-screen overflow-hidden "
//     >
//       {/* Background image instead of solid color */}
//       <div className="absolute inset-0 bg-cover ">
//         <Image
//           src="/images/1.jpg"
//           alt="Background Image"
//           fill
//           className="object-cover object-center"
//         />
//       </div>

//       {/* <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: "url('/images/1.jpg')",
//         }}
//       /> */}
//       {/* Gradient overlay */}
//       {/* <div className="absolute inset-0 bg-neutral-950/30" /> */}

//       {/* Content container */}
//       <div className="relative pt-32 pb-16 md:pt-40 md:pb-24 container mx-auto px-4 md:px-6">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div>
//             <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
//               Discover your
//               <br />
//               dream home now
//             </h1>
//             <div className="mt-8 flex flex-wrap gap-4">
//               <Link
//                 href="/explore"
//                 className="flex items-center px-6 py-3 rounded-full bg-black text-white font-medium hover:bg-gray-800 transition-colors"
//               >
//                 Start exploring <ArrowRight className="ml-2 h-5 w-5" />
//               </Link>
//               <Link
//                 href="/post-property"
//                 className="flex items-center px-6 py-3 text-white font-medium hover:underline"
//               >
//                 Post properties <ArrowRight className="ml-2 h-5 w-5" />
//               </Link>
//             </div>
//           </div>
//           <div className="lg:max-w-md">
//             <p className="text-white text-lg">
//               Lorem ipsum dolor sit amet consectetur fermentum eget fringilla
//               egestas a aliquam arcu arcu nunc pretium id semper ut volutpat. Id
//               gravida aenean.
//             </p>
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   );
// }

"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  // Transform scale and opacity based on scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.section
      ref={targetRef}
      style={{
        scale,
        borderRadius: useTransform(scrollYProgress, [0, 0.7], ["0rem", "5rem"]),
      }}
      // Use h-screen to ensure full viewport height and full width
      className="relative h-screen w-full overflow-hidden"
      // h-[150vh]
    >
      {/* Full-size background image */}
      <div className="absolute inset-0 w-full h-full">
        {/* <Image
          src="/images/1.jpg"
          alt="Background Image"
          fill
          className="object-fill"
        /> */}
        <video autoPlay loop muted className="object-fill w-full h-full">
          <source src="/images/1.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content container */}
      <div className="relative pt-32 pb-16 md:pt-32 md:pb-24 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Discover your
              <br />
              dream home now
            </h1>
          </div>
          <div>
            <div className="lg:max-w-xl">
              <p className="text-white text-lg">
                Lorem ipsum dolor sit amet consectetur fermentum eget fringilla
                egestas a aliquam arcu arcu nunc pretium id semper ut volutpat.
                Id gravida aenean.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/explore"
                className="flex items-center px-6 py-3 rounded-full bg-black text-white font-medium transform transition-transform duration-300 ease-in-out hover:scale-90 hover:bg-neutral-900"
              >
                Start exploring <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/post-property"
                className="flex items-center px-6 py-3 text-white font-medium hover:underline"
              >
                Post properties <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
