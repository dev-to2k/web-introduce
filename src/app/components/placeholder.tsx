type Props = {
  label: string;
  width: number;
  height: number;
  className?: string;
  alt?: string;
};

export default function Placeholder({ label, width, height, className, alt }: Props) {
  const fontSize = Math.max(14, Math.min(width, height) / 7);
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label={alt || label}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#DBE6FF" />
          <stop offset="100%" stopColor="#F6F8FF" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g)" />
      <path
        d={`M0 ${height * 0.7} L ${width * 0.4} ${height * 0.4} L ${width * 0.7} ${
          height * 0.8
        } L ${width} ${height * 0.5} L ${width} ${height} L 0 ${height}Z`}
        fill="rgba(21,94,239,.12)"
      />
      <text
        x="50%"
        y="52%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#0b1f3a"
        fontFamily="Inter,system-ui,Arial"
        fontSize={fontSize}
        fontWeight={700}
        opacity={0.78}
      >
        {label}
      </text>
    </svg>
  );
}
