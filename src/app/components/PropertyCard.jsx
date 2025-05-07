"use client";
import { PlusCircle, MapPin, Plus } from "lucide-react";
import Image from "next/image";

export default function PropertyCard({ property }) {
  return (
    <div className="relative overflow-hidden rounded-3xl">
      <div className="relative h-[500px] w-full">
        <Image
          src={property.image || "/placeholder.svg"}
          alt={property.title}
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute top-4 left-4">
          <div className="bg-black/70 text-white px-4 py-2 rounded-full flex items-center gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {property.status}
          </div>
        </div>

        <button className="absolute top-4 right-4 bg-white rounded-full p-2">
          <Plus className="h-5 w-5 text-black" />
        </button>

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-3xl font-bold mb-2">{property.title}</h3>
          <p className="mb-4 text-gray-200">{property.description}</p>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            <span>{property.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
