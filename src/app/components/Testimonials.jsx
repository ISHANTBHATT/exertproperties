"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronUp, ChevronDown, CircleIcon } from "lucide-react";
import { BiSolidMessageRounded } from "react-icons/bi";

const testimonials = [
  {
    id: 1,
    quote: "Exceptional service, unmatched real estate opportunities in USA.",
    description:
      "Sem egestas elit pretium turpis eu quis tristique phasellus pellentesque elementum pharetra iaculis metus pretium.",
    name: "Kathie Corl",
    location: "New York, NY",
    image: "/images/profile1.jpg",
  },
  {
    id: 2,
    quote: "The best real estate team I've ever worked with.",
    description:
      "Vitae auctor eu augue ut lectus arcu bibendum at varius. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo.",
    name: "John Smith",
    location: "Los Angeles, CA",
    image: "/images/profile3.jpg",
  },
  {
    id: 3,
    quote: "They made buying my first home a breeze.",
    description:
      "Nunc consequat interdum varius sit amet mattis vulputate enim. Sit amet nulla facilisi morbi tempus iaculis urna id.",
    name: "Sarah Johnson",
    location: "Chicago, IL",
    image: "/images/profile2.jpg",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="w-full py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="bg-gray-100 rounded-full p-2 flex items-center gap-2">
            <div className="rounded-full bg-gray-400 p-2">
              <BiSolidMessageRounded className="h-4 w-4 text-white" />
            </div>
            <span className="text-gray-700 font-semibold text-sm">
              Testimonials
            </span>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Look at what people
          <br />
          say about us
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          Lorem ipsum dolor sit amet consectetur. Id eu mi ac ac aliquam etiam
          ultrices augue convallis nunc ultrices amet consequat adipiscing.
        </p>

        <div className="relative bg-white rounded-xl shadow-sm border max-w-4xl mx-auto">
          <div className="absolute right-0 top-0 flex flex-col">
            <button
              onClick={prevTestimonial}
              className="p-4 hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronUp className="h-5 w-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-4 hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronDown className="h-5 w-5" />
            </button>
          </div>

          <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="rounded-full overflow-hidden w-24 h-24">
                <Image
                  src={currentTestimonial.image || "/placeholder.svg"}
                  alt={currentTestimonial.name}
                  width={96}
                  height={96}
                  className="object-cover h-full"
                />
              </div>
            </div>

            <div>
              <blockquote className="text-2xl md:text-3xl font-semibold mb-6">
                "{currentTestimonial.quote}"
              </blockquote>

              <p className="text-gray-600 mb-6">
                {currentTestimonial.description}
              </p>

              <div>
                <p className="font-semibold">{currentTestimonial.name}</p>
                <p className="text-gray-500">{currentTestimonial.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
