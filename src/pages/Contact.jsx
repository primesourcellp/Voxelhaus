import React from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaClock,
} from "react-icons/fa";
import BgImage from "../assets/img3.png";

const contactDetails = [
  { icon: FaEnvelope, title: "Email", info: "xxxxxxxxxx" },
  { icon: FaPhoneAlt, title: "Phone", info: "(+91) xxxxxxxxxxx" },
  { icon: FaWhatsapp, title: "WhatsApp", info: "Chat on WhatsApp" },
  { icon: FaFacebook, title: "Facebook", info: "Facebook" },
  { icon: FaInstagram, title: "Instagram", info: "Instagram" },
  { icon: FaMapMarkerAlt, title: "Address", info: "394 maniyam velleper st 6th st kk pudur Saibaba colony Coimbatore 641038" },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-12">
          {/* Header */}
          <section className="text-center py-12 mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-4 uppercase tracking-wider"
            >
              <span className="text-white">Contact </span>
              <span className="text-[#00F0FF]">Us</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Want to Know More? Reach Out to us.
            </motion.p>
          </section>

          {/* Main Contact Cards */}
          <section className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              
              {/* Left Card: Online Inquiry Form */}
                    <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl h-fit"
              >
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-xl font-bold text-gray-800 mb-8 uppercase tracking-wide"
                >
                  Online Inquiry
                </motion.h2>
                
                <form className="space-y-3">
                  <motion.input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 rounded-xl bg-gray-100 text-gray-800 border border-gray-200 focus:outline-none focus:border-[#00F0FF] focus:bg-white transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 15px rgba(0,240,255,0.2)" }}
                  />
                  <motion.input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 rounded-xl bg-gray-100 text-gray-800 border border-gray-200 focus:outline-none focus:border-[#00F0FF] focus:bg-white transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 15px rgba(0,240,255,0.2)" }}
                  />
                  <motion.input
                    type="tel"
                    placeholder="Your Phone Number"
                    className="w-full p-3 rounded-xl bg-gray-100 text-gray-800 border border-gray-200 focus:outline-none focus:border-[#00F0FF] focus:bg-white transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 15px rgba(0,240,255,0.2)" }}
                  />
                  <motion.textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full p-3 rounded-xl bg-gray-100 text-gray-800 border border-gray-200 focus:outline-none focus:border-[#00F0FF] focus:bg-white transition-all duration-300 resize-none"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 15px rgba(0,240,255,0.2)" }}
                  />
                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#00F0FF] to-[#0099FF] hover:from-[#00d3f0] hover:to-[#0088cc] text-white font-bold py-3 rounded-xl transition-all duration-300 shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.6 }}
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: "0 10px 25px rgba(0,240,255,0.4)",
                      y: -2
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>

              {/* Right Card: Contact Details */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-2xl h-fit"
              >
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-xl font-bold text-gray-800 mb-6 uppercase tracking-wide"
                >
                  Contact Details
                </motion.h2>
                
                <div className="space-y-5">
                  {contactDetails.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.0 + (index * 0.1) }}
                        className="flex items-center space-x-3 group cursor-pointer"
                        whileHover={{ x: 3 }}
                      >
                        <div className="w-5 h-5 flex items-center justify-center">
                          <Icon size={16} className="text-gray-600 group-hover:text-[#00F0FF] transition-colors duration-300" />
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm font-medium group-hover:text-gray-800 transition-colors duration-300">
                            {item.title}
                          </p>
                          <p className="text-gray-800 font-semibold group-hover:text-[#00F0FF] transition-colors duration-300">
                            {item.info}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
              </div>
              </motion.div>
            </div>
          </section>

          {/* Embedded Google Map Section */}
          <section className="mt-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Find Us on the{' '}
                <span className="bg-gradient-to-r from-[#00F0FF] to-[#0099FF] bg-clip-text text-transparent">
                  Map
                </span>
              </h2>
              <p className="text-gray-300 text-lg">
                Visit our office or get directions to our location
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 2.0 }}
              className="relative w-full max-w-9xl mx-auto h-[400px] rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Embedded Google Map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3916.1016998660048!2d76.94205167504562!3d11.030996089133641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDAxJzUxLjYiTiA3NsKwNTYnNDAuNyJF!5e0!3m2!1sen!2sin!4v1758884795241!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
                title="Voxelhaus Consultancy Location"
              ></iframe>

              {/* Map Overlay with Contact Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.2 }}
                className="absolute top-4 right-4"
              >
                <motion.a
                  href="https://maps.app.goo.gl/6gd6CNVzRTv81tT39"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 5px 15px rgba(0, 240, 255, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg"
                >
                  Contact Us
                </motion.a>
              </motion.div>

              {/* Map Info Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.4 }}
                className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-sm"
              >
                <h3 className="font-bold text-gray-800 text-lg mb-2">Voxelhaus Consultancy</h3>
                <p className="text-gray-600 text-sm mb-3">
                 394 maniyam velleper st 6th st kk pudur Saibaba colony Coimbatore 641038
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span className="flex items-center">
                    <span className="text-yellow-500">★★★★★</span>
                    <span className="ml-1">5.0 (8 reviews)</span>
                  </span>
                </div>
                <div className="mt-3 space-y-2">
                  <motion.a
                    href="https://maps.app.goo.gl/6gd6CNVzRTv81tT39"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  >
                    <FaMapMarkerAlt size={14} className="mr-2" />
                    <span className="text-sm">Directions</span>
                  </motion.a>
                  <motion.a
                    href="https://maps.app.goo.gl/6gd6CNVzRTv81tT39"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  >
                    <span className="text-sm">View larger map</span>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </section>
        </div>
      </section>
    </div>
  );
};
export default Contact;
