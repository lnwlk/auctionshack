"use client";

import { motion } from "framer-motion";

const blobs = [
  {
    className: "bg-shackGreen",
    initial: { x: 0, y: 0 },
    size: "80vh",
    animate: { x: 300, y: -300 },
    delay: 0,
  },
  {
    className: "bg-shackBlue",
    initial: { x: 0, y: 0 },
    size: "60vh",
    animate: { x: -250, y: 250 },
    delay: 1.5,
  },
  {
    className: "bg-shackBlueDark",
    initial: { x: 0, y: 0 },
    size: "80vh",
    animate: { x: 200, y: 200 },
    delay: 3,
  },
  {
    className: "bg-shackBlueLight",
    initial: { x: 0, y: 0 },
    size: "80vh",
    animate: { x: -100, y: -100 },
    delay: 3,
  },

  {
    className: "bg-shackPurple",
    initial: { x: -0, y: 0 },
    size: "80vh",
    animate: { x: 400, y: 400 },
    delay: 3,
  },
];

export default function MeshBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Noise grain overlay */}
      <motion.div
        className="pointer-events-none absolute top-0 left-0 h-full w-full opacity-5 mix-blend-overlay"
        style={{
          backgroundImage: `url('./app/noise.png')`,
          backgroundRepeat: "repeat",
        }}
        animate={{ x: [0, 15, 0], y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          className={`absolute h-[60vh] w-[60vh] rounded-full opacity-40 mix-blend-multiply blur-3xl ${blob.className}`}
          initial={blob.initial}
          animate={blob.animate}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse", // smoother than "mirror"
            ease: "easeInOut",
            delay: blob.delay,
          }}
          style={{
            top: `${0 + index * 8}%`,
            left: `${0 + index * 20}%`,
            height: blob.size,
            width: blob.size,
          }}
        />
      ))}
    </div>
  );
}
