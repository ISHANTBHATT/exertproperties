import React from "react";
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
      title: "Home in Los Angeles Heart",
      description:
        "Lorem ipsum dolor sit amet consectetur. Id eu mi ac ac aliquam etiam ultrices augue convallis.",
      location: "2596 El Segundo, Los Angeles",
      image: "/images/1.jpg",
      status: "For sale",
    },
    {
      id: 2,
      title: "Luxury Loft in San Francisco",
      description:
        "Lorem ipsum dolor sit amet consectetur. Id eu mi ac ac aliquam etiam ultrices augue convallis.",
      location: "2238 Stradella Rd, SF",
      image: "/images/1.jpg",
      status: "For rent",
    },
    {
      id: 3,
      title: "Modern Villa in Malibu",
      description:
        "Lorem ipsum dolor sit amet consectetur. Id eu mi ac ac aliquam etiam ultrices augue convallis.",
      location: "1432 Ocean Drive, Malibu",
      image: "/images/1.jpg",
      status: "For sale",
    },
  ];
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
      <HeroSection />
      <StatsSection />
      <FeaturedProperties properties={properties2} />
      {/* <FeaturedProperties properties={properties} /> */}
      <AboutSection />
      <WhyUs />
      <PropertyListings properties={properties} />
      <Testimonials />
      <Faqs />
      {/* <Footer /> */}
    </main>
  );
}

export default HomePage;
