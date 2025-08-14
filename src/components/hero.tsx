"use client";
import VideoPlayer from "./video/video-player";

export default function Hero() {
  return (
    <section className="overflow-hidden w-full max-w-full px-0 h-[calc(100dvh-var(--topbar-h,0px)-var(--header-h,0px))]">
      <VideoPlayer
        className="w-full max-w-full h-full rounded-none overflow-hidden"
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
