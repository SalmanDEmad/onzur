"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { commonStyles } from "../lib/design-system";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#00042A] to-[#131848] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-6xl mb-6">⚠️</div>
          <h1 className={`${commonStyles.heading2} text-white mb-4`}>
            Something went wrong!
          </h1>
          <p className={`${commonStyles.bodyLarge} text-white/80 mb-8`}>
            We're sorry, but something unexpected happened. Our team has been notified and we're working to fix it.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => reset()}
              className={`${commonStyles.buttonPrimary}`}
            >
              Try Again
            </button>
            <Link
              href="/"
              className={`${commonStyles.buttonSecondary}`}
            >
              Go Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
