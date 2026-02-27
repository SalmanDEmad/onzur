"use client";

import { motion } from "motion/react";
import { Phone, MessageCircle } from "lucide-react";
import { fadeInUp, floatingSubtle } from "../../lib/animation-variants";

// Contact Info Cards Component
export const ContactCards = ({ isLoaded }) => {
  return (
    <motion.div 
      className="relative z-20 flex flex-col sm:flex-row gap-6 items-center justify-center w-full max-w-2xl"
      variants={fadeInUp}
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
    >
      <motion.a 
        href="tel:+97459990137"
        className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex items-center gap-4 hover:bg-white/10 hover:border-[#04E4FF]/30 transition-all flex-1 min-w-[280px]"
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div 
          className="w-14 h-14 bg-gradient-to-br from-[#04E4FF] to-[#06B6D4] rounded-xl flex items-center justify-center shadow-lg"
          animate={{
            boxShadow: [
              "0 5px 15px rgba(4, 228, 255, 0.3)",
              "0 8px 25px rgba(4, 228, 255, 0.5)",
              "0 5px 15px rgba(4, 228, 255, 0.3)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Phone size={28} className="text-white" />
        </motion.div>
        <div className="text-left">
          <p className="text-sm text-white/60 font-medium mb-1">Call Us Now</p>
          <p className="text-lg font-bold text-white group-hover:text-[#04E4FF] transition-colors">
            +974 5999 0137
          </p>
        </div>
      </motion.a>

      <motion.a 
        href="https://wa.me/97477507972?text=Hello! I'm interested in your services."
        target="_blank"
        rel="noopener noreferrer"
        className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex items-center gap-4 hover:bg-white/10 hover:border-[#04E4FF]/30 transition-all flex-1 min-w-[280px]"
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div 
          className="w-14 h-14 bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] rounded-xl flex items-center justify-center shadow-lg"
          animate={{
            boxShadow: [
              "0 5px 15px rgba(139, 92, 246, 0.3)",
              "0 8px 25px rgba(139, 92, 246, 0.5)",
              "0 5px 15px rgba(139, 92, 246, 0.3)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        >
          <MessageCircle size={28} className="text-white" />
        </motion.div>
        <div className="text-left">
          <p className="text-sm text-white/60 font-medium mb-1">WhatsApp Us</p>
          <p className="text-lg font-bold text-white group-hover:text-[#8B5CF6] transition-colors">
            +974 7750 7972
          </p>
        </div>
      </motion.a>
    </motion.div>
  );
};
