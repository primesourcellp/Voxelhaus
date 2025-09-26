import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  // ✅ Use India code (91) without the +
  const phoneNumber = "91**********"; 
  const message = "Hello! I'm interested in your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const messages = [
    "Chat with us",
    "Get instant help",
    "Quick support",
    "Ask questions",
    "Get quote",
    "Book service"
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => 
        prevIndex === messages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 2, type: "spring", stiffness: 200 }}
      className="fixed bottom-30 right-6 z-50"
    >

      {/* WhatsApp floating button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative px-4 py-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="flex items-center justify-center w-10 h-10 bg-green-500 text-white rounded-full"
          animate={{
            opacity: [1, 0.7, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FaWhatsapp size={18} />
        </motion.div>
        
        <motion.div
          key={currentMessageIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="text-gray-800 font-medium text-sm whitespace-nowrap"
        >
          {messages[currentMessageIndex]}
        </motion.div>
      </motion.a>
    </motion.div>
  );
};

export default WhatsAppButton;
