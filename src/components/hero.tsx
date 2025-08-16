"use client";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import { RenderDesktop, RenderMobile } from "./responsive/RenderAt";
import StableVideoPlayer from "./video/stable-video-player";

// Memoized Hero component - chỉ render lại khi props thay đổi
const Hero = memo(function Hero() {
  return (
    <section className="overflow-hidden w-full max-w-full px-0">
      {/* Desktop Layout - 3 columns */}
      <RenderDesktop>
        <div className="w-full h-[70vh] flex">
          {/* Left Sidebar */}
          <div className="w-1/10 bg-gray-400 flex items-center justify-center">
            <span className="text-white font-bold text-sm">192x108</span>
          </div>

          {/* Center Video */}
          <div className="w-4/5 relative aspect-video">
            <StableVideoPlayer
              className="absolute inset-0 w-full h-full rounded-none overflow-hidden object-cover"
              src="/videos/banner-video.mp4"
              autoPlay
              muted
              loop
              showControls={false}
            />
          </div>

          {/* Right Sidebar */}
          <div className="w-1/10 bg-gray-400 flex items-center justify-center">
            <span className="text-white font-bold text-sm">192x108</span>
          </div>
        </div>

        {/* Bottom Section with 3 buttons */}
        <div className="backdrop-blur-md px-6 py-12 animate-fade-in">
          <div className="flex justify-center gap-8">
            <Link
              href="https://imvn3k4.uk.com/"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-lg px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl hover:bg-white/30 hover:scale-105 transition-all duration-300 ease-out group min-w-[200px]"
            >
              <Image
                src="/images/58win.png"
                alt="58WIN"
                width={120}
                height={48}
                className="h-12 w-auto transition-transform duration-300 scale-[3] transform -translate-y-1 translate-x-10"
              />
            </Link>
            <Link
              href="https://imvn3k4.uk.com/"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-lg px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl hover:bg-white/30 hover:scale-105 transition-all duration-300 ease-out group min-w-[200px]"
            >
              <Image
                src="/images/8xx.png"
                alt="8XX"
                width={120}
                height={48}
                className="h-12 w-auto transition-transform duration-300 scale-[1.3] transform translate-y-1"
              />
            </Link>
            <Link
              href="https://imvn3k4.uk.com/"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-lg px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl hover:bg-white/30 hover:scale-105 transition-all duration-300 ease-out group min-w-[200px]"
            >
              <Image
                src="/images/ax88.png"
                alt="AX88"
                width={120}
                height={48}
                className="h-12 w-auto transition-transform duration-300"
              />
            </Link>
          </div>
        </div>
      </RenderDesktop>

      {/* Mobile Layout - Original */}
      <RenderMobile>
        <div className="w-full aspect-[16/10] relative">
          <StableVideoPlayer
            className="absolute inset-0 w-full h-full rounded-none overflow-hidden object-cover"
            src="/videos/banner-video.mp4"
            autoPlay
            muted
            loop
            showControls={false}
          />
        </div>
      </RenderMobile>
    </section>
  );
});

export default Hero;
