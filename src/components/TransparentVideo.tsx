import React, { useEffect, useRef } from "react";

type TransparentVideoProps = {
  srcWebm: string;
  srcMp4?: string;
  className?: string;
};

export default function TransparentVideo({
  srcWebm,
  srcMp4,
  className,
}: TransparentVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Handle play error (autoplay restrictions)
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }, // play when 50% visible
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay={false}
      muted
      playsInline
      preload="metadata"
      className="absolute inset-0 -z-10 h-full w-full scale-110 -rotate-20 object-contain md:scale-100"
    >
      <source src={srcWebm} type="video/webm" />
      {srcMp4 && <source src={srcMp4} type="video/mp4" />}
      Your browser does not support the video tag.
    </video>
  );
}
