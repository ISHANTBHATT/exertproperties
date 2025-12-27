"use client";
import React, { useRef } from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import AmenitiesSection from "./AmenitiesSection";
import FloorPlansSection from "./FloorPlansSection";
import ContactSection from "./ContactSection";
import FeaturedProperties from "./FeaturedProperties";
import Footer from "./Footer";
import Header from "./Header";
import StatsSection from "./StatsSection";
import Hero from "./Hero";
import PropertyListings from "./PropertyListings";
import { properties } from "../data/properties";
import WhyUs from "./WhyUs";
import { Faqs } from "./Faq";
import Testimonials from "./Testimonials";
function HomePage() {
  const properties2 = [
    {
      id: 1,
      title: "FIX & FLIP OF A FIRE DAMAGED CONDO",
      description:
        " It had a cosmetic fire damage. We were able to partner with some local contractors to bring it back to life and was done by December 2023. ",
      location: "2701 Northeast Dr #B-2, Austin, TX 78723",
      image: "/images/p2-2.jpg",
      status: "For Sale",
    },
    {
      id: 2,
      location: "Lekki Foreshore Estate Lekki Phase 1 Lagos, Nigeria",
      title: "GAINS HEIGHTS",
      status: "For Sale",
      description:
        ' This project is named after our CEO\'s hometown Urualla in Ideato North Local Government Area Imo state Nigeria. Urualla is "Gains of a land" when translated in English. We are concluding the drawings and approvals, and will move to the site by October 2025. The estimated completion time is the 4th quarter of 2027.',
      image: "/images/p0.jpg",
    },
    {
      id: 3,
      title: "2 Bedroom Shotlet in Lekki 1",
      description:
        "A contemporary tastefully furnished & finished 2 bed apartment serviced and located at the ambient heart of Lekki phase 1. Two minutes drive to Ikoyi and Victoria Island.",
      location: "Lekki Foreshore Estate Lekki Phase 1 Lagos, Nigeria",
      image: "/images/h1-3.jpeg",
      status: "For Shotlet",
    },
    {
      id: 4,
      title: "3 in 1 FULL DETACHED HOUSES",
      description:
        "This was our inaugural project located at Vitoria Crest 2 Estate Orchid Lekki Lagos State Nigeria. It consists of 2 units of Full detached all Ensuite 4 bedroom duplexes with Maids room.",
      location: "Vitoria Crest 2 Estate Orchid Lekki Lagos, Nigeria",
      image: "/images/p1-8.jpeg",
      status: "Sold",
    },
    {
      id: 5,
      location:
        "Ukuta Close off Valley Crescent off Nza Street Independence Layout Enugu, Nigeria",
      title: "GAINS MINI",
      date: "INDEPENDENCE LAYOUT 2023",
      status: "For Sale",
      description:
        "Gains Mini Independence Layout Enugu State. This mini estate is uniquely designed to be the best mini estate in enugu at completion Q3 2026. Its a 7 unit of 5 bedroom all ensuite 5 bedroom duplexes on 2 floors. It comes with a 30 x 60 square meters playground for the convenience of the occupants.",
      image: "/images/p5-0.jpeg",
    },
  ];
  const statsRef = useRef(null);
  return (
    // <main className="min-h-screen bg-[#f9f6f2]">
    //   <HeroSection />
    //   <AboutSection />
    //   <AmenitiesSection />
    //   <FloorPlansSection />
    //   <ContactSection />
    // </main>
    <main className="min-h-screen">
      {/* <Header /> */}
      {/* <Hero /> */}
      <HeroSection scrollToRef={statsRef} />
      {/* <div ref={statsRef}>
        <StatsSection />
      </div> */}
      <div ref={statsRef} className="pt-20">
        <FeaturedProperties properties={properties2} />
      </div>
      {/* <FeaturedProperties properties={properties} /> */}
      <AboutSection />
      <WhyUs />
      <PropertyListings properties={properties} />
      {/* <Testimonials /> */}
      <Faqs />
      {/* <Footer /> */}
    </main>
  );
}

export default HomePage;
