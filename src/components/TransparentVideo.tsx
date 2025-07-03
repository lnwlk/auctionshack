import React, { useEffect, useRef } from "react";

type TransparentVideoProps = {
  srcWebm: string;
  srcHevcMp4: string;
  className?: string;
};

export default function TransparentVideo({
  srcWebm,
  srcHevcMp4,
  className,
}: TransparentVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const isSafari =
    typeof navigator !== "undefined" &&
    /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Handle autoplay restrictions gracefully
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 },
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
      style={{ backgroundColor: "transparent" }}
      className="absolute inset-0 -z-10 h-full w-full scale-110 -rotate-20 object-contain md:scale-100"
    >
      {isSafari ? (
        <source src={srcHevcMp4} type='video/mp4; codecs="hvc1"' />
      ) : (
        <source src={srcWebm} type="video/webm" />
      )}
      Your browser does not support the video tag.
    </video>
  );
}
