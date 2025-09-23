import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe, FaSmile, FaClock, FaLock, FaLightbulb } from "react-icons/fa";

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white pt-20">

      {/* Contact Header */}
      <section className="text-center py-16 px-6 md:px-12">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mb-4 text-[#00F0FF]"
        >
          Contact <span className="text-white">Us</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-gray-300 max-w-3xl mx-auto"
        >
          Let’s Connect! We’d love to hear from you. Our team provides quick, confidential, and professional support for your real estate projects.
        </motion.p>
      </section>

      {/* Contact Info + Form */}
      <section className="px-6 md:px-12 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left: Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group flex items-center gap-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 cursor-pointer overflow-hidden"
                  whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,240,255,0.4)" }}
                >
                  {/* Icon animation */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center"
                  >
                    <Icon size={28} className="text-[#00F0FF]" />
                  </motion.div>

                  {/* Text */}
                  <div>
                    <h4 className="font-bold text-white">{item.title}</h4>
                    <p className="text-gray-300">{item.info}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Contact Form */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <form className="space-y-4">
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
              ></motion.textarea>
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

      {/* Why Reach Out to Us? */}
      <section className="py-24 px-6 md:px-12 bg-gray-800 rounded-t-3xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
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
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/70 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-[#00F0FF]/50 transition-all duration-300 group"
                whileHover={{ scale: 1.03, boxShadow: "0 8px 15px rgba(0,240,255,0.3)" }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-r from-[#00F0FF] to-[#0099FF] rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-[#00F0FF]/25"
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

      {/* Google Map */}
      <section className="py-16 px-6 md:px-12">
        <div className="w-full h-96 border border-gray-700 rounded-2xl overflow-hidden">
          <iframe
            title="Voxelhaus Location"
            width="100%"
            height="100%"
            className="rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.558179631547!2d77.38704197751788!3d8.92060066828246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0427a947312531%3A0x37be84092961c8d5!2sPrimesource%20Consulting%20LLP!5e0!3m2!1sen!2sin!4v1758605800315!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

    </div>
  );
};

export default Contact;
