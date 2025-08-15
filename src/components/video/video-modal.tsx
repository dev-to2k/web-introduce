"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import VideoPlayer from "./video-player";

export type VideoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  src: string | null;
  poster?: string;
  title?: string;
};

export default function VideoModal({ isOpen, onClose, src, poster, title }: VideoModalProps) {
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Animation like AuthPopup for consistency
  useEffect(() => {
    if (!mounted) return;

    if (isOpen) {
      setIsAnimating(true);
      if (overlayRef.current) {
        overlayRef.current.style.opacity = "0";
        setTimeout(() => {
          if (overlayRef.current) {
            overlayRef.current.style.transition = "opacity 0.3s ease-out";
            overlayRef.current.style.opacity = "1";
          }
        }, 10);
      }
      if (contentRef.current) {
        contentRef.current.style.opacity = "0";
        contentRef.current.style.transform = "scale(0.97)";
        setTimeout(() => {
          if (contentRef.current) {
            contentRef.current.style.transition =
              "opacity 0.3s ease-out, transform 0.3s ease-out";
            contentRef.current.style.opacity = "1";
            contentRef.current.style.transform = "scale(1)";
          }
        }, 120);
      }
    } else if (isAnimating) {
      if (overlayRef.current) overlayRef.current.style.opacity = "0";
      if (contentRef.current) {
        contentRef.current.style.opacity = "0";
        contentRef.current.style.transform = "scale(0.97)";
      }
      setTimeout(() => setIsAnimating(false), 300);
    }
  }, [isOpen, mounted, isAnimating]);

  // ESC to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  const onOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  if (!mounted) return null;
  if ((!isOpen && !isAnimating) || !src) return null;

  return createPortal(
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 md:p-6"
      onClick={onOverlayClick}
      aria-modal
      role="dialog"
    >
      <div
        ref={contentRef}
        className="relative w-full max-w-5xl rounded-xl overflow-hidden shadow-2xl bg-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          aria-label="Đóng"
          className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-black hover:bg-white"
          onClick={onClose}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        {/* 16:9 container */}
        <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
          <VideoPlayer
            src={src}
            poster={poster}
            className="h-full w-full"
            autoPlay
            muted
            loop={false}
            hideOverlayPlayButton
            showControls
          />
        </div>

        {title ? (
          <div className="px-4 py-3 text-white bg-neutral-900/80">
            <h3 className="text-base font-semibold line-clamp-2">{title}</h3>
          </div>
        ) : null}
      </div>
    </div>,
    document.body
  );
}
