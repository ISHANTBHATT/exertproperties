"use client";

import React from "react";

import { useState } from "react";
import {
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
  User,
  MessageSquare,
  MapPin,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Faqs } from "../components/Faq";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <main className="min-h-screen py-28 bg-[#fafafb]">
      <section className="bg-black text-white py-16 px-4 md:px-8 lg:px-16 rounded-4xl md:mx-6 lg:mx-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6">
            Contact us
          </h1>
          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12">
            We’re here to help you find your perfect space.
            <br />
            Reach out to us and let’s start your real estate journey together.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-white rounded-3xl p-8">
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="fullName"
                      className="block text-black font-medium"
                    >
                      Full name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="Full name"
                        className="pl-10 bg-gray-100 border-0 text-black"
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-black font-medium"
                    >
                      Email address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="example@email.com"
                        className="pl-10 bg-gray-100 border-0 text-black"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="block text-black font-medium"
                    >
                      Phone number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(123) 456 - 7890"
                        className="pl-10 bg-gray-100 border-0 text-black"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="block text-black font-medium"
                    >
                      Subject
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <MessageSquare className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="ex. Support"
                        className="pl-10 bg-gray-100 border-0 text-black"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-black font-medium"
                  >
                    Listing short description
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Write your message here..."
                    className="min-h-[150px] bg-gray-100 border-0 text-black"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <div className="mt-6">
                  <Button
                    type="submit"
                    className="bg-black text-white rounded-full px-6 py-3 flex items-center gap-2 hover:bg-gray-800"
                  >
                    Send message
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>
              </form>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Reach us directly
                </h2>
                <p className="text-gray-400 mb-8">
                  Have questions or are you ready to take the next step? Connect
                  with us directly for personalized assistance and prompt
                  responses.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-6 w-6" />
                    <div>
                      <p className="text-sm text-gray-400">Send us an email</p>
                      <p className="font-medium">contact@property.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-6 w-6" />
                    <div>
                      <p className="text-sm text-gray-400">Phone number</p>
                      <p className="font-medium">
                        +2347025012424, +2348180000567, +12549520712,
                        +16465049826
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Follow us on social media
                </h2>
                <p className="text-gray-400 mb-8">
                  Stay connected for the latest property updates, market
                  insights, and exclusive offers. Join our community and never
                  miss a beat!
                </p>

                <div className="flex gap-4">
                  <a href="#" className="hover:text-gray-300">
                    <Facebook className="h-6 w-6" />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a href="#" className="hover:text-gray-300">
                    <Twitter className="h-6 w-6" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a href="#" className="hover:text-gray-300">
                    <Instagram className="h-6 w-6" />
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a href="#" className="hover:text-gray-300">
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gray-200 rounded-full px-4 py-2 mb-6">
            <MapPin className="h-5 w-5 text-gray-600" />
            <span className="text-gray-700 font-medium">Our offices</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Your dream property awaits!
          </h2>
          <p className="text-gray-600 max-w-2xl mb-8">
            Drop by our office—where your property journey begins with a
            friendly smile and expert guidance.
          </p>

          <div className="flex justify-end mb-8">
            <Button className="bg-black text-white rounded-full px-6 py-6 flex items-center gap-2 hover:bg-gray-800">
              Contact us
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src="/images/6.jpg"
                alt="San Francisco Office"
                width={800}
                height={600}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white text-3xl font-bold mb-4">Nigeria</h3>
                {/* <p className="text-white/80 mb-6">
                  Lorem ipsum dolor sit amet consectetur tellus eu enim ultrices
                  imperdiet faucibus elementum.
                </p> */}
                <div className="flex items-center gap-2 text-white mb-6">
                  <MapPin className="h-5 w-5" />
                  <span>
                    287B Akin Olugbade Street Victoria Island, Lagos Lagos State
                    Nigeria
                  </span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Phone className="h-5 w-5" />
                  <span>+2347025012424, +2348180000567</span>
                </div>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src="/images/7.jpg"
                alt="San Francisco Office"
                width={800}
                height={600}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white text-3xl font-bold mb-4">
                  United States
                </h3>
                {/* <p className="text-white/80 mb-6">
                  Lorem ipsum dolor sit amet consectetur tellus eu enim ultrices
                  imperdiet faucibus elementum.
                </p> */}
                <div className="flex items-center gap-2 text-white mb-6">
                  <MapPin className="h-5 w-5" />
                  <span>
                    3403 Pistoia Trail, Temple Texas 776502 United States
                  </span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Phone className="h-5 w-5" />
                  <span>+12549520712, +16465049826</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Faqs className="flex flex-col lg:flex-row items-center " />
    </main>
  );
}
