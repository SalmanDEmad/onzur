export default function Loading() {
  return (
    <div className="min-h-screen bg-[#00042A] flex items-center justify-center">
      <div className="text-center">
        {/* Logo spinner */}
        <div className="relative w-24 h-24 mx-auto mb-6">
          <div className="absolute inset-0 border-4 border-[#04E4FF]/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-t-[#04E4FF] rounded-full animate-spin"></div>
        </div>
        
        {/* Loading text */}
        <p className="text-white/80 text-lg animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}
