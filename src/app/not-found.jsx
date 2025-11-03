"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { commonStyles } from "../lib/design-system";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#00042A] to-[#131848] flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00B9FF] to-[#04E4FF] mb-4">
            404
          </h1>
          <h2 className={`${commonStyles.heading2} text-white mb-6`}>
            Page Not Found
          </h2>
          <p className={`${commonStyles.bodyLarge} text-white/80 mb-8 max-w-md mx-auto`}>
            Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className={`${commonStyles.buttonPrimary}`}
            >
              Go Home
            </Link>
            <Link
              href="/services"
              className={`${commonStyles.buttonSecondary}`}
            >
              View Services
            </Link>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
}
