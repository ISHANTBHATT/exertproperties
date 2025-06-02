// "use client";
// import React from "react";
// import { BiSolidHomeAlt2 } from "react-icons/bi";
// import PropertyListings from "../components/PropertyListings";
// import { properties } from "../data/properties";
// import PropertyCard from "@/components/ui/PropertyCard";
// import { IoMdArrowRoundForward } from "react-icons/io";
// import Link from "next/link";
// import Image from "next/image";

// function Page() {
//   return (
//     <main className="min-h-screen bg-[#f9f6f2] py-28">
//       <section className="bg-black text-white py-28 px-4 md:px-8 lg:px-16 rounded-4xl md:mx-6 lg:mx-20">
//         <div className="max-w-4xl mx-auto text-center space-y-4">
//           <div className="inline-flex items-center p-2 gap-2 bg-neutral-800 text-white rounded-full font-semibold text-sm">
//             <div className="rounded-full bg-neutral-700 p-2">
//               <BiSolidHomeAlt2 className="h-3 w-3 text-white" />
//             </div>
//             All properties
//           </div>
//           <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
//             Check on all properties
//             <br /> we have available
//           </h2>
//           <p className="md:text-lg text-gray-400 mb-8">
//             Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean
//             potenti. Metus in eu vel morbi dui nunc tellus. Non a massa maecenas
//             massa.
//           </p>
//         </div>
//       </section>
//       <main className="container mx-auto py-10">
//         <div className="grid grid-cols-2 border-b border-gray-100 h-screen">
//           <div className="relative h-screen rounded-2xl">
//             <Image
//               src="/images/1.jpg"
//               alt="3 in 1 Full Detached Houses"
//               fill
//               className="object-cover rounded-2xl"
//             />
//           </div>
//           <div className="p-12 flex flex-col justify-center">
//             <div className="uppercase text-sm tracking-wider text-gray-500 mb-1">
//               Nigeria
//             </div>
//             <h2 className="text-2xl font-light mb-2">
//               3 in 1 FULL DETACHED HOUSES
//             </h2>
//             <div className="text-sm text-gray-500 mb-4">ORCHID LAGOS 2021</div>
//             <p className="text-sm leading-relaxed text-gray-700">
//               This was our inaugural project located at Vitoria Crest 2 Estate
//               Orchid Lekki Lagos State Nigeria. It consists of 2 units of Full
//               detached all Ensuite 4 bedroom duplexes with Maids room. This was
//               a master piece that was uniquely designed for upper middle class.
//             </p>
//             <div className="mt-6 text-xs uppercase tracking-wider text-gray-400">
//               Portfolio
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-2 border-b border-gray-100 h-screen">
//           <div className="p-12 flex flex-col justify-center">
//             <div className="uppercase text-sm tracking-wider text-gray-500 mb-1">
//               United States
//             </div>
//             <h2 className="text-2xl font-light mb-2">
//               FIX & FLIP OF A FIRE DAMAGED CONDO
//             </h2>
//             <div className="text-sm text-gray-500 mb-4">2023</div>
//             <p className="text-sm leading-relaxed text-gray-700">
//               We bought this property in 2023 to test the United States Market
//               in June/July 2023. It had a cosmetic fire damage. We were able to
//               partner with some local contractors to bring it back to life and
//               was done by December 2023. The property is currently being used as
//               an Airbnb while also in the market for outright sales.
//             </p>
//             <div className="mt-6 text-xs uppercase tracking-wider text-gray-400">
//               Portfolio
//             </div>
//           </div>
//           <div className="relative h-screen rounded-2xl">
//             <Image
//               src="/images/p2-1.jpg"
//               alt="Fire Damaged Condo Renovation"
//               fill
//               className="object-cover rounded-2xl"
//             />
//           </div>
//         </div>

//         <div className="grid grid-cols-2 border-b border-gray-100 h-screen">
//           <div className="relative h-screen rounded-2xl">
//             <Image
//               src="/images/3.jpg"
//               alt="Enugu Land Development"
//               fill
//               className="object-cover rounded-2xl"
//             />
//           </div>
//           <div className="p-12 flex flex-col justify-center">
//             <div className="uppercase text-sm tracking-wider text-gray-500 mb-1">
//               Nigeria
//             </div>
//             <h2 className="text-2xl font-light mb-2">ENUGU LAND DEVELOPMENT</h2>
//             <div className="text-sm text-gray-500 mb-4">
//               INDEPENDENCE LAYOUT 2023
//             </div>
//             <p className="text-sm leading-relaxed text-gray-700">
//               In December 2023 we acquired a land size of 282 square meters on
//               Ukuta Close off Valley Crescent off Nza Street Independence Layout
//               Enugu, Enugu State Nigeria for construction of our inaugural
//               premium flats. We improved on the land by providing rain gutters
//               and construction of 800m tarred road for easy access.
//             </p>
//             <div className="mt-6 text-xs uppercase tracking-wider text-gray-400">
//               Portfolio
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-2 border-b border-gray-100 h-screen">
//           <div className="p-12 flex flex-col justify-center">
//             <div className="uppercase text-sm tracking-wider text-gray-500 mb-1">
//               Nigeria
//             </div>
//             <h2 className="text-2xl font-light mb-2">GAINS HEIGHTS</h2>
//             <div className="text-sm text-gray-500 mb-4">
//               LEKKI FORESHORE ESTATE 2024
//             </div>
//             <p className="text-sm leading-relaxed text-gray-700">
//               In October 2024, we bought a 1000 square meter of land at Lekki
//               Foreshore Estate Lekki Phase 1 Lagos for our inaugural Ground
//               Floor plus Four 20 units of 2 bedroom luxury flats with a 3
//               bedroom penthouse. This project is named after our CEO&apos;s
//               hometown Urualla in Ideato North Local Government Area Imo state
//               Nigeria. Urualla is &quot;Gains of a land&quot; when translated in
//               English.
//             </p>
//             <div className="mt-6 text-xs uppercase tracking-wider text-gray-400">
//               Portfolio
//             </div>
//           </div>
//           <div className="relative h-screen rounded-2xl">
//             <Image
//               src="/images/1.jpg"
//               alt="Gains Heights Development"
//               fill
//               className="object-cover rounded-2xl"
//             />
//           </div>
//         </div>
//       </main>
//       {/* <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12 px-4 lg:px-20 mt-20">
//         {properties.map((property) => (
//           <div key={property.id}>
//             <PropertyCard property={property} />
//           </div>
//         ))}
//       </div> */}
//       {/* <div className="flex justify-center">
//         <div className=" items-center px-2 bg-black rounded-full inline-flex transform transition-transform duration-300 ease-in-out hover:scale-90 group hover:bg-neutral-800">
//           <button className="rounded-full p-3  bg-black group group-hover:bg-neutral-800 text-white">
//             Load More
//           </button>
//           <div className="rounded-full bg-white p-2 group">
//             <IoMdArrowRoundForward className="h-4 w-4 text-black" />
//           </div>
//         </div>
//       </div> */}
//     </main>
//   );
// }

// export default Page;

//current
"use client";
import { useState } from "react";
import { BiSolidHomeAlt2 } from "react-icons/bi";
import Image from "next/image";
import ProjectModal from "@/components/ui/ProjectModal";
import { motion } from "framer-motion";

// Project data
const projects = [
  {
    id: 1,
    location: "Nigeria",
    title: "3 in 1 FULL DETACHED HOUSES",
    date: "ORCHID LAGOS 2021",
    description:
      "This was our inaugural project located at Vitoria Crest 2 Estate Orchid Lekki Lagos State Nigeria. It consists of 2 units of Full detached all Ensuite 4 bedroom duplexes with Maids room. This was a master piece that was uniquely designed for upper middle class.",
    image: "/images/p1a-1.jpg",
    beforeMedia: [
      { type: "image", src: "/images/p1b-1.jpeg" },
      { type: "image", src: "/images/p1b-2.jpeg" },
      { type: "image", src: "/images/p1b-3.jpeg" },
      { type: "image", src: "/images/p1b-4.jpeg" },
      { type: "image", src: "/images/p1b-5.jpeg" },
      { type: "image", src: "/images/p1b-6.jpeg" },
      { type: "image", src: "/images/p1b-7.jpeg" },
      { type: "image", src: "/images/p1b-8.jpeg" },
    ],
    afterMedia: [
      { type: "image", src: "/images/p1a-1.jpg" },
      { type: "image", src: "/images/p1a-2.jpeg" },
      { type: "image", src: "/images/p1a-3.jpeg" },
      { type: "image", src: "/images/p1a-4.jpeg" },
      { type: "image", src: "/images/p1-1.jpeg" },
      { type: "image", src: "/images/p1-2.jpeg" },
      { type: "image", src: "/images/p1-3.jpeg" },
      { type: "image", src: "/images/p1-4.jpeg" },
      { type: "image", src: "/images/p1-5.jpeg" },
      { type: "image", src: "/images/p1-6.jpeg" },
      { type: "image", src: "/images/p1-7.jpeg" },
      { type: "image", src: "/images/p1-8.jpeg" },
      { type: "image", src: "/images/p1-9.jpeg" },
      { type: "image", src: "/images/p1-10.jpeg" },
      { type: "image", src: "/images/p1-11.jpeg" },
      { type: "image", src: "/images/p1-12.jpeg" },
      { type: "image", src: "/images/p1-13.jpeg" },
      { type: "image", src: "/images/p1-14.jpeg" },
      { type: "image", src: "/images/p1-15.jpeg" },
      { type: "image", src: "/images/p1-16.jpeg" },
    ],
  },
  {
    id: 2,
    location: "United States",
    title: "FIX & FLIP OF A FIRE DAMAGED CONDO",
    date: "2023",
    description:
      "We bought this property in 2023 to test the United States Market in June/July 2023. It had a cosmetic fire damage. We were able to partner with some local contractors to bring it back to life and was done by December 2023. The property is currently being used as an Airbnb while also in the market for outright sales.",
    image: "/images/p2-1.jpg",
    // beforeImage: "/images/p2b-1.jpeg",
    // afterImage: "/images/p2-1.jpg",
    beforeMedia: [
      { type: "image", src: "/images/p2b-1.jpeg" },
      { type: "image", src: "/images/p2b-2.jpeg" },
      { type: "image", src: "/images/p2b-3.jpeg" },
      {
        type: "video",
        src: "/videos/p2bv-1.mp4",
        // thumbnail: "/images/p2b-1.jpeg",
      },
      {
        type: "video",
        src: "/videos/p2bv-2.mp4",
      },
      {
        type: "video",
        src: "/videos/p2bv-3.mp4",
      },
      {
        type: "video",
        src: "/videos/p2bv-4.mp4",
      },
      {
        type: "video",
        src: "/videos/p2bv-5.mp4",
      },
    ],
    afterMedia: [
      { type: "image", src: "/images/p2-1.jpg" },
      { type: "image", src: "/images/p2-2.jpg" },
      { type: "image", src: "/images/p2-3.jpg" },
      { type: "image", src: "/images/p2-4.jpg" },
      { type: "image", src: "/images/p2-5.jpg" },
      { type: "image", src: "/images/p2-6.jpg" },
      { type: "image", src: "/images/p2-7.jpg" },
      { type: "image", src: "/images/p2-8.jpg" },
      { type: "image", src: "/images/p2-9.jpg" },
      { type: "image", src: "/images/p2-10.jpg" },
      { type: "image", src: "/images/p2-11.jpg" },
      { type: "image", src: "/images/p2-12.jpg" },
      { type: "image", src: "/images/p2-13.jpg" },
      { type: "image", src: "/images/p2-14.jpg" },
      { type: "image", src: "/images/p2-15.jpg" },
      { type: "image", src: "/images/p2-16.jpg" },
      { type: "image", src: "/images/p2-17.jpg" },
      { type: "image", src: "/images/p2-18.jpg" },
      { type: "image", src: "/images/p2-19.jpg" },
      { type: "image", src: "/images/p2-20.jpg" },
      { type: "image", src: "/images/p2-21.jpg" },
      { type: "image", src: "/images/p2-22.jpg" },
      { type: "image", src: "/images/p2-23.jpg" },
      { type: "image", src: "/images/p2-24.jpg" },
      { type: "image", src: "/images/p2-25.jpg" },
      { type: "image", src: "/images/p2-26.jpg" },
      { type: "image", src: "/images/p2-27.jpg" },
      { type: "image", src: "/images/p2-28.jpg" },
      { type: "image", src: "/images/p2-29.jpg" },
      { type: "image", src: "/images/p2-30.jpg" },
      { type: "image", src: "/images/p2-31.jpg" },
      { type: "image", src: "/images/p2-32.jpg" },
      { type: "image", src: "/images/p2-33.jpg" },
    ],
  },
  {
    id: 3,
    location: "Nigeria",
    title: "ENUGU LAND DEVELOPMENT",
    date: "INDEPENDENCE LAYOUT 2023",
    description:
      "In December 2023 we acquired a land size of 282 square meters on Ukuta Close off Valley Crescent off Nza Street Independence Layout Enugu, Enugu State Nigeria for construction of our inaugural premium flats. We improved on the land by providing rain gutters and construction of 800m tarred road for easy access.",
    image: "/images/3.jpg",
    beforeMedia: [
      { type: "image", src: "/images/p3b-1.jpeg" },
      { type: "image", src: "/images/p3b-2.jpeg" },
      {
        type: "video",
        src: "/videos/p3bv-1.mp4",
        // thumbnail: "/images/p3b-1.jpeg",
      },
      {
        type: "video",
        src: "/videos/p3bv-2.mp4",
        // thumbnail: "/images/p3b-1.jpeg",
      },
      {
        type: "video",
        src: "/videos/p3bv-3.mp4",
        // thumbnail: "/images/p3b-1.jpeg",
      },
      {
        type: "video",
        src: "/videos/p3bv-4.mp4",
        // thumbnail: "/images/p3b-1.jpeg",
      },
      {
        type: "video",
        src: "/videos/p3bv-5.mp4",
        // thumbnail: "/images/p3b-1.jpeg",
      },
      {
        type: "video",
        src: "/videos/p3bv-6.mp4",
        // thumbnail: "/images/p3b-1.jpeg",
      },
      {
        type: "video",
        src: "/videos/p3bv-7.mp4",
        // thumbnail: "/images/p3b-1.jpeg",
      },
      {
        type: "video",
        src: "/videos/p3bv-8.mp4",
        // thumbnail: "/images/p3b-1.jpeg",
      },
      {
        type: "video",
        src: "/videos/p3bv-9.mp4",
        // thumbnail: "/images/p3b-1.jpeg",
      },
      {
        type: "video",
        src: "/videos/p3bv-10.mp4",
        // thumbnail: "/images/p3b-1.jpeg",
      },
      {
        type: "video",
        src: "/videos/p3bv-11.mp4",
        // thumbnail: "/images/p3b-1.jpeg",
      },
      {
        type: "video",
        src: "/videos/p3bv-12.mp4",
        // thumbnail: "/images/p3b-1.jpeg",
      },
    ],
    afterMedia: [
      { type: "image", src: "/images/p3av-1.jpg" },
      {
        type: "video",
        src: "/videos/p3av-1.mp4",
        // thumbnail: "/images/p3b-1.jpeg",
      },
      {
        type: "video",
        src: "/videos/p3av-2.mp4",
        // thumbnail: "/images/p3b-1.jpeg",
      },
    ],
  },
  {
    id: 4,
    location: "Nigeria",
    title: "GAINS HEIGHTS",
    date: "LEKKI FORESHORE ESTATE 2024",
    description:
      'In October 2024, we bought a 1000 square meter of land at Lekki Foreshore Estate Lekki Phase 1 Lagos for our inaugural Ground Floor plus Four 20 units of 2 bedroom luxury flats with a 3 bedroom penthouse. This project is named after our CEO\'s hometown Urualla in Ideato North Local Government Area Imo state Nigeria. Urualla is "Gains of a land" when translated in English.',
    image: "/images/h1-2.jpeg",
    beforeMedia: [
      { type: "image", src: "/images/p2b.jpeg" },
      // { type: "image", src: "/images/p2b-2.jpeg" },
      // { type: "image", src: "/images/p2b-3.jpeg" },
      // {
      //   type: "video",
      //   src: "/videos/p2bv-1.mp4",
      //   thumbnail: "/images/p2-1.jpeg",
      // },
    ],
    afterMedia: [
      { type: "image", src: "/images/h1-1.jpeg" },
      { type: "image", src: "/images/h1-2.jpeg" },
      { type: "image", src: "/images/h1-3.jpeg" },
      { type: "image", src: "/images/h1-4.jpeg" },
      { type: "image", src: "/images/h1-5.jpeg" },
      { type: "image", src: "/images/h1-6.jpeg" },
      { type: "image", src: "/images/h1-7.jpeg" },
      { type: "image", src: "/images/h1-8.jpeg" },
      { type: "image", src: "/images/h1-9.jpeg" },
      { type: "image", src: "/images/h1-10.jpeg" },
      { type: "image", src: "/images/h1-11.jpeg" },
      { type: "image", src: "/images/h1-12.jpeg" },
      { type: "image", src: "/images/h1-13.jpeg" },
      { type: "image", src: "/images/h1-14.jpeg" },
      { type: "image", src: "/images/h1-15.jpeg" },
      { type: "image", src: "/images/h1-16.jpeg" },
      { type: "image", src: "/images/h1-17.jpeg" },
      { type: "image", src: "/images/h1-18.jpeg" },
      {
        type: "video",
        src: "/videos/p4av-1.mp4",
        // thumbnail: "/images/p2-1.jpeg",
      },
    ],
  },
];

function Page() {
  return (
    <main className="min-h-screen bg-[#f9f6f2] py-28">
      <section className="bg-black text-white py-28 px-4 md:px-8 lg:px-16 rounded-4xl md:mx-6 lg:mx-20">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center p-2 gap-2 bg-neutral-800 text-white rounded-full font-semibold text-sm">
            <div className="rounded-full bg-neutral-700 p-2">
              <BiSolidHomeAlt2 className="h-3 w-3 text-white" />
            </div>
            All properties
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Check on all properties
            <br /> we have available
          </h2>
          <p className="md:text-lg text-gray-400 mb-8">
            Explore our complete portfolio of handpicked properties — designed
            to match every dream and investment goal.
          </p>
        </div>
      </section>

      <main className="container mx-auto py-10">
        {projects.map((project, index) => (
          <ProjectSection
            key={project.id}
            imagePosition={index % 2 === 0 ? "left" : "right"}
            location={project.location}
            title={project.title}
            date={project.date}
            description={project.description}
            image={project.image}
            beforeMedia={project.beforeMedia}
            afterMedia={project.afterMedia}
          />
        ))}
      </main>
    </main>
  );
}

function ProjectSection({
  imagePosition,
  location,
  title,
  date,
  description,
  image,
  beforeMedia,
  afterMedia,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-100 min-h-screen">
        {imagePosition === "left" ? (
          <>
            <div
              className="relative h-screen rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <motion.div
                className="w-full h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={title}
                  fill
                  className="object-cover rounded-2xl transition-transform duration-500"
                />
              </motion.div>
            </div>
            <div className="p-6 md:p-12 flex flex-col justify-center">
              <div className="uppercase text-sm tracking-wider text-gray-500 mb-1">
                {location}
              </div>
              <h2 className="text-2xl font-light mb-2">{title}</h2>
              <div className="text-sm text-gray-500 mb-4">{date}</div>
              <p className="text-sm leading-relaxed text-gray-700">
                {description}
              </p>
              <div className="mt-6 text-xs uppercase tracking-wider text-gray-400">
                Portfolio
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="p-6 md:p-12 flex flex-col justify-center">
              <div className="uppercase text-sm tracking-wider text-gray-500 mb-1">
                {location}
              </div>
              <h2 className="text-2xl font-light mb-2">{title}</h2>
              <div className="text-sm text-gray-500 mb-4">{date}</div>
              <p className="text-sm leading-relaxed text-gray-700">
                {description}
              </p>
              <div className="mt-6 text-xs uppercase tracking-wider text-gray-400">
                Portfolio
              </div>
            </div>
            <div
              className="relative h-screen rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <motion.div
                className="w-full h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={title}
                  fill
                  className="object-cover rounded-2xl transition-transform duration-500"
                />
              </motion.div>
            </div>
          </>
        )}
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-100 min-h-screen">
        {/* Image */}
        <div
          className={`
      relative h-screen rounded-2xl overflow-hidden cursor-pointer
      ${imagePosition === "left" ? "order-1 md:order-1" : "order-1 md:order-2"}
    `}
          onClick={() => setIsModalOpen(true)}
        >
          <motion.div
            className="w-full h-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover rounded-2xl transition-transform duration-500"
            />
          </motion.div>
        </div>

        {/* Text */}
        <div
          className={`
      p-6 md:p-12 flex flex-col justify-center
      ${imagePosition === "left" ? "order-2 md:order-2" : "order-2 md:order-1"}
    `}
        >
          <div className="uppercase text-sm tracking-wider text-gray-500 mb-1">
            {location}
          </div>
          <h2 className="text-2xl font-semibold mb-2">{title}</h2>
          <div className="text-sm text-gray-500 mb-4">{date}</div>
          <p className="text-sm leading-relaxed text-gray-700">{description}</p>
          <div className="mt-6 text-xs uppercase tracking-wider text-gray-400">
            Portfolio
          </div>
        </div>
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        location={location}
        date={date}
        beforeMedia={beforeMedia}
        afterMedia={afterMedia}
      />
    </>
  );
}

export default Page;
