import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiSolidHomeAlt2 } from "react-icons/bi";
import { IoMdArrowRoundForward } from "react-icons/io";

function OfficeSection() {
  return (
    <div className="md:mx-6 lg:mx-20">
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-black text-white rounded-4xl">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            {/* <div className="inline-flex items-center rounded-full bg-gray-800 px-4 py-2 mb-6">
              <Star className="h-4 w-4 mr-2 text-gray-400" />
              <span className="text-sm font-medium">Our offices</span>
            </div> */}
            <div className="inline-flex items-center p-2 gap-2 bg-neutral-800 text-white rounded-full font-semibold text-sm mb-4">
              <div className="rounded-full bg-neutral-700 p-2">
                <BiSolidHomeAlt2 className="h-3 w-3 text-white" />
              </div>
              Our offices
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Your dream property awaits!
            </h2>

            <p className="text-gray-400 max-w-2xl">
              Drop by our office—where your property journey begins with a
              friendly smile and expert guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-3xl overflow-hidden">
              <div className="relative h-80">
                <Image
                  src="/images/1.jpg"
                  alt="San Francisco Office"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8 space-y-6">
                <h3 className="text-2xl font-semibold">Nigeria</h3>
                <p className="text-gray-400">
                  287B Akin Olugbade Street Victoria Island, Lagos Lagos State
                  Nigeria
                </p>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 mr-3"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <span>sanfrancisco@property.com</span>
                  </div>

                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 mr-3"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>+2347025012424, +2348180000567</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden">
              <div className="relative h-80">
                <Image
                  src="/images/1.jpg"
                  alt="Los Angeles Office"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8 space-y-6">
                <h3 className="text-2xl font-semibold">United States</h3>
                <p className="text-gray-400">
                  3403 Pistoia Trail, Temple Texas 776502 United States
                </p>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 mr-3"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <span>losangeles@property.com</span>
                  </div>

                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 mr-3"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>+12549520712, +16465049826</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            {/* <Button
              variant="outline"
              className="rounded-full px-6 py-6 h-auto border-white text-white hover:bg-white hover:text-black"
            >
              Contact us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button> */}
            <Link href="/contact">
              <div className=" items-center px-2 bg-white rounded-full inline-flex transform transition-transform duration-300 ease-in-out hover:scale-90 group hover:bg-gray-300">
                <button className="rounded-full p-2 font-semibold group group-hover:bg-gray-300 text-black">
                  Contact us
                </button>
                <div className="rounded-full bg-black p-2 group">
                  <IoMdArrowRoundForward className="h-4 w-4 text-white" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OfficeSection;
