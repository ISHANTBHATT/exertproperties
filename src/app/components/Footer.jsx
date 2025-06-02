import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Home,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#fafafb]">
      <footer className="bg-black text-white pt-16 pb-8 rounded-4xl md:mx-6 lg:mx-20 px-10">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">
              When you think real estate, think reliability. Think Exert
              Properties
            </h2>
            <p className="text-gray-400 mb-6">
              With years of experience and a commitment to excellence, we
              provide elegant, lasting real estate solutions tailored to your
              vision.
            </p>

            <div className="flex items-center space-x-3 max-w-sm">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-neutral-800 rounded-full px-4 py-3 text-sm"
              />
              <button className="bg-white text-black rounded-full px-5 py-3 text-sm font-medium transition-colors hover:bg-gray-200 flex items-center">
                Subscribe
                <span className="ml-2">→</span>
              </button>
            </div>

            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-semibold mb-4">Main pages</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/projects"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="/gallery"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* <div>
            <h3 className="text-lg font-semibold mb-4">Utility pages</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Style guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  404 not found
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Password protected
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Licenses
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Changelog
                </a>
              </li>
            </ul>
          </div> */}

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Mail className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-400">Email address</p>
                    <p>info@home.com</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Phone className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-400">Phone number</p>
                    <p>
                      +2347025012424, +2348180000567, +12549520712, +16465049826
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MessageSquare className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-400">Help & support</p>
                    <p>support@home.com</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Sales executives</h3>
              <p className="text-gray-400">sales@home.com</p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Image
                src="/images/logo-white.png"
                alt="Logo"
                width={80}
                height={80}
                className="w-40 h-28"
              />
            </div>
            <p className="text-sm text-gray-400">
              Copyright © Expert Properties
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
