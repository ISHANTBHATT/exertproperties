import Image from "next/image";
import {
  Check,
  ArrowRight,
  CircleIcon,
  Search,
  Square,
  Bath,
  Bed,
  Car,
} from "lucide-react";
import { IoMdArrowRoundForward } from "react-icons/io";

export default function WhyUs() {
  return (
    <section className="w-full py-10 md:p-10 lg:p-16">
      <div className="w-full container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="bg-blue-50 rounded-3xl overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/1.jpg"
                  alt="Modern luxury home"
                  fill
                  className="object-cover"
                />

                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 shadow-md">
                  <Square className="h-5 w-5 text-gray-500" />
                  <span className="text-sm font-medium">2,553 sqft</span>
                </div>

                <div className="absolute top-1/3 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 shadow-md">
                  <Bath className="h-5 w-5 text-gray-500" />
                  <span className="text-sm font-medium">2 bathrooms</span>
                </div>

                <div className="absolute bottom-1/4 left-8 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 shadow-md">
                  <Bed className="h-5 w-5 text-gray-500" />
                  <span className="text-sm font-medium">4 parking zones</span>
                </div>

                <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 shadow-md">
                  <Car className="h-5 w-5 text-gray-500" />
                  <span className="text-sm font-medium">4 bedrooms</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 bg-[#EEEFF1] rounded-full p-2 mb-6">
              <div className="rounded-full bg-gray-400 p-2">
                <Search className="h-3 w-3 text-white" />
              </div>

              <span className="text-gray-700 font-semibold text-sm">
                Why us?
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Innovation defines
              <br />
              our real estate
            </h2>

            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean
              potenti. Metus in eu vel morbi dui nunc tellus. Non a massa.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <div className="bg-black rounded-full p-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span>Move in 30 days or less</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-black rounded-full p-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span>The best interest available</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-black rounded-full p-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span>Over 10% YoY home appreciation</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-black rounded-full p-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span>Near Los Angeles office area</span>
              </li>
            </ul>

            {/* <button className="bg-black text-white rounded-full px-3 py-2 flex items-center gap-2 hover:bg-neutral-800 transform transition-transform duration-300 ease-in-out hover:scale-90">
              Start exploring

              <div className="rounded-full bg-white p-2 group">
                <IoMdArrowRoundForward className="h-4 w-4 text-black" />
              </div>
            </button> */}
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
        </div>
      </div>
    </section>
  );
}
