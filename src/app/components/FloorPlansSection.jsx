"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

function FloorPlansSection() {
  const [activeTab, setActiveTab] = useState("Studio");

  const floorPlanData = {
    Studio: {
      unitSize: "750 sq.ft",
      balconyArea: "100 sq.ft",
      totalArea: "850 sq.ft",
      floor: "2nd",
      price: "$450,000",
    },
    "2-bedroom": {
      unitSize: "1050 sq.ft",
      balconyArea: "150 sq.ft",
      totalArea: "1200 sq.ft",
      floor: "3rd",
      price: "$650,000",
    },
    "3-bedroom": {
      unitSize: "1350 sq.ft",
      balconyArea: "200 sq.ft",
      totalArea: "1550 sq.ft",
      floor: "4th",
      price: "$850,000",
    },
    Penthouse: {
      unitSize: "2200 sq.ft",
      balconyArea: "400 sq.ft",
      totalArea: "2600 sq.ft",
      floor: "15th",
      price: "$1,950,000",
    },
    "Double height": {
      unitSize: "1800 sq.ft",
      balconyArea: "300 sq.ft",
      totalArea: "2100 sq.ft",
      floor: "10th",
      price: "$1,250,000",
    },
  };

  const tabs = Object.keys(floorPlanData);
  const currentPlan = floorPlanData[activeTab];

  return (
    <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto bg-[#f5f1ea]">
      <div className="text-center mb-12">
        <div className="text-neutral-500 font-medium mb-2">// Floor plans</div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
          Choose the perfect space for you
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeTab === tab
                ? "bg-amber-200 text-amber-900"
                : "bg-white text-neutral-600 hover:bg-neutral-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-4">
          <div className="grid grid-cols-2 border-b border-neutral-300 py-3">
            <div className="font-medium">Unit size</div>
            <div>{currentPlan.unitSize}</div>
          </div>
          <div className="grid grid-cols-2 border-b border-neutral-300 py-3">
            <div className="font-medium">Balcony area</div>
            <div>{currentPlan.balconyArea}</div>
          </div>
          <div className="grid grid-cols-2 border-b border-neutral-300 py-3">
            <div className="font-medium">Total area</div>
            <div>{currentPlan.totalArea}</div>
          </div>
          <div className="grid grid-cols-2 border-b border-neutral-300 py-3">
            <div className="font-medium">Floor</div>
            <div>{currentPlan.floor}</div>
          </div>
          <div className="grid grid-cols-2 border-b border-neutral-300 py-3">
            <div className="font-medium">Price</div>
            <div className="text-amber-600 font-semibold">
              {currentPlan.price}
            </div>
          </div>

          <button className="mt-6 bg-amber-200 hover:bg-amber-300 text-amber-900 px-6 py-3 rounded flex items-center gap-2 transition-colors">
            I am Interested
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        <div className="relative">
          <Image
            src="/images/h1.jpg"
            alt="Floor plan diagram"
            width={800}
            height={600}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default FloorPlansSection;
