"use client";

import { memo } from "react";
import VideoPlayer from "./video-player";

type Props = {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  hideOverlayPlayButton?: boolean;
  showControls?: boolean;
  preload?: "auto" | "metadata" | "none";
};

/**
 * StableVideoPlayer - Wrapper component cho VideoPlayer với React.memo và custom comparison
 *
 * - Tận dụng toàn bộ tính năng của VideoPlayer (YouTube + HTML5)
 * - Tránh re-render không cần thiết bằng memo và custom comparison
 * - Tận dụng Next.js 15 caching
 */
const StableVideoPlayer = memo(
  function StableVideoPlayer(props: Props) {
    return <VideoPlayer {...props} />;
  },
  // Custom comparison function để kiểm soát chính xác khi nào re-render
  (prevProps, nextProps) => {
    // So sánh từng prop để quyết định có re-render hay không
    return (
      prevProps.src === nextProps.src &&
      prevProps.className === nextProps.className &&
      prevProps.autoPlay === nextProps.autoPlay &&
      prevProps.muted === nextProps.muted &&
      prevProps.loop === nextProps.loop &&
      prevProps.hideOverlayPlayButton === nextProps.hideOverlayPlayButton &&
      prevProps.showControls === nextProps.showControls &&
      prevProps.poster === nextProps.poster &&
      prevProps.preload === nextProps.preload
    );
  }
);

/**
 * Tối ưu hóa cho Next.js Server Components
 *
 * Đánh dấu component với displayName để dễ debug và tăng khả năng cache
 * trong React DevTools và Next.js debugging
 */
StableVideoPlayer.displayName = "StableVideoPlayer";

export default StableVideoPlayer;
