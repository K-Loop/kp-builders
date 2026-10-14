import React, { useState, useEffect } from "react";

export default function SafeImage({ src, fallback, alt, className = "", imgClassName = "object-cover" }) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setHasError(false);
    setIsLoaded(false);
  }, [src]);

  if (hasError || !src) {
    return fallback;
  }

  return (
    <div className={`relative w-full h-full ${className}`}>
      {!isLoaded && <div className="absolute inset-0">{fallback}</div>}
      <img
        src={src}
        alt={alt || "KP Builders Project Asset"}
        className={`w-full h-full ${imgClassName} transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
      />
    </div>
  );
}
