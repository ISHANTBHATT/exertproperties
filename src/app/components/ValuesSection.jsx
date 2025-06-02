import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Flag,
  LightbulbIcon,
  MessageCircle,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import React from "react";
import { FaBalanceScale, FaRegHandshake } from "react-icons/fa";
import { HiMiniTrophy } from "react-icons/hi2";
import { PiPlantLight } from "react-icons/pi";
import { IoBulbOutline } from "react-icons/io5";
function ValuesSection() {
  return (
    <section className="flex flex-col lg:flex-row py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        {/* <div className="inline-flex items-center rounded-full bg-gray-100 px-4 py-2 mb-6">
          <Star className="h-4 w-4 mr-2 text-gray-500" />
          <span className="text-sm font-medium">Our values</span>
        </div> */}
        <div className="inline-flex items-center p-2 gap-2 bg-[#EEEFF1]  text-gray-700 rounded-full font-semibold text-sm mb-4">
          <div className="rounded-full bg-gray-400 p-2">
            <Star className="h-3 w-3 text-white" />
          </div>
          Our values
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          The Foundation Beneath Everything We Build
        </h2>

        <p className="text-lg text-gray-600 max-w-3xl">
          At Exert Properties, our values are not just guiding principles — they
          are the cornerstone of every project we deliver, every relationship we
          nurture, and every promise we keep.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12 w-full">
        <div className="space-y-4 border-b-2 md:border-b-0 border-neutral-300 pb-4 md:pb-0">
          <FaBalanceScale className="h-8 w-8" />
          <h3 className="text-2xl font-semibold">Integrity</h3>
          <p className="text-gray-600">
            We believe in transparency, honesty, and doing what’s right — even
            when no one is watching. Trust is the foundation of all our client
            relationships.
          </p>
        </div>

        <div className="space-y-4 border-b-2 md:border-b-0 border-neutral-300 pb-4 md:pb-0">
          <FaRegHandshake className="h-8 w-8" />
          <h3 className="text-2xl font-semibold">Customer Commitment</h3>
          <p className="text-gray-600">
            Your goals are our priority. We go the extra mile to understand your
            needs and deliver tailored solutions that exceed expectations.
          </p>
        </div>

        <div className="space-y-4 border-b-2 md:border-b-0 border-neutral-300 pb-4 md:pb-0">
          <HiMiniTrophy className="h-8 w-8" />
          <h3 className="text-2xl font-semibold">Excellence</h3>
          <p className="text-gray-600">
            From planning to possession, we uphold the highest standards of
            quality, design, and execution in everything we do.
          </p>
        </div>

        <div className="space-y-4 border-b-2 md:border-b-0 border-neutral-300 pb-4 md:pb-0">
          <PiPlantLight className="h-8 w-8" />
          <h3 className="text-2xl font-semibold">Sustainability</h3>
          <p className="text-gray-600">
            We are committed to building responsibly — with eco-conscious
            designs, resource efficiency, and long-term community value.
          </p>
        </div>

        <div className="space-y-4 border-b-2 md:border-b-0 border-neutral-300 pb-4 md:pb-0">
          <IoBulbOutline className="h-8 w-8" />
          <h3 className="text-2xl font-semibold">Innovation</h3>
          <p className="text-gray-600">
            We embrace modern technology, smart solutions, and forward-thinking
            to offer future-ready living and investment spaces.
          </p>
        </div>

        <div className="space-y-4 border-b-2 md:border-b-0 border-neutral-300 pb-4 md:pb-0">
          <Users className="h-8 w-8" />
          <h3 className="text-2xl font-semibold">Teamwork</h3>
          <p className="text-gray-600">
            Collaboration fuels our success — within our team and with our
            clients, partners, and communities.
          </p>
        </div>
      </div>

      {/* <div className="mt-12">
        <Button variant="default" className="rounded-full px-6 py-6 h-auto">
          Start exploring
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div> */}
    </section>
  );
}

export default ValuesSection;
