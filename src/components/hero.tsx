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
        <div className="w-full h-[76vh] flex">
          {/* Left Sidebar */}
          <div className="w-[15%] bg-gray-400 flex items-center justify-center">
            <span className="text-white font-bold text-sm">GIF</span>
          </div>

          {/* Center Video */}
          <div className="w-[70%] relative aspect-video">
            <StableVideoPlayer
              className="absolute inset-0 w-full h-full rounded-none overflow-hidden object-contain"
              src="/videos/banner-video.mp4"
              autoPlay
              muted
              loop
              showControls={false}
              preload="auto"
            />
          </div>

          {/* Right Sidebar */}
          <div className="w-[15%] bg-gray-400 flex items-center justify-center">
            <span className="text-white font-bold text-sm">GIF</span>
          </div>
        </div>

        {/* Bottom Section with 3 buttons */}
        <div className="backdrop-blur-md px-6 py-6 animate-fade-in">
          <div className="flex justify-center gap-8">
            <Link
              href="https://imvn3k4.uk.com/"
              rel="noopener noreferrer"
              className="group w-[380px] xl:w-[420px] min-w-[320px] px-8 py-6 rounded-3xl 
              bg-gradient-to-b from-white/70 to-white/40 dark:from-slate-900/70 dark:to-slate-800/50 
              border border-white/60 dark:border-white/10 shadow-[0_10px_30px_-10px_rgba(2,6,23,0.35)] 
              hover:shadow-[0_20px_40px_-12px_rgba(2,6,23,0.45)] backdrop-blur-xl 
              transition-all duration-300 ease-out hover:-translate-y-0.5 text-center opacity-0 animate-fade-in [animation-duration:600ms] [animation-delay:0ms] [animation-fill-mode:forwards]"
            >
              <Image
                src="/images/58win.png"
                alt="58WIN"
                width={120}
                height={48}
                className="h-12 w-auto transition-transform duration-300 scale-[3] transform -translate-y-1 translate-x-2 mx-auto"
              />
              <span
                className="mt-5 inline-flex items-center justify-center mx-auto 
                px-5 py-2.5 rounded-full bg-brand text-white uppercase tracking-wider 
                font-semibold text-sm shadow-md ring-1 ring-black/5 dark:ring-white/10 
                transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-brand/90 gap-2"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 opacity-90 transition-transform duration-300 group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
                truy cập ngay
              </span>
            </Link>
            <Link
              href="https://imvn3k4.uk.com/"
              rel="noopener noreferrer"
              className="group w-[380px] xl:w-[420px] min-w-[320px] px-8 py-6 rounded-3xl 
              bg-gradient-to-b from-white/70 to-white/40 dark:from-slate-900/70 dark:to-slate-800/50 
              border border-white/60 dark:border-white/10 shadow-[0_10px_30px_-10px_rgba(2,6,23,0.35)] 
              hover:shadow-[0_20px_40px_-12px_rgba(2,6,23,0.45)] backdrop-blur-xl 
              transition-all duration-300 ease-out hover:-translate-y-0.5 text-center opacity-0 animate-fade-in [animation-duration:600ms] [animation-delay:120ms] [animation-fill-mode:forwards]"
            >
              <Image
                src="/images/8xx.png"
                alt="8XX"
                width={120}
                height={48}
                className="h-12 w-auto transition-transform duration-300 scale-[1.3] transform translate-y-1 mx-auto"
              />
              <span
                className="mt-5 inline-flex items-center justify-center mx-auto 
                px-5 py-2.5 rounded-full bg-brand text-white uppercase tracking-wider 
                font-semibold text-sm shadow-md ring-1 ring-black/5 dark:ring-white/10 
                transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-brand/90 gap-2"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 opacity-90 transition-transform duration-300 group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
                truy cập ngay
              </span>
            </Link>
            <Link
              href="https://imvn3k4.uk.com/"
              rel="noopener noreferrer"
              className="group w-[380px] xl:w-[420px] min-w-[320px] px-8 py-6 rounded-3xl 
              bg-gradient-to-b from-white/70 to-white/40 dark:from-slate-900/70 dark:to-slate-800/50 
              border border-white/60 dark:border-white/10 shadow-[0_10px_30px_-10px_rgba(2,6,23,0.35)] 
              hover:shadow-[0_20px_40px_-12px_rgba(2,6,23,0.45)] backdrop-blur-xl 
              transition-all duration-300 ease-out hover:-translate-y-0.5 text-center opacity-0 animate-fade-in [animation-duration:600ms] [animation-delay:240ms] [animation-fill-mode:forwards]"
            >
              <Image
                src="/images/ax88.png"
                alt="AX88"
                width={120}
                height={48}
                className="h-12 w-auto transition-transform duration-300 mx-auto"
              />
              <span
                className="mt-5 inline-flex items-center justify-center mx-auto 
                px-5 py-2.5 rounded-full bg-brand text-white uppercase tracking-wider 
                font-semibold text-sm shadow-md ring-1 ring-black/5 dark:ring-white/10 
                transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-brand/90 gap-2"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 opacity-90 transition-transform duration-300 group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
                truy cập ngay
              </span>
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
            preload="auto"
          />
        </div>
      </RenderMobile>
    </section>
  );
});

export default Hero;
