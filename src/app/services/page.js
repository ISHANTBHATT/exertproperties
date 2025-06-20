"use client";
import Image from "next/image";
import { motion } from "framer-motion";
export default function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="container mx-auto px-4 py-16 md:py-32"
    >
      <motion.h2
        variants={itemVariants}
        className="text-center text-5xl md:text-6xl font-bold  tracking-wider  mb-16 md:mb-24"
      >
        OUR SERVICES
      </motion.h2>

      {/* Service 01 - Advisory Services */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={itemVariants}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8 mb-24 items-center"
      >
        <motion.div
          variants={imageVariants}
          className="relative aspect-[4/3] w-full "
        >
          <Image
            src="/images/s4.jpg"
            alt="Luxury property consultation"
            fill
            className="object-cover rounded-2xl"
          />
          <div className="absolute -left-3  sm:top-5 sm:left-5 w-full h-full border-2 border-[#1B243C] m-6 rounded-2xl"></div>
        </motion.div>
        <motion.div variants={itemVariants} className="p-6 md:p-8">
          <div className="text-[#1B243C] uppercase tracking-widest mb-2">
            Service 01
          </div>
          <h3 className="text-4xl md:text-5xl font-semibold mb-6">
            Advisory Services
          </h3>
          <p className="text-gray-700 leading-relaxed">
            As developers, we are readily available to assist our teeming
            clients with advices ranging from Investment opportunities, rentals,
            sales, policy options within the locality we build in. We preempt
            our clients on the need to take advantage of offers using our best
            analytical ability in current and future planned projects.
          </p>
        </motion.div>
      </motion.div>

      {/* Service 02 - Property Development */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={itemVariants}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8 mb-24 items-center md:flex-row-reverse"
      >
        <motion.div
          variants={imageVariants}
          className="md:order-2 relative aspect-[4/3] w-full "
        >
          <Image
            src="/images/s2.jpg"
            alt="Luxury property development"
            fill
            className="object-cover rounded-2xl"
          />
          <div className="absolute -right-3 sm:top-5 sm:right-5 w-full h-full border-2 border-[#1B243C] m-6 rounded-2xl"></div>
        </motion.div>
        <motion.div variants={itemVariants} className="md:order-1 p-6 md:p-8">
          <div className="text-[#1B243C] uppercase tracking-widest mb-2">
            Service 02
          </div>
          <h3 className="text-4xl md:text-5xl font-semibold mb-6">
            Property Development
          </h3>
          <p className="text-gray-700 leading-relaxed">
            We build bespoke homes and also build our designs. We create
            thoughtful designs fit for purpose, be it residential or commercial.
            We develop sub divisions, multi-unit homes and mixed use apartments.
          </p>
        </motion.div>
      </motion.div>

      {/* Service 03 - Facility Management */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={itemVariants}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8 items-center"
      >
        <motion.div
          variants={imageVariants}
          className="relative aspect-[4/3] w-full "
        >
          <Image
            src="/images/s3.jpg"
            alt="Facility management services"
            fill
            className="object-cover rounded-2xl"
          />
          <div className="absolute -left-3 sm:top-5 sm:left-5 w-full h-full border-2 border-[#1B243C] m-6 rounded-2xl"></div>
        </motion.div>
        <motion.div variants={itemVariants} className="p-6 md:p-8">
          <div className="text-[#1B243C] uppercase tracking-widest mb-2">
            Service 03
          </div>
          <h3 className="text-4xl md:text-5xl font-semibold mb-6">
            Facility Management
          </h3>
          <p className="text-gray-700 leading-relaxed">
            In our bid to preserve the value of our sold properties, we offer
            efficient property management, this includes power, water, security,
            cleaning and other related management services.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
