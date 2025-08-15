"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import AuthForm from "./auth-form";

type AuthMode = "login" | "register";

interface AuthPopupProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: AuthMode;
}

export default function AuthPopup({
  isOpen,
  onClose,
  initialMode = "login",
}: AuthPopupProps) {
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Handle mounting
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Handle animation
  useEffect(() => {
    if (!mounted) return;

    if (isOpen) {
      setIsAnimating(true);

      // Animate overlay
      if (overlayRef.current) {
        overlayRef.current.style.opacity = "0";
        setTimeout(() => {
          if (overlayRef.current) {
            overlayRef.current.style.transition = "opacity 0.3s ease-out";
            overlayRef.current.style.opacity = "1";
          }
        }, 10);
      }

      // Animate content
      if (contentRef.current) {
        contentRef.current.style.opacity = "0";
        contentRef.current.style.transform = "scale(0.95)";
        setTimeout(() => {
          if (contentRef.current) {
            contentRef.current.style.transition =
              "opacity 0.3s ease-out, transform 0.3s ease-out";
            contentRef.current.style.opacity = "1";
            contentRef.current.style.transform = "scale(1)";
          }
        }, 150);
      }
    } else if (isAnimating) {
      // Animate out
      if (overlayRef.current) {
        overlayRef.current.style.opacity = "0";
      }

      if (contentRef.current) {
        contentRef.current.style.opacity = "0";
        contentRef.current.style.transform = "scale(0.95)";
      }

      // Wait for animation to finish before unmounting
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }
  }, [isOpen, mounted]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Handle click outside
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  // Don't render anything on server
  if (!mounted) return null;

  // Don't render if not open and not animating
  if (!isOpen && !isAnimating) return null;

  return createPortal(
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={handleOverlayClick}
    >
      <div
        ref={contentRef}
        className="w-full max-w-4xl bg-transparent rounded-xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <AuthForm initialMode={initialMode} onClose={onClose} />
      </div>
    </div>,
    document.body
  );
}
