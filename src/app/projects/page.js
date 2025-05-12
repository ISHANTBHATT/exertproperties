"use client";
import React from "react";
import { BiSolidHomeAlt2 } from "react-icons/bi";
import PropertyListings from "../components/PropertyListings";
import { properties } from "../data/properties";
import PropertyCard from "@/components/ui/PropertyCard";
import { IoMdArrowRoundForward } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

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
            Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean
            potenti. Metus in eu vel morbi dui nunc tellus. Non a massa maecenas
            massa.
          </p>
        </div>
      </section>
      <main className="container mx-auto py-10">
        <div className="grid grid-cols-2 border-b border-gray-100 h-screen">
          <div className="relative h-screen rounded-2xl">
            <Image
              src="/images/1.jpg"
              alt="3 in 1 Full Detached Houses"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
          <div className="p-12 flex flex-col justify-center">
            <div className="uppercase text-sm tracking-wider text-gray-500 mb-1">
              Nigeria
            </div>
            <h2 className="text-2xl font-light mb-2">
              3 in 1 FULL DETACHED HOUSES
            </h2>
            <div className="text-sm text-gray-500 mb-4">ORCHID LAGOS 2021</div>
            <p className="text-sm leading-relaxed text-gray-700">
              This was our inaugural project located at Vitoria Crest 2 Estate
              Orchid Lekki Lagos State Nigeria. It consists of 2 units of Full
              detached all Ensuite 4 bedroom duplexes with Maids room. This was
              a master piece that was uniquely designed for upper middle class.
            </p>
            <div className="mt-6 text-xs uppercase tracking-wider text-gray-400">
              Portfolio
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 border-b border-gray-100 h-screen">
          <div className="p-12 flex flex-col justify-center">
            <div className="uppercase text-sm tracking-wider text-gray-500 mb-1">
              United States
            </div>
            <h2 className="text-2xl font-light mb-2">
              FIX & FLIP OF A FIRE DAMAGED CONDO
            </h2>
            <div className="text-sm text-gray-500 mb-4">2023</div>
            <p className="text-sm leading-relaxed text-gray-700">
              We bought this property in 2023 to test the United States Market
              in June/July 2023. It had a cosmetic fire damage. We were able to
              partner with some local contractors to bring it back to life and
              was done by December 2023. The property is currently being used as
              an Airbnb while also in the market for outright sales.
            </p>
            <div className="mt-6 text-xs uppercase tracking-wider text-gray-400">
              Portfolio
            </div>
          </div>
          <div className="relative h-screen rounded-2xl">
            <Image
              src="/images/2.jpg"
              alt="Fire Damaged Condo Renovation"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 border-b border-gray-100 h-screen">
          <div className="relative h-screen rounded-2xl">
            <Image
              src="/images/3.jpg"
              alt="Enugu Land Development"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
          <div className="p-12 flex flex-col justify-center">
            <div className="uppercase text-sm tracking-wider text-gray-500 mb-1">
              Nigeria
            </div>
            <h2 className="text-2xl font-light mb-2">ENUGU LAND DEVELOPMENT</h2>
            <div className="text-sm text-gray-500 mb-4">
              INDEPENDENCE LAYOUT 2023
            </div>
            <p className="text-sm leading-relaxed text-gray-700">
              In December 2023 we acquired a land size of 282 square meters on
              Ukuta Close off Valley Crescent off Nza Street Independence Layout
              Enugu, Enugu State Nigeria for construction of our inaugural
              premium flats. We improved on the land by providing rain gutters
              and construction of 800m tarred road for easy access.
            </p>
            <div className="mt-6 text-xs uppercase tracking-wider text-gray-400">
              Portfolio
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 border-b border-gray-100 h-screen">
          <div className="p-12 flex flex-col justify-center">
            <div className="uppercase text-sm tracking-wider text-gray-500 mb-1">
              Nigeria
            </div>
            <h2 className="text-2xl font-light mb-2">GAINS HEIGHTS</h2>
            <div className="text-sm text-gray-500 mb-4">
              LEKKI FORESHORE ESTATE 2024
            </div>
            <p className="text-sm leading-relaxed text-gray-700">
              In October 2024, we bought a 1000 square meter of land at Lekki
              Foreshore Estate Lekki Phase 1 Lagos for our inaugural Ground
              Floor plus Four 20 units of 2 bedroom luxury flats with a 3
              bedroom penthouse. This project is named after our CEO's hometown
              Urualla in Ideato North Local Government Area Imo state Nigeria.
              Urualla is "Gains of a land" when translated in English.
            </p>
            <div className="mt-6 text-xs uppercase tracking-wider text-gray-400">
              Portfolio
            </div>
          </div>
          <div className="relative h-screen rounded-2xl">
            <Image
              src="/images/1.jpg"
              alt="Gains Heights Development"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </main>
      {/* <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12 px-4 lg:px-20 mt-20">
        {properties.map((property) => (
          <div key={property.id}>
            <PropertyCard property={property} />
          </div>
        ))}
      </div> */}
      {/* <div className="flex justify-center">
        <div className=" items-center px-2 bg-black rounded-full inline-flex transform transition-transform duration-300 ease-in-out hover:scale-90 group hover:bg-neutral-800">
          <button className="rounded-full p-3  bg-black group group-hover:bg-neutral-800 text-white">
            Load More
          </button>
          <div className="rounded-full bg-white p-2 group">
            <IoMdArrowRoundForward className="h-4 w-4 text-black" />
          </div>
        </div>
      </div> */}
    </main>
  );
}

export default Page;
