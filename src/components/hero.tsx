"use client";
import { memo } from "react";
import StableVideoPlayer from "./video/stable-video-player";

// Memoized Hero component - chỉ render lại khi props thay đổi
const Hero = memo(function Hero() {
  return (
    <section className="overflow-hidden w-full max-w-full px-0 h-[calc(100dvh-var(--topbar-h,0px)-var(--header-h,0px))]">
      <StableVideoPlayer
        className="w-full max-w-full h-full rounded-none overflow-hidden"
        src="/videos/banner-video.mp4"
        autoPlay
        muted
        loop
        showControls={false}
      />
    </section>
  );
});

export default Hero;
