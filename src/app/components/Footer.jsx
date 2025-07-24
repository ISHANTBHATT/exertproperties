"use client";
import React, { useState } from "react";
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
import InquiryFormModal from "./InquiryFormMoal";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleViewDetails = () => {
    setIsModalOpen(true);
  };
  return (
    <div className="bg-[#fafafb]">
      {/* #3A9188 */}
      <footer className="bg-[#3A9188] text-white pt-16 pb-8 rounded-4xl md:mx-6 lg:mx-20 px-4 sm:px-10">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">
              When you think real estate, think reliability. Think Exert
              Properties
            </h2>
            <p className="text-gray-200 mb-6">
              With years of experience and a commitment to excellence, we
              provide elegant, lasting real estate solutions tailored to your
              vision.
            </p>

            <div className="flex flex-wrap gap-3 items-center max-w-sm">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-neutral-200 rounded-full text-neutral-800 px-4 py-3 text-sm"
              />
              <button
                onClick={() => handleViewDetails()}
                className="bg-white text-black rounded-full px-5 py-3 text-sm font-medium transition-colors hover:bg-gray-200 flex items-center"
              >
                Subscribe
                <span className="ml-2">→</span>
              </button>
            </div>

            {/* <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-gray-200 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-200 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-200 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-200 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div> */}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-semibold mb-4">Main pages</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/projects"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="/gallery"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-200 hover:text-white transition-colors"
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
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Style guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  404 not found
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Password protected
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Licenses
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-white transition-colors"
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
                  <Mail className="h-5 w-5 text-gray-200 mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-200">Email address</p>
                    <a
                      href="mailto:Info@exertproperties.com"
                      className="hover:underline"
                    >
                      Info@exertproperties.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <Phone className="h-5 w-5 text-gray-200 mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-200 mb-1">Phone number</p>
                    {/*<p className="text-sm">
                      Nigeria Office : +2347025012424, +2348180000567
                      <br />
                      United States Office : +12549520712, +16465049826
                    </p> */}
                    <Image
                      src="/images/contact.png"
                      alt="Office Map"
                      // className="w-full h-full object-cover"
                      width={400}
                      height={400}
                    />
                  </div>
                </li>
                <li className="flex items-start">
                  <MessageSquare className="h-5 w-5 text-gray-200 mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-200">Help & support</p>
                    <a
                      href="mailto:support@exertproperties.com"
                      className="hover:underline"
                    >
                      support@exertproperties.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Follow us</h3>
              {/* <p className="text-gray-200">sales@exert.com</p> */}
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/people/Exert-Properties-Ltd/100089793377102/"
                  className="hover:text-gray-300"
                  target="_blank"
                >
                  <Facebook className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="https://www.instagram.com/exertpropertiesltd?fbclid=IwY2xjawK97r9leHRuA2FlbQIxMABicmlkETFDVjFUVW5wdFM2T1c1WkI3AR7g2W250FvxF8UmnmVvQZhu5_M265pStFv9O7T88DctVz8XbwsfrIyLbzIfqw_aem_VQNZTHoC5ptDGGgtdw1Rvg"
                  className="hover:text-gray-300"
                  target="_blank"
                >
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Image
                src="/images/logo-white.png"
                alt="Logo"
                width={80}
                height={80}
                className="w-40 h-28"
              />
            </div>
            <div className="flex gap-1 text-sm text-gray-200">
              <p className="">Copyright © Expert Properties</p>
              <p className=""> | Website Developed By</p>
              <a
                href="https://apacedigitalcargo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Apace Digital Cargo
              </a>
            </div>
          </div>
        </div>
      </footer>
      <InquiryFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Footer;
