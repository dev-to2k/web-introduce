"use client";
import VideoPlayer from "./video/video-player";

export default function Hero() {
  return (
    <section className="relative overflow-hidden w-full px-0 h-[calc(100dvh-var(--header-h,0px))]">
      <VideoPlayer
        className="w-full h-full rounded-none overflow-hidden"
        src="/videos/banner-video.mp4"
        autoPlay
        muted
        loop
        hideOverlayPlayButton
        showControls={false}
      />
    </section>
  );
}
