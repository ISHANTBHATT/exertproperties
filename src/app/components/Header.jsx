"use client";
import React, { useEffect, useState } from "react";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IoMdArrowRoundForward } from "react-icons/io";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const isHomePage = pathname === "/";
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-5 text-white"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {/* <Home className="h-8 w-8" />
          <span className="text-2xl font-semibold">Property X</span> */}
          <Image
            src="/images/logo2.png"
            alt="Logo"
            width={80}
            height={80}
            className="w-28 h-20"
          />
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="/"
            className="text-lg font-medium hover:text-black transition-colors"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-lg font-medium hover:text-black transition-colors"
          >
            About
          </a>
          <a
            href="/services"
            className="text-lg font-medium hover:text-black transition-colors"
          >
            Services
          </a>
          <a
            href="/projects"
            className="text-lg font-medium hover:text-black transition-colors"
          >
            Projects
          </a>
          <a
            href="/gallery"
            className="text-lg font-medium hover:text-black transition-colors"
          >
            Gallery
          </a>
        </nav>

        {/* <Button>Start exploring</Button> */}
        <div className="flex items-center  bg-black rounded-full w-48 transform transition-transform duration-300 ease-in-out hover:scale-90 group hover:bg-neutral-900">
          <Button
            size="lg"
            className="rounded-full p-6 bg-black group group-hover:bg-neutral-900"
          >
            Start exploring
          </Button>
          <div className="rounded-full bg-white p-2 group">
            <IoMdArrowRoundForward className="h-4 w-4 text-black" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
