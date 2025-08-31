import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FloatingBackground } from "@/components/ui/floating-background";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      <FloatingBackground />
      <div className="text-center glass-card p-12 max-w-md w-full animate-fade-in-up relative z-10">
        <h1 className="text-6xl font-bold mb-4 gradient-text">404</h1>
        <p className="text-xl text-foreground/70 mb-6">Oops! Page not found</p>
        <p className="text-foreground/50 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center justify-center px-6 py-3 bg-gradient-primary text-white rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-glow"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
