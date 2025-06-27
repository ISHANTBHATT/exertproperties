"use client";
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plus, Star } from "lucide-react";
import Image from "next/image";
import ValuesSection from "../components/ValuesSection";
import Link from "next/link";
import { IoMdArrowRoundForward, IoIosPeople } from "react-icons/io";
import Mission from "../components/Mission";
import OfficeSection from "../components/OfficeSection";
import { motion } from "framer-motion";

const agentCard = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (index) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: index * 0.1,
      duration: 0.5,
    },
  }),
};

const agents = [
  {
    id: 1,
    image: "/images/team1.jpeg",
    name: "OKEY OKATTA",
    designation: "MD/CEO",
    slug: "okey-okatta",
  },
  {
    id: 2,
    image: "/images/team2.jpeg",
    name: "Adanna Okatta",
    designation: "Director",
    slug: "adanna-okatta",
  },
  {
    id: 3,
    image: "/images/team3.jpeg",
    name: "Blessing Young Harris",
    designation: "Legal Advisor",
    slug: "blessing-young-harris",
  },
  {
    id: 4,
    image: "/images/team4.jpeg",
    name: "Bidemi Adeshina",
    designation: "Non Executive Director",
    slug: "bidemi-adeshina",
  },
];

function Page() {
  const nextSectionRef = useRef(null);
  const handleExploreClick = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <main className="min-h-screen bg-[#fafafb] py-20">
      <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-2 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6">
              Turning Spaces into Statements
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 mb-6">
              We pride ourselves as developers of homes and projects that
              represents best in class with regards to meeting standards and
              finishing. Our developments are priced affordably to meet the
              teeming demand of an urban middle class. Our clients expects
              modern designs, proper facility management and breath taking
              common areas and ambient locations
            </p>

            <p className="text-gray-600 mb-6">
              We have a diversified team capable of making good decisions and
              bringing their individual life experiences to fore in every of our
              projects. A combination of engineers, lawyers, bankers with
              experiences spanning over 25 years of active involvement in
              critical decision making.
            </p>

            <div className="flex space-x-6">
              <div
                onClick={handleExploreClick}
                className=" items-center px-2 bg-[#3A9188] rounded-full inline-flex transform transition-transform duration-300 ease-in-out hover:scale-90 group hover:bg-teal-700"
              >
                <button className="rounded-full p-3  bg-[#3A9188] group group-hover:bg-teal-700 text-white">
                  Start exploring
                </button>
                <div className="rounded-full bg-white p-2 group">
                  <IoMdArrowRoundForward className="h-4 w-4 text-[#3A9188]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            ref={nextSectionRef}
          >
            <div className="rounded-3xl overflow-hidden mb-8">
              <Image
                src="/images/p4a-2.jpeg"
                alt="Real estate team"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="grid  gap-8">
              <div>
                <h3 className="text-5xl font-bold mb-2">GAINS HEIGHTS</h3>
                <p className="text-gray-600">LEKKI FORESHORE ESTATE 2024</p>
                <p className="text-gray-600 mt-2">
                  In October 2024, we bought a 1000 square meter of land at
                  Lekki Foreshore Estate Lekki Phase 1 Lagos for our inaugural
                  Ground Floor plus Four 20 units of 2 bedroom luxury flats with
                  a 3 bedroom penthouse. This project is named after our
                  CEO&apos;s hometown Urualla in Ideato North Local Government
                  Area Imo state Nigeria. Urualla is &quot;Gains of a land&quot;
                  when translated in English. This project is tagged GAINS
                  HEIGHTS powered by Exert Properties . We are concluding the
                  drawings and approvals, and will move to the site by October
                  2025. The estimated completion time is the 4th quarter of
                  2027.
                </p>
              </div>
              {/* <div>
                <h3 className="text-5xl font-bold mb-2">
                  10k<span className="text-gray-400">+</span>
                </h3>
                <p className="text-gray-600">Homes purchased</p>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet consectetur fermentum
                </p>
              </div> */}

              {/* <div>
                <h3 className="text-5xl font-bold mb-2">
                  500<span className="text-gray-400">k</span>
                </h3>
                <p className="text-gray-600">Published properties</p>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet consectetur fermentum
                </p>
              </div> */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden h-full"
          >
            <Image
              src="/images/3.jpg"
              alt="Real estate professionals"
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>
      <ValuesSection />
      <Mission />
      <OfficeSection />
      {/* Agents Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* <div className="inline-flex items-center rounded-full bg-gray-100 px-4 py-2 mb-6">
            <Star className="h-4 w-4 mr-2 text-gray-500" />
            <span className="text-sm font-medium">Our agents</span>
          </div> */}
          <div className="inline-flex bg-[#EEEFF1] rounded-full p-2 items-center gap-2 ">
            <div className="rounded-full bg-gray-400 p-2">
              <IoIosPeople className="h-4 w-4 text-white" />
            </div>
            <span className="text-gray-700 text-sm font-semibold">
              Our team
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Meet our team
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your trusted guides in the world of real estate - Get to know the
            faces behind the expertise, and discover how their local insights
            and industry connections can turn your real estate dreams into
            reality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {agents.map((agent, index) => (
            <motion.div
              key={index}
              variants={agentCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
              whileHover={{
                y: -10,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <Link href={`/agent/${agent.slug}`}>
                <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="relative mb-6">
                    <div className="absolute top-0 right-0 bg-[#3A9188] rounded-full p-2">
                      <Plus className="h-6 w-6 text-white" />
                    </div>
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
                      <Image
                        src={agent.image}
                        alt="John Carter"
                        width={128}
                        height={128}
                        className="w-full h-full object-fill"
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-1">{agent.name}</h3>
                    <p className="text-gray-600 mb-6">{agent.designation}</p>

                    <div className="flex justify-center space-x-4">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                      >
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
                          className="h-4 w-4"
                        >
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      </Button>
                      {/* <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
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
                        className="h-4 w-4"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </Button> */}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* <div className="bg-white rounded-xl p-8 shadow-sm ">
            <div className="relative mb-6">
              <div className="absolute top-0 right-0 bg-black rounded-full p-2">
                <Plus className="h-6 w-6 text-white" />
              </div>
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
                <Image
                  src="/images/team3.jpeg"
                  alt="Matt Cannon"
                  width={128}
                  height={128}
                  className="w-full h-full object-fill"
                />
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold mb-1">Adanna Okatta</h3>
              <p className="text-gray-600 mb-6">Director</p>

              <div className="flex justify-center space-x-4">
                <Button variant="outline" size="icon" className="rounded-full">
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
                    className="h-4 w-4"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
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
                    className="h-4 w-4"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="relative mb-6">
              <div className="absolute top-0 right-0 bg-black rounded-full p-2">
                <Plus className="h-6 w-6 text-white" />
              </div>
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
                <Image
                  src="/images/team2.jpeg"
                  alt="Sophie Moore"
                  width={128}
                  height={128}
                  className="w-full h-full object-fill"
                />
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold mb-1">
                Blessing Young Harris
              </h3>
              <p className="text-gray-600 mb-6">legal advisor</p>

              <div className="flex justify-center space-x-4">
                <Button variant="outline" size="icon" className="rounded-full">
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
                    className="h-4 w-4"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
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
                    className="h-4 w-4"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm ">
            <div className="relative mb-6">
              <div className="absolute top-0 right-0 bg-black rounded-full p-2">
                <Plus className="h-6 w-6 text-white" />
              </div>
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
                <Image
                  src="/images/team4.jpeg"
                  alt="Matt Cannon"
                  width={128}
                  height={128}
                  className="w-full h-full object-fill"
                />
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold mb-1">Bidemi Adeshina</h3>
              <p className="text-gray-600 mb-6">Non Executive Director</p>

              <div className="flex justify-center space-x-4">
                <Button variant="outline" size="icon" className="rounded-full">
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
                    className="h-4 w-4"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
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
                    className="h-4 w-4"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </Button>
              </div>
            </div>
          </div> */}
        </div>

        {/* <div className="flex justify-center mt-12 space-x-6">
          <div className=" items-center px-2 bg-black rounded-full inline-flex transform transition-transform duration-300 ease-in-out hover:scale-90 group hover:bg-neutral-800">
            <button className="rounded-full p-3  bg-black group group-hover:bg-neutral-800 text-white">
              Start exploring
            </button>
            <div className="rounded-full bg-white p-2 group">
              <IoMdArrowRoundForward className="h-4 w-4 text-black" />
            </div>
          </div>

          <Button variant="link" className="text-gray-600 flex items-center">
            Browse all agents
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div> */}
      </motion.section>
      {/* Offices Section */}
    </main>
  );
}

export default Page;
