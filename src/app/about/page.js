import { Button } from "@/components/ui/button";
import { ArrowRight, Plus, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import ValuesSection from "../components/ValuesSection";
import Link from "next/link";
import { IoMdArrowRoundForward, IoIosPeople } from "react-icons/io";
import Mission from "../components/Mission";
import OfficeSection from "../components/OfficeSection";

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
    designation: "legal advisor",
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
  return (
    <main className="min-h-screen bg-[#fafafb] py-20">
      <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-2 md:gap-12">
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6">
              About our real estate firm
            </h2>
          </div>

          <div>
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
              <div className=" items-center px-2 bg-black rounded-full inline-flex transform transition-transform duration-300 ease-in-out hover:scale-90 group hover:bg-neutral-800">
                <button className="rounded-full p-3  bg-black group group-hover:bg-neutral-800 text-white">
                  Start exploring
                </button>
                <div className="rounded-full bg-white p-2 group">
                  <IoMdArrowRoundForward className="h-4 w-4 text-black" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div>
            <div className="rounded-3xl overflow-hidden mb-8">
              <Image
                src="/images/1.jpg"
                alt="Real estate team"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-5xl font-bold mb-2">
                  10k<span className="text-gray-400">+</span>
                </h3>
                <p className="text-gray-600">Homes purchased</p>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet consectetur fermentum
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-bold mb-2">
                  500<span className="text-gray-400">k</span>
                </h3>
                <p className="text-gray-600">Published properties</p>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet consectetur fermentum
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden h-full">
            <Image
              src="/images/1.jpg"
              alt="Real estate professionals"
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <ValuesSection />
      <Mission />
      <OfficeSection />
      {/* Agents Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          {/* <div className="inline-flex items-center rounded-full bg-gray-100 px-4 py-2 mb-6">
            <Star className="h-4 w-4 mr-2 text-gray-500" />
            <span className="text-sm font-medium">Our agents</span>
          </div> */}
          <div className="inline-flex bg-[#EEEFF1] rounded-full p-2 items-center gap-2 ">
            <div className="rounded-full bg-gray-400 p-2">
              <IoIosPeople className="h-4 w-4 text-white" />
            </div>
            <span className="text-gray-700 text-sm font-semibold">
              Our agents
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Meet our agents
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean
            potenti. Metus in eu vel morbi dui nunc tellus. Non a massa maecenas
            massa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {agents.map((agent) => (
            <Link key={agent.key} href={`/agent/${agent.slug}`}>
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="relative mb-6">
                  <div className="absolute top-0 right-0 bg-black rounded-full p-2">
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
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
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

        <div className="flex justify-center mt-12 space-x-6">
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
        </div>
      </section>
      {/* Offices Section */}
    </main>
  );
}

export default Page;
