"use client";

import { useState } from "react";
import Image from "next/image";

export default function SafeImage({ src, alt, className, fill, ...props }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-[var(--color-warm)] text-[var(--color-muted)] text-xs text-center px-2 ${
          fill ? "absolute inset-0" : ""
        } ${className}`}
      >
        <span>{alt}</span>
      </div>
    );
  }

  return (
    <Image
      {...props}
      src={src}
      alt={alt}
      className={className}
      fill={fill}
      onError={() => setHasError(true)}
    />
  );
}
