import React, { useState, useEffect } from "react";
import PlayIcon from "@/icon/Play.svg";

type VideoRevealPlayerProps = {
  videoId: string;
};

const VideoRevealPlayer: React.FC<VideoRevealPlayerProps> = ({ videoId }) => {
  const [title, setTitle] = useState("Loading...");
  const [hovered, setHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  useEffect(() => {
    async function fetchTitle() {
      try {
        const res = await fetch(
          `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`,
        );
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setTitle(data.title);
      } catch {
        setTitle("Video");
      }
    }
    fetchTitle();
  }, [videoId]);

  return (
    <>
      {/* Preview Box */}
      <div
        className="glass-effect relative aspect-3/4 w-full cursor-pointer overflow-hidden rounded-2xl p-8 transition-all md:aspect-square"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setShowModal(true)}
      >
        <div className="pointer-events-none relative z-10 flex flex-col items-center gap-8">
          <div>
            <h1 className="text-center text-sm opacity-60">Shack Story</h1>
            <h1 className="text-center text-xl">{title}</h1>
          </div>
          <div
            className={`h-24 w-24 text-white transition-opacity duration-300 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <PlayIcon />
          </div>
        </div>

        <div
          className={`absolute right-4 left-4 aspect-[9/16] w-[calc(100%-2rem)] overflow-hidden rounded-2xl drop-shadow-lg transition-all duration-500 ${
            hovered ? "top-[35%]" : "top-[30%]"
          }`}
        >
          <img
            src={thumbnail}
            alt="Video preview"
            className="h-full w-full rounded-2xl object-cover"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 48%)",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 48%)",
            }}
          />
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-8"
          onClick={() => setShowModal(false)} // close on overlay click
        >
          <div
            className="relative aspect-[9/16] h-full max-w-md overflow-hidden rounded-2xl bg-black md:max-w-2xl"
            onClick={(e) => e.stopPropagation()} // prevent modal close on video click
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 z-10 text-xl text-white"
              aria-label="Close"
            >
              ✕
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default VideoRevealPlayer;
