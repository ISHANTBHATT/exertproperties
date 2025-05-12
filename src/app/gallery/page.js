// "use client";
// import { useState } from "react";
// import Image from "next/image";

// const GalleryPage = () => {
//   const [selectedHouse, setSelectedHouse] = useState(null);
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);

//   // Sample data - replace with your actual data
//   const houses = [
//     {
//       id: 1,
//       address: "123 Main Street",
//       images: [
//         { before: "/images/1.jpg", after: "/images/2.jpg" },
//         { before: "/images/2.jpg", after: "/images/3.jpg" },
//         // Add 10-15 image pairs
//       ],
//     },
//     // Add more houses
//   ];

//   const openModal = (house, index) => {
//     setSelectedHouse(house);
//     setSelectedImageIndex(index);
//   };

//   const closeModal = () => {
//     setSelectedHouse(null);
//     setSelectedImageIndex(0);
//   };

//   const navigateImages = (direction) => {
//     setSelectedImageIndex((prev) =>
//       direction === "next"
//         ? (prev + 1) % selectedHouse.images.length
//         : (prev - 1 + selectedHouse.images.length) % selectedHouse.images.length
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8 py-40">
//       <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
//         Property Transformations
//       </h1>

//       {houses.map((house) => (
//         <section key={house.id} className="mb-16">
//           <h2 className="text-2xl font-semibold mb-8 text-gray-700">
//             {house.address}
//           </h2>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {house.images.map((image, index) => (
//               <div
//                 key={index}
//                 className="relative group cursor-pointer transform transition duration-300 hover:scale-105"
//                 onClick={() => openModal(house, index)}
//               >
//                 <div className="aspect-square relative rounded-xl overflow-hidden shadow-lg">
//                   <Image
//                     src={image.before}
//                     alt="Before renovation"
//                     layout="fill"
//                     objectFit="cover"
//                     className="group-hover:opacity-0 transition-opacity duration-300"
//                   />
//                   <Image
//                     src={image.after}
//                     alt="After renovation"
//                     layout="fill"
//                     objectFit="cover"
//                     className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                   />
//                 </div>
//                 <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm">
//                   Hover to compare
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
//       ))}

//       {/* Modal */}
//       {selectedHouse && (
//         <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50">
//           <button
//             onClick={closeModal}
//             className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
//           >
//             &times;
//           </button>

//           <div className="max-w-6xl w-full relative">
//             <div className="grid grid-cols-2 gap-4">
//               <div className="relative aspect-video rounded-lg overflow-hidden">
//                 <Image
//                   src={selectedHouse.images[selectedImageIndex].before}
//                   alt="Before"
//                   layout="fill"
//                   objectFit="cover"
//                 />
//                 <div className="absolute bottom-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full">
//                   Before
//                 </div>
//               </div>
//               <div className="relative aspect-video rounded-lg overflow-hidden">
//                 <Image
//                   src={selectedHouse.images[selectedImageIndex].after}
//                   alt="After"
//                   layout="fill"
//                   objectFit="cover"
//                 />
//                 <div className="absolute bottom-2 left-2 bg-green-500 text-white px-3 py-1 rounded-full">
//                   After
//                 </div>
//               </div>
//             </div>

//             <div className="flex justify-center mt-6 space-x-4">
//               <button
//                 onClick={() => navigateImages("prev")}
//                 className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition"
//               >
//                 ← Previous
//               </button>
//               <button
//                 onClick={() => navigateImages("next")}
//                 className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition"
//               >
//                 Next →
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GalleryPage;

import { Gallery } from "../components/Gallery";
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 py-20">
      <div className="container px-4 py-12 mx-auto">
        <header className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Property Transformations
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
            Explore our stunning collection of property renovations and
            transformations
          </p>
        </header>

        <Gallery />
      </div>
    </main>
  );
}
