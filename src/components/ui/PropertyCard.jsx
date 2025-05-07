import React from "react";
import {
  MapPin,
  Plus,
  Bath,
  Bed,
  Car,
  ChevronsRight,
  Square,
} from "lucide-react";
import { motion } from "framer-motion";

const PropertyCard = ({ property, featured = false }) => {
  const { title, location, type, image, sqft, bedrooms, bathrooms, parking } =
    property;

  return (
    <motion.div
      className={`bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 ${
        featured ? "mx-2" : ""
      }`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <img src={image} alt={title} className="w-full h-64 object-cover" />
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium inline-flex items-center ${
              type === "rent" ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            For {type}
          </span>
        </div>
        <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-sm hover:shadow-md transition-shadow">
          <Plus className="h-4 w-4" />
        </button>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="flex items-center text-gray-500 mb-4">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">
            {location.address}, {location.city}
          </span>
        </div>

        <div className="flex justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <Square className="h-4 w-4 mr-1" />
            <span>{sqft} sqft</span>
          </div>
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            <span>{bedrooms}</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span>{bathrooms}</span>
          </div>
          <div className="flex items-center">
            <Car className="h-4 w-4 mr-1" />
            <span>{parking}</span>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="text-sm font-medium text-gray-700 hover:text-black transition-colors flex items-center">
            Contact agent
            <ChevronsRight className="h-4 w-4 ml-1" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
