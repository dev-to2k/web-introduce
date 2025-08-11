// Native HTML5 video player (Next.js recommended approach)

type Props = {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
};

export default function VideoPlayer({
  src,
  poster,
  className,
  autoPlay = true,
  muted = true,
  loop = true,
}: Props) {
  return (
    <div className={className}>
      <video
        className="h-full w-full object-cover"
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        controls
        playsInline
        preload="metadata"
      />
    </div>
  );
}
