"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  /** Use for full-bleed background images (absolute inset-0 + object-cover) */
  fill?: boolean;
  /** CSS object-position, e.g. "center top" */
  objectPosition?: string;
  /** Show shimmer skeleton while loading (off on homepage) */
  showSkeleton?: boolean;
};

export function SiteImage({
  src,
  alt,
  className = "",
  priority = false,
  fill = false,
  objectPosition,
  showSkeleton = true,
}: Props) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const markLoaded = useCallback(() => setLoaded(true), []);

  useEffect(() => {
    const img = imgRef.current;
    if (img?.complete && img.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [src]);

  const fadeIn = showSkeleton && !loaded;

  return (
    <div
      className={`overflow-hidden ${fill ? "absolute inset-0" : "relative"} ${className}`}
    >
      {showSkeleton && !loaded && (
        <div className="absolute inset-0 skeleton-block z-[1]" aria-hidden />
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={markLoaded}
        onError={markLoaded}
        className={`object-cover img-zoom-ready ${
          fill ? "absolute inset-0 h-full w-full" : "h-full w-full"
        } ${
          fadeIn
            ? "opacity-0 scale-[1.02]"
            : showSkeleton
              ? "opacity-100 scale-100 transition-all duration-700"
              : "opacity-100"
        }`}
        style={objectPosition ? { objectPosition } : undefined}
      />
    </div>
  );
}
