"use client";

// Lightweight video player that supports both HTML5 sources and YouTube URLs
import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  // If true, hide the big center play button overlay for non-autoplay YouTube
  hideOverlayPlayButton?: boolean;
  // Show native video controls for HTML5 videos (ignored for YouTube embeds)
  showControls?: boolean;
};

function extractYouTubeId(url: string): string | null {
  // Matches typical YouTube URLs: https://www.youtube.com/watch?v=ID or https://youtu.be/ID
  const watchMatch = url.match(/[?&]v=([A-Za-z0-9_-]{6,})/);
  if (watchMatch && watchMatch[1]) return watchMatch[1];
  const shortMatch = url.match(/youtu\.be\/([A-Za-z0-9_-]{6,})/);
  if (shortMatch && shortMatch[1]) return shortMatch[1];
  return null;
}

export default function VideoPlayer({
  src,
  poster,
  className,
  autoPlay = true,
  muted = true,
  loop = true,
  hideOverlayPlayButton = false,
  showControls = true,
}: Props) {
  const youtubeId = extractYouTubeId(src);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  if (youtubeId) {
    const params = new URLSearchParams({
      autoplay: isPlaying || autoPlay ? "1" : "0",
      mute: muted ? "1" : "0",
      loop: loop ? "1" : "0",
      playlist: youtubeId,
      rel: "0",
      modestbranding: "1",
      playsinline: "1",
      controls: "1",
    });
    const embedUrl = `https://www.youtube.com/embed/${youtubeId}?${params.toString()}`;
    const thumbnail =
      poster || `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;

    return (
      <div className={className}>
        {isPlaying || autoPlay ? (
          <iframe
            className="h-full w-full"
            src={embedUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            title="YouTube video player"
          />
        ) : hideOverlayPlayButton ? (
          <div className="relative h-full w-full">
            <Image
              src={thumbnail}
              alt="Video thumbnail"
              fill
              className="object-cover"
              sizes="100vw"
              priority={false}
            />
          </div>
        ) : (
          <button
            type="button"
            aria-label="Play video"
            onClick={() => setIsPlaying(true)}
            className="relative h-full w-full group overflow-hidden"
          >
            <Image
              src={thumbnail}
              alt="Video thumbnail"
              fill
              className="object-contain"
              sizes="100vw"
              priority={false}
            />
            <span className="absolute inset-0 grid place-items-center bg-black/20 group-hover:bg-black/30 transition-colors">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/90 text-black shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 ml-0.5"
                >
                  <path d="M8 5.14v13.72L19 12 8 5.14z" />
                </svg>
              </span>
            </span>
          </button>
        )}
      </div>
    );
  }

  return (
    <div className={className}>
      <video
        className="h-full w-full object-cover"
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        onEnded={(event) => {
          if (loop) {
            const videoElement = event.currentTarget;
            videoElement.currentTime = 0;
            // Best-effort restart to ensure loop behavior across browsers
            void videoElement.play();
          }
        }}
        controls={showControls}
        playsInline
        preload="metadata"
      />
    </div>
  );
}
