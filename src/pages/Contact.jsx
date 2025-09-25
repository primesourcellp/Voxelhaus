import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaSmile,
  FaClock,
  FaLock,
  FaLightbulb,
} from "react-icons/fa";
import BgImage from "../assets/3d_image_3.jpg";

const contactInfo = [
  { icon: FaMapMarkerAlt, title: "Office Address", info: "123 Main Street, City, Country" },
  { icon: FaPhoneAlt, title: "Phone", info: "+91-XXXXXXXXXX" },
  { icon: FaEnvelope, title: "Email", info: "info@voxelhaus.com" },
  { icon: FaGlobe, title: "Website", info: "www.voxelhaus.com" },
];

const whyReachOut = [
  { icon: FaSmile, title: "Friendly Support", description: "We’re approachable, easy to talk to, and genuinely interested in your project." },
  { icon: FaClock, title: "Quick Responses", description: "We respect your time and aim to respond as fast as possible." },
  { icon: FaLock, title: "Confidential Services", description: "Your project details are safe and secure with us." },
  { icon: FaLightbulb, title: "Tailored Advice", description: "Every project is unique, and we’ll guide you with solutions that fit your needs." },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white pt-20">
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center relative overflow-x-hidden w-full"
        style={{
          backgroundImage: `url(${BgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 bg-[#00F0FF]/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-40 right-32 w-24 h-24 bg-[#0099FF]/10 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute bottom-32 left-1/3 w-40 h-40 bg-[#00F0FF]/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Content wrapper */}
        <div className="relative z-10 max-w-7xl mx-auto px-2 md:px-6 py-12">
          {/* Header */}
          <section className="text-center py-12 mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold mb-4"
            >
              <span className="text-white">Contact </span>
              <span className="text-[#00F0FF]">Us</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Let’s Connect! We’d love to hear from you. Our team provides quick, confidential, and professional support for your real estate projects.
            </motion.p>
          </section>

          {/* Contact Info + Form */}
          <section className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left: Contact Info */}
              <div className="space-y-6">
                {contactInfo.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: idx * 0.2 }}
                      className="group flex items-center gap-4 bg-gray-900/70 backdrop-blur-sm border border-gray-700 rounded-xl p-6 cursor-pointer overflow-hidden hover:bg-[#00F0FF]/20 hover:scale-105 transition-all hover:border-[#00F0FF]/50"
                    >
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                        className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center"
                        
                      >
                        <Icon size={28} className="text-white" />
                      </motion.div>
                      <div>
                        <h4 className="font-bold text-white">{item.title}</h4>
                        <p className="text-gray-300">{item.info}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Right: Contact Form */}
              <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <form className="flex flex-col gap-4">
                  <motion.input
                    type="text"
                    placeholder="Name"
                    className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-[#00F0FF]"
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 10px rgba(0,240,255,0.3)" }}
                  />
                  <motion.input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-[#00F0FF]"
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 10px rgba(0,240,255,0.3)" }}
                  />
                  <motion.input
                    type="text"
                    placeholder="Subject"
                    className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-[#00F0FF]"
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 10px rgba(0,240,255,0.3)" }}
                  />
                  <motion.textarea
                    placeholder="Message"
                    rows="5"
                    className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-[#00F0FF]"
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 10px rgba(0,240,255,0.3)" }}
                  />
                  <motion.button
                    type="submit"
                    className="w-full bg-[#00F0FF] hover:bg-[#00d3f0] text-black font-bold py-3 rounded-lg transition-all"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0,240,255,0.5)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </div>
          </section>

          {/* Why Reach Out to Us */}
          <section className="py-12 rounded-3xl mb-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto mb-8"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Reach Out to <span className="text-[#00F0FF]">Us?</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                We provide dedicated, professional, and friendly service for all your real estate visualization needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyReachOut.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isEven ? -100 : 100, y: 50 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 20px rgba(0,240,255,0.5)",
                      backgroundColor: "rgba(0,240,255,0.2)"
                    }}
                    className="bg-gray-900/70 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 transition-all duration-300 hover:border-[#00F0FF]/50"
                  >
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 bg-gradient-to-r from-[#00F0FF] to-[#0099FF] rounded-2xl flex items-center justify-center mb-6"
                    >
                      <Icon size={32} className="text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};
export default Contact;
