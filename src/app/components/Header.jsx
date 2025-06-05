// "use client";
// import React, { useEffect, useState } from "react";
// import { Home } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { IoMdArrowRoundForward } from "react-icons/io";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import Link from "next/link";

// const Header = () => {
//   const pathname = usePathname();
//   const [isScrolled, setIsScrolled] = useState(false);
//   const isHomePage = pathname === "/";
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled || !isHomePage
//           ? "bg-white shadow-md py-3"
//           : "bg-transparent py-5 text-white"
//       }`}
//     >
//       <div className="container mx-auto px-4 flex items-center justify-between">
//         <div className="flex items-center space-x-2">
//           {/* <Home className="h-8 w-8" />
//           <span className="text-2xl font-semibold">Property X</span> */}
//           <Image
//             src="/images/logo2.png"
//             alt="Logo"
//             width={80}
//             height={80}
//             className="w-28 h-20"
//           />
//         </div>

//         <nav className="hidden md:flex items-center space-x-8">
//           <a
//             href="/"
//             className="text-lg font-medium hover:text-black transition-colors"
//           >
//             Home
//           </a>
//           <a
//             href="/about"
//             className="text-lg font-medium hover:text-black transition-colors"
//           >
//             About
//           </a>
//           <a
//             href="/services"
//             className="text-lg font-medium hover:text-black transition-colors"
//           >
//             Services
//           </a>
//           <a
//             href="/projects"
//             className="text-lg font-medium hover:text-black transition-colors"
//           >
//             Projects
//           </a>
//           <a
//             href="/gallery"
//             className="text-lg font-medium hover:text-black transition-colors"
//           >
//             Gallery
//           </a>
//         </nav>

//         {/* <Button>Start exploring</Button> */}
//         {/* <div className=" inline-flex items-center p-2 bg-black rounded-full transform transition-transform duration-300 ease-in-out hover:scale-90 group hover:bg-neutral-900">
//           <Button
//             size="lg"
//             className="rounded-full p-6 bg-black group group-hover:bg-neutral-900"
//           >
//             Contact
//           </Button>
//           <div className="rounded-full bg-white p-2 group">
//             <IoMdArrowRoundForward className="h-4 w-4 text-black" />
//           </div>
//         </div> */}

//         <Link href="/contact">
//           <div className=" items-center px-2 bg-black rounded-full inline-flex transform transition-transform duration-300 ease-in-out hover:scale-90 group hover:bg-neutral-800">
//             <button className="rounded-full p-3  bg-black group group-hover:bg-neutral-800 text-white">
//               Contact
//             </button>
//             <div className="rounded-full bg-white p-2 group">
//               <IoMdArrowRoundForward className="h-4 w-4 text-black" />
//             </div>
//           </div>
//         </Link>
//       </div>
//     </header>
//   );
// };

// export default Header;

//test1
// "use client";
// import React, { useEffect, useState } from "react";
// import { Home } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { IoMdArrowRoundForward } from "react-icons/io";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import Link from "next/link";

// const Header = () => {
//   const pathname = usePathname();
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const isHomePage = pathname === "/";

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Close mobile menu when clicking on a link
//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//   };

//   // Prevent body scroll when mobile menu is open
//   useEffect(() => {
//     if (isMobileMenuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }

//     // Cleanup on unmount
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [isMobileMenuOpen]);

//   return (
//     <>
//       <header
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           isScrolled || !isHomePage
//             ? "bg-white shadow-md py-3"
//             : "bg-transparent py-5 text-white"
//         }`}
//       >
//         <div className="container mx-auto px-4 flex items-center justify-between">
//           <div className="flex items-center space-x-2">
//             <Image
//               src="/images/logo2.png"
//               alt="Logo"
//               width={80}
//               height={80}
//               className="w-28 h-20"
//             />
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             <a
//               href="/"
//               className="text-lg font-medium hover:text-black transition-colors"
//             >
//               Home
//             </a>
//             <a
//               href="/about"
//               className="text-lg font-medium hover:text-black transition-colors"
//             >
//               About
//             </a>
//             <a
//               href="/services"
//               className="text-lg font-medium hover:text-black transition-colors"
//             >
//               Services
//             </a>
//             <a
//               href="/projects"
//               className="text-lg font-medium hover:text-black transition-colors"
//             >
//               Projects
//             </a>
//             <a
//               href="/gallery"
//               className="text-lg font-medium hover:text-black transition-colors"
//             >
//               Gallery
//             </a>
//           </nav>

//           {/* Desktop Contact Button */}
//           <div className="hidden md:block">
//             <Link href="/contact">
//               <div className="items-center px-2 bg-black rounded-full inline-flex transform transition-transform duration-300 ease-in-out hover:scale-90 group hover:bg-neutral-800">
//                 <button className="rounded-full p-3 bg-black group group-hover:bg-neutral-800 text-white">
//                   Contact
//                 </button>
//                 <div className="rounded-full bg-white p-2 group">
//                   <IoMdArrowRoundForward className="h-4 w-4 text-black" />
//                 </div>
//               </div>
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center z-50"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             aria-label="Toggle mobile menu"
//           >
//             <div className="relative">
//               {/* Top line */}
//               <div
//                 className={`w-6 h-0.5 bg-black transition-all duration-300 ease-in-out ${
//                   isMobileMenuOpen
//                     ? "rotate-45 translate-y-0"
//                     : "rotate-0 -translate-y-1.5"
//                 }`}
//               />
//               {/* Middle line */}
//               <div
//                 className={`w-6 h-0.5 bg-black transition-all duration-300 ease-in-out ${
//                   isMobileMenuOpen ? "opacity-0" : "opacity-100"
//                 }`}
//               />
//               {/* Bottom line */}
//               <div
//                 className={`w-6 h-0.5 bg-black transition-all duration-300 ease-in-out ${
//                   isMobileMenuOpen
//                     ? "-rotate-45 -translate-y-0.5"
//                     : "rotate-0 translate-y-1.5"
//                 }`}
//               />
//             </div>
//           </button>
//         </div>
//       </header>

//       {/* Mobile Menu Overlay */}
//       <div
//         className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ease-in-out ${
//           isMobileMenuOpen
//             ? "opacity-100 pointer-events-auto"
//             : "opacity-0 pointer-events-none"
//         }`}
//       >
//         {/* Background overlay */}
//         <div
//           className="absolute inset-0 bg-black bg-opacity-50"
//           onClick={closeMobileMenu}
//         />

//         {/* Menu panel */}
//         <div
//           className={`absolute top-0 left-0 w-full h-full bg-white transform transition-transform duration-300 ease-in-out ${
//             isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
//           }`}
//         >
//           <div className="flex flex-col justify-center items-center h-full space-y-8 text-center">
//             <nav className="flex flex-col space-y-6">
//               <a
//                 href="/"
//                 className="text-3xl font-medium text-black hover:text-gray-600 transition-colors"
//                 onClick={closeMobileMenu}
//               >
//                 Home
//               </a>
//               <a
//                 href="/about"
//                 className="text-3xl font-medium text-black hover:text-gray-600 transition-colors"
//                 onClick={closeMobileMenu}
//               >
//                 About
//               </a>
//               <a
//                 href="/services"
//                 className="text-3xl font-medium text-black hover:text-gray-600 transition-colors"
//                 onClick={closeMobileMenu}
//               >
//                 Services
//               </a>
//               <a
//                 href="/projects"
//                 className="text-3xl font-medium text-black hover:text-gray-600 transition-colors"
//                 onClick={closeMobileMenu}
//               >
//                 Projects
//               </a>
//               <a
//                 href="/gallery"
//                 className="text-3xl font-medium text-black hover:text-gray-600 transition-colors"
//                 onClick={closeMobileMenu}
//               >
//                 Gallery
//               </a>
//             </nav>

//             {/* Mobile Contact Button */}
//             <Link href="/contact" onClick={closeMobileMenu}>
//               <div className="items-center px-4 py-2 bg-black rounded-full inline-flex transform transition-transform duration-300 ease-in-out hover:scale-90 group hover:bg-neutral-800">
//                 <button className="rounded-full p-4 bg-black group group-hover:bg-neutral-800 text-white text-xl">
//                   Contact
//                 </button>
//                 <div className="rounded-full bg-white p-3 group ml-2">
//                   <IoMdArrowRoundForward className="h-5 w-5 text-black" />
//                 </div>
//               </div>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;

//test2
// "use client";
// import React, { useEffect, useState } from "react";
// import { Home } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { IoMdArrowRoundForward } from "react-icons/io";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import Link from "next/link";

// const Header = () => {
//   const pathname = usePathname();
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const isHomePage = pathname === "/";

//   // Prevent scrolling when menu is open
//   useEffect(() => {
//     if (isMenuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }

//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [isMenuOpen]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Navigation links
//   const navLinks = [
//     { href: "/", label: "Home" },
//     { href: "/about", label: "About" },
//     { href: "/services", label: "Services" },
//     { href: "/projects", label: "Projects" },
//     { href: "/gallery", label: "Gallery" },
//     { href: "/contact", label: "Contact" },
//   ];

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled || !isHomePage
//           ? "bg-white shadow-md py-3"
//           : "bg-transparent py-5 text-white"
//       }`}
//     >
//       <div className="container mx-auto px-4 flex items-center justify-between">
//         <div className="flex items-center space-x-2">
//           <Image
//             src="/images/logo2.png"
//             alt="Logo"
//             width={80}
//             height={80}
//             className="w-28 h-20"
//           />
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center space-x-8">
//           {navLinks.slice(0, 5).map((link) => (
//             <a
//               key={link.href}
//               href={link.href}
//               className={`text-lg font-medium hover:text-black transition-colors ${
//                 isScrolled || !isHomePage ? "text-black" : "text-white"
//               }`}
//             >
//               {link.label}
//             </a>
//           ))}
//         </nav>

//         {/* Desktop Contact Button */}
//         <div className="hidden md:block">
//           <Link href="/contact">
//             <div className="items-center px-2 bg-black rounded-full inline-flex transform transition-transform duration-300 ease-in-out hover:scale-90 group hover:bg-neutral-800">
//               <button className="rounded-full p-3 bg-black group group-hover:bg-neutral-800 text-white">
//                 Contact
//               </button>
//               <div className="rounded-full bg-white p-2 group">
//                 <IoMdArrowRoundForward className="h-4 w-4 text-black" />
//               </div>
//             </div>
//           </Link>
//         </div>

//         {/* Mobile Burger Button */}
//         <button
//           className="md:hidden z-50 relative w-8 h-8 focus:outline-none"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-label="Toggle menu"
//         >
//           <span
//             className={`absolute top-1/2 left-0 w-full h-0.5  transform transition duration-300 ease-in-out bg-black ${
//               isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
//             } `}
//           ></span>
//           <span
//             className={`absolute top-1/2 left-0 w-full h-0.5  transform transition duration-300 ease-in-out bg-black ${
//               isMenuOpen ? "opacity-0" : ""
//             } `}
//           ></span>
//           <span
//             className={`absolute top-1/2 left-0 w-full h-0.5  transform transition duration-300 ease-in-out bg-black ${
//               isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
//             } `}
//           ></span>
//         </button>

//         {/* Mobile Menu */}
//         <div
//           className={`fixed inset-0 z-40 bg-white transition-all duration-300 ease-in-out transform ${
//             isMenuOpen
//               ? "opacity-100 scale-100"
//               : "opacity-0 scale-0 pointer-events-none"
//           }`}
//           style={{
//             transformOrigin: "top right",
//           }}
//         >
//           <div className="flex flex-col items-center justify-center h-full">
//             <nav className="flex flex-col items-center space-y-8">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.href}
//                   href={link.href}
//                   className="text-2xl font-medium text-black hover:text-gray-600"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {link.label}
//                 </a>
//               ))}
//             </nav>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

"use client";
import React, { useEffect, useState } from "react";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IoMdArrowRoundForward } from "react-icons/io";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
          animation-delay: 0.2s;
        }

        .animate-slide-up {
          animation: slide-up 0.4s ease-out forwards;
        }
      `}</style>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHomePage
            ? "bg-white shadow-md py-3"
            : "bg-transparent py-5 text-white"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="/images/logo2.png"
              alt="Logo"
              width={80}
              height={80}
              className="w-28 h-20"
            />
          </div>

          {/* Desktop Navigation */}
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

          {/* Desktop Contact Button */}
          <div className="hidden md:block">
            <Link href="/contact">
              <div className="items-center px-2 bg-black rounded-full inline-flex transform transition-transform duration-300 ease-in-out hover:scale-90 group hover:bg-neutral-800">
                <button className="rounded-full p-3 bg-black group group-hover:bg-neutral-800 text-white">
                  Contact
                </button>
                <div className="rounded-full bg-white p-2 group">
                  <IoMdArrowRoundForward className="h-4 w-4 text-black" />
                </div>
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="relative">
              {/* Top line */}
              <div
                className={`w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen
                    ? "rotate-45 translate-y-0"
                    : "rotate-0 -translate-y-1.5"
                }`}
              />
              {/* Middle line */}
              <div
                className={`w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              {/* Bottom line */}
              <div
                className={`w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen
                    ? "-rotate-45 -translate-y-0.5"
                    : "rotate-0 translate-y-1.5"
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Background overlay */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={closeMobileMenu}
        />

        {/* Menu panel */}
        <div
          className={`absolute bg-white transform transition-all duration-500 ease-in-out ${
            isMobileMenuOpen
              ? "top-0 right-0 w-full h-full scale-100 rounded-none"
              : "top-5 right-4 w-8 h-8 scale-0 rounded-lg"
          }`}
          style={{
            transformOrigin: isMobileMenuOpen ? "top right" : "center",
          }}
        >
          {isMobileMenuOpen && (
            <div className="flex flex-col justify-center items-center h-full space-y-8 text-center opacity-0 animate-fade-in">
              <nav className="flex flex-col space-y-6">
                <a
                  href="/"
                  className="text-3xl font-medium text-black hover:text-gray-600 transition-colors transform translate-y-4 animate-slide-up"
                  onClick={closeMobileMenu}
                  style={{ animationDelay: "0.1s" }}
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="text-3xl font-medium text-black hover:text-gray-600 transition-colors transform translate-y-4 animate-slide-up"
                  onClick={closeMobileMenu}
                  style={{ animationDelay: "0.2s" }}
                >
                  About
                </a>
                <a
                  href="/services"
                  className="text-3xl font-medium text-black hover:text-gray-600 transition-colors transform translate-y-4 animate-slide-up"
                  onClick={closeMobileMenu}
                  style={{ animationDelay: "0.3s" }}
                >
                  Services
                </a>
                <a
                  href="/projects"
                  className="text-3xl font-medium text-black hover:text-gray-600 transition-colors transform translate-y-4 animate-slide-up"
                  onClick={closeMobileMenu}
                  style={{ animationDelay: "0.4s" }}
                >
                  Projects
                </a>
                <a
                  href="/gallery"
                  className="text-3xl font-medium text-black hover:text-gray-600 transition-colors transform translate-y-4 animate-slide-up"
                  onClick={closeMobileMenu}
                  style={{ animationDelay: "0.5s" }}
                >
                  Gallery
                </a>
              </nav>

              {/* Mobile Contact Button */}
              <Link href="/contact" onClick={closeMobileMenu}>
                <div
                  className="items-center px-4 py-2 bg-black rounded-full inline-flex transform transition-transform duration-300 ease-in-out hover:scale-90 group hover:bg-neutral-800 translate-y-4 animate-slide-up"
                  style={{ animationDelay: "0.6s" }}
                >
                  <button className="rounded-full p-4 bg-black group group-hover:bg-neutral-800 text-white text-xl">
                    Contact
                  </button>
                  <div className="rounded-full bg-white p-3 group ml-2">
                    <IoMdArrowRoundForward className="h-5 w-5 text-black" />
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
