// "use client";

// import React from "react";

// import { useState } from "react";
// import {
//   Mail,
//   Phone,
//   Facebook,
//   Twitter,
//   Instagram,
//   Linkedin,
//   ArrowRight,
//   User,
//   MessageSquare,
//   MapPin,
// } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import { Faqs } from "../components/Faq";
// import { motion } from "framer-motion";

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     // Add your form submission logic here
//   };

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   const fadeIn = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { duration: 0.8 } },
//   };

//   const cardHover = {
//     hover: {
//       y: -10,
//       transition: { duration: 0.3, ease: "easeOut" },
//     },
//   };

//   return (
//     <main className="min-h-screen py-28 bg-[#fafafb]">
//       <motion.section
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//         className="bg-[#3A9188] text-white py-16 px-4 md:px-8 lg:px-16 rounded-4xl md:mx-6 lg:mx-20"
//       >
//         <div className="max-w-7xl mx-auto">
//           <motion.h1
//             variants={itemVariants}
//             className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6"
//           >
//             Contact us
//           </motion.h1>
//           <motion.p
//             variants={itemVariants}
//             className="text-gray-200 text-center max-w-3xl mx-auto mb-12"
//           >
//             We’re here to help you find your perfect space.
//             <br />
//             Reach out to us and let’s start your real estate journey together.
//           </motion.p>

//           <motion.div
//             variants={containerVariants}
//             className="grid md:grid-cols-2 gap-12 items-start"
//           >
//             <div className="bg-white rounded-3xl p-8">
//               <form onSubmit={handleSubmit}>
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div className="space-y-2">
//                     <label
//                       htmlFor="fullName"
//                       className="block text-neutral-800 font-medium"
//                     >
//                       Full name
//                     </label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
//                         <User className="h-5 w-5 text-gray-400" />
//                       </div>
//                       <Input
//                         id="fullName"
//                         name="fullName"
//                         type="text"
//                         placeholder="Full name"
//                         className="pl-10 bg-gray-100 border-0 text-black"
//                         value={formData.fullName}
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <label
//                       htmlFor="email"
//                       className="block text-neutral-800 font-medium"
//                     >
//                       Email address
//                     </label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
//                         <Mail className="h-5 w-5 text-gray-400" />
//                       </div>
//                       <Input
//                         id="email"
//                         name="email"
//                         type="email"
//                         placeholder="example@email.com"
//                         className="pl-10 bg-gray-100 border-0 text-black"
//                         value={formData.email}
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <label
//                       htmlFor="phone"
//                       className="block text-neutral-800 font-medium"
//                     >
//                       Phone number
//                     </label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
//                         <Phone className="h-5 w-5 text-gray-400" />
//                       </div>
//                       <Input
//                         id="phone"
//                         name="phone"
//                         type="tel"
//                         placeholder="(123) 456 - 7890"
//                         className="pl-10 bg-gray-100 border-0 text-black"
//                         value={formData.phone}
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <label
//                       htmlFor="subject"
//                       className="block text-neutral-800 font-medium"
//                     >
//                       Subject
//                     </label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
//                         <MessageSquare className="h-5 w-5 text-gray-400" />
//                       </div>
//                       <Input
//                         id="subject"
//                         name="subject"
//                         type="text"
//                         placeholder="ex. Support"
//                         className="pl-10 bg-gray-100 border-0 text-black"
//                         value={formData.subject}
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-6 space-y-2">
//                   <label
//                     htmlFor="message"
//                     className="block text-neutral-800 font-medium"
//                   >
//                     Listing short description
//                   </label>
//                   <Textarea
//                     id="message"
//                     name="message"
//                     placeholder="Write your message here..."
//                     className="min-h-[150px] bg-gray-100 border-0 text-black"
//                     value={formData.message}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <div className="mt-6">
//                   <Button
//                     type="submit"
//                     className="bg-[#3A9188] text-white rounded-full px-6 py-3 flex items-center gap-2 hover:bg-teal-700"
//                   >
//                     Send message
//                     <ArrowRight className="h-5 w-5" />
//                   </Button>
//                 </div>
//               </form>
//             </div>

//             <div className="space-y-12">
//               <div>
//                 <h2 className="text-3xl md:text-4xl font-bold mb-6">
//                   Reach us directly
//                 </h2>
//                 <p className="text-gray-200 mb-8">
//                   Have questions or are you ready to take the next step? Connect
//                   with us directly for personalized assistance and prompt
//                   responses.
//                 </p>

//                 <div className="space-y-4">
//                   <div className="flex items-center gap-3">
//                     <Mail className="h-6 w-6" />
//                     <div>
//                       <p className="text-sm text-gray-200">Send us an email</p>
//                       <p className="font-medium">contact@property.com</p>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-3">
//                     <Phone className="h-6 w-6" />
//                     <div>
//                       <p className="text-sm text-gray-200">Phone number</p>
//                       <p className="font-medium">
//                         Nigeria Office : +2347025012424, +2348180000567
//                         <br />
//                         United States Office : +12549520712, +16465049826
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <h2 className="text-3xl md:text-4xl font-bold mb-6">
//                   Follow us on social media
//                 </h2>
//                 <p className="text-gray-200 mb-8">
//                   Stay connected for the latest property updates, market
//                   insights, and exclusive offers. Join our community and never
//                   miss a beat!
//                 </p>

//                 <div className="flex gap-4">
//                   <a
//                     href="https://www.facebook.com/people/Exert-Properties-Ltd/100089793377102/"
//                     className="hover:text-gray-300"
//                     target="_blank"
//                   >
//                     <Facebook className="h-6 w-6" />
//                     <span className="sr-only">Facebook</span>
//                   </a>
//                   {/* <a href="#" className="hover:text-gray-300">
//                     <Twitter className="h-6 w-6" />
//                     <span className="sr-only">Twitter</span>
//                   </a> */}
//                   <a
//                     href="https://www.instagram.com/exertpropertiesltd?fbclid=IwY2xjawK97r9leHRuA2FlbQIxMABicmlkETFDVjFUVW5wdFM2T1c1WkI3AR7g2W250FvxF8UmnmVvQZhu5_M265pStFv9O7T88DctVz8XbwsfrIyLbzIfqw_aem_VQNZTHoC5ptDGGgtdw1Rvg"
//                     className="hover:text-gray-300"
//                     target="_blank"
//                   >
//                     <Instagram className="h-6 w-6" />
//                     <span className="sr-only">Instagram</span>
//                   </a>
//                   {/* <a href="#" className="hover:text-gray-300">
//                     <Linkedin className="h-6 w-6" />
//                     <span className="sr-only">LinkedIn</span>
//                   </a> */}
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </motion.section>
//       <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="inline-flex items-center gap-2 bg-gray-200 rounded-full px-4 py-2 mb-6">
//             <MapPin className="h-5 w-5 text-gray-600" />
//             <span className="text-gray-700 font-medium">Our offices</span>
//           </div>

//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
//             Your dream property awaits!
//           </h2>
//           <p className="text-gray-600 max-w-2xl mb-8">
//             Drop by our office—where your property journey begins with a
//             friendly smile and expert guidance.
//           </p>

//           <div className="flex justify-end mb-8">
//             <Button className="bg-[#3A9188] text-white rounded-full px-6 py-6 flex items-center gap-2 hover:bg-teal-700">
//               Contact us
//               <ArrowRight className="h-5 w-5" />
//             </Button>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             <div className="relative rounded-3xl overflow-hidden">
//               <Image
//                 src="/images/p4a-2.jpeg"
//                 alt="San Francisco Office"
//                 width={800}
//                 height={600}
//                 className="w-full h-[500px] object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
//                 <h3 className="text-white text-3xl font-bold mb-4">Nigeria</h3>
//                 {/* <p className="text-white/80 mb-6">
//                   Lorem ipsum dolor sit amet consectetur tellus eu enim ultrices
//                   imperdiet faucibus elementum.
//                 </p> */}
//                 <div className="flex items-center gap-2 text-white mb-6">
//                   <MapPin className="h-5 w-5" />
//                   <span>
//                     287B Akin Olugbade Street Victoria Island, Lagos Lagos State
//                     Nigeria
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-2 text-white">
//                   <Phone className="h-5 w-5" />
//                   <span>+2347025012424, +2348180000567</span>
//                 </div>
//               </div>
//             </div>

//             <div className="relative rounded-3xl overflow-hidden">
//               <Image
//                 src="/images/p2-4.jpg"
//                 alt="San Francisco Office"
//                 width={800}
//                 height={600}
//                 className="w-full h-[500px] object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
//                 <h3 className="text-white text-3xl font-bold mb-4">
//                   United States
//                 </h3>
//                 {/* <p className="text-white/80 mb-6">
//                   Lorem ipsum dolor sit amet consectetur tellus eu enim ultrices
//                   imperdiet faucibus elementum.
//                 </p> */}
//                 <div className="flex items-center gap-2 text-white mb-6">
//                   <MapPin className="h-5 w-5" />
//                   <span>
//                     3403 Pistoia Trail, Temple Texas 776502 United States
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-2 text-white">
//                   <Phone className="h-5 w-5" />
//                   <span>+12549520712, +16465049826</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Faqs className="flex flex-col lg:flex-row items-center " />
//     </main>
//   );
// }

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
import { motion } from "framer-motion";

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const cardHover = {
    hover: {
      y: -10,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <main className="min-h-screen py-28 bg-[#fafafb]">
      <motion.section
        className="bg-[#3A9188] text-white py-16 px-4 md:px-8 lg:px-16 rounded-4xl md:mx-6 lg:mx-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6"
            variants={itemVariants}
          >
            Contact us
          </motion.h1>
          <motion.p
            className="text-gray-200 text-center max-w-3xl mx-auto mb-12"
            variants={itemVariants}
          >
            We’re here to help you find your perfect space.
            <br />
            Reach out to us and let’s start your real estate journey together.
          </motion.p>

          <motion.div
            className="grid md:grid-cols-2 gap-12 items-start"
            variants={containerVariants}
          >
            <motion.div
              className="bg-white rounded-3xl p-8"
              variants={itemVariants}
              // whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <form onSubmit={handleSubmit}>
                <motion.div
                  className="grid md:grid-cols-2 gap-6"
                  variants={containerVariants}
                >
                  <motion.div className="space-y-2" variants={itemVariants}>
                    <label
                      htmlFor="fullName"
                      className="block text-neutral-800 font-medium"
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
                  </motion.div>

                  <motion.div className="space-y-2" variants={itemVariants}>
                    <label
                      htmlFor="email"
                      className="block text-neutral-800 font-medium"
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
                  </motion.div>

                  <motion.div className="space-y-2" variants={itemVariants}>
                    <label
                      htmlFor="phone"
                      className="block text-neutral-800 font-medium"
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
                  </motion.div>

                  <motion.div className="space-y-2" variants={itemVariants}>
                    <label
                      htmlFor="subject"
                      className="block text-neutral-800 font-medium"
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
                  </motion.div>
                </motion.div>

                <motion.div className="mt-6 space-y-2" variants={itemVariants}>
                  <label
                    htmlFor="message"
                    className="block text-neutral-800 font-medium"
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
                </motion.div>

                <motion.div
                  className="mt-6"
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button
                    type="submit"
                    className="bg-[#3A9188] text-white rounded-full px-6 py-3 flex items-center gap-2 hover:bg-teal-700"
                  >
                    Send message
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            <motion.div className="space-y-12" variants={containerVariants}>
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Reach us directly
                </h2>
                <p className="text-gray-200 mb-8">
                  Have questions or are you ready to take the next step? Connect
                  with us directly for personalized assistance and prompt
                  responses.
                </p>

                <div className="space-y-4">
                  <motion.div
                    className="flex items-center gap-3"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <Mail className="h-6 w-6" />
                    <div>
                      <p className="text-sm text-gray-200">Send us an email</p>
                      <p className="font-medium">contact@property.com</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-3"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <Phone className="h-6 w-6" />
                    <div>
                      <p className="text-sm text-gray-200">Phone number</p>
                      <p className="font-medium">
                        Nigeria Office : +2347025012424, +2348180000567
                        <br />
                        United States Office : +12549520712, +16465049826
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Follow us on social media
                </h2>
                <p className="text-gray-200 mb-8">
                  Stay connected for the latest property updates, market
                  insights, and exclusive offers. Join our community and never
                  miss a beat!
                </p>

                <motion.div className="flex gap-4" variants={containerVariants}>
                  <motion.a
                    href="https://www.facebook.com/people/Exert-Properties-Ltd/100089793377102/"
                    className="hover:text-gray-300"
                    target="_blank"
                    variants={itemVariants}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Facebook className="h-6 w-6" />
                    <span className="sr-only">Facebook</span>
                  </motion.a>
                  <motion.a
                    href="https://www.instagram.com/exertpropertiesltd?fbclid=IwY2xjawK97r9leHRuA2FlbQIxMABicmlkETFDVjFUVW5wdFM2T1c1WkI3AR7g2W250FvxF8UmnmVvQZhu5_M265pStFv9O7T88DctVz8XbwsfrIyLbzIfqw_aem_VQNZTHoC5ptDGGgtdw1Rvg"
                    className="hover:text-gray-300"
                    target="_blank"
                    variants={itemVariants}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Instagram className="h-6 w-6" />
                    <span className="sr-only">Instagram</span>
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="inline-flex items-center gap-2 bg-gray-200 rounded-full px-4 py-2 mb-6"
            variants={itemVariants}
          >
            <MapPin className="h-5 w-5 text-gray-600" />
            <span className="text-gray-700 font-medium">Our offices</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            Your dream property awaits!
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mb-8"
            variants={itemVariants}
          >
            Drop by our office—where your property journey begins with a
            friendly smile and expert guidance.
          </motion.p>

          {/* <motion.div
            className="flex justify-end mb-8"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Button className="bg-[#3A9188] text-white rounded-full px-6 py-6 flex items-center gap-2 hover:bg-teal-700">
              Contact us
              <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div> */}

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              className="relative rounded-3xl overflow-hidden"
              // variants={itemVariants}
              whileHover="hover"
              variants={cardHover}
            >
              <Image
                src="/images/p4a-2.jpeg"
                alt="San Francisco Office"
                width={800}
                height={600}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white text-3xl font-bold mb-4">Nigeria</h3>
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
            </motion.div>

            <motion.div
              className="relative rounded-3xl overflow-hidden"
              // variants={itemVariants}
              whileHover="hover"
              variants={cardHover}
            >
              <Image
                src="/images/p2-4.jpg"
                alt="San Francisco Office"
                width={800}
                height={600}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white text-3xl font-bold mb-4">
                  United States
                </h3>
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
            </motion.div>
          </div>
        </div>
      </motion.section>

      <Faqs className="flex flex-col lg:flex-row items-center" />
    </main>
  );
}
