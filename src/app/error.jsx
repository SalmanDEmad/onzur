"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 text-center">
      <h2 className="text-2xl font-semibold text-red-600 mb-4">
        Something went wrong!
      </h2>
      <p className="text-gray-700 mb-6">
        {error?.message || "An unexpected error occurred. Please try again."}
      </p>
      <button
        onClick={reset} // Attempt to recover by re-rendering the segment
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
