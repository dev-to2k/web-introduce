import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
import Image from "next/image";
import SectionTitle from "./shared/section-title";

function LogoCard({ src, alt }: { src: string; alt: string }) {
  return (
    <figure
      className={cn(
        "relative h-[60px] w-44 shrink-0 cursor-pointer overflow-hidden rounded-xl border bg-white p-2 dark:bg-neutral-900",
        "border-slate-200 hover:shadow-md transition duration-300 dark:border-white/10"
      )}
    >
      <div className="relative h-full w-full">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 40vw, (max-width: 1024px) 25vw, 16vw"
          className="object-contain transition duration-300 ease-out hover:scale-105 hover:brightness-110"
        />
      </div>
    </figure>
  );
}

export default function Partners() {
  const logos: { src: string; alt: string }[] = [
    {
      src: "https://www.hlads.club/wp-content/uploads/2025/07/ae_sexy-main-logo.png",
      alt: "AE Sexy",
    },
    {
      src: "https://www.hlads.club/wp-content/uploads/2025/07/Dream-Gaming-main-logo.png",
      alt: "Dream Gaming",
    },
    {
      src: "https://www.hlads.club/wp-content/uploads/2025/07/the-online-casino-product-from-wm-casino-gamingsoft.png",
      alt: "WM Casino",
    },
    {
      src: "https://www.hlads.club/wp-content/uploads/2025/07/sa-baccarat-1-e1671427501846.png",
      alt: "SA Gaming",
    },
    {
      src: "https://www.hlads.club/wp-content/uploads/2025/07/pragmaticplay.png-removebg-preview.png",
      alt: "Pragmatic Play",
    },
    {
      src: "https://www.hlads.club/wp-content/uploads/2025/07/PGSOFT_Logo_Secondary-3.png",
      alt: "PG Soft",
    },
    {
      src: "https://www.hlads.club/wp-content/uploads/2025/07/4dc1e63a-eb85-4233-b7a9-1a43861703e9.png",
      alt: "Habanero",
    },
    {
      src: "https://www.hlads.club/wp-content/uploads/2025/07/logo_notborder.png",
      alt: "Jili",
    },
    {
      src: "https://www.hlads.club/wp-content/uploads/2025/07/CMD368_VN.png",
      alt: "CMD368",
    },
    {
      src: "https://www.hlads.club/wp-content/uploads/2025/07/images-removebg-preview.png",
      alt: "SABA",
    },
  ];
  const midpoint = Math.ceil(logos.length / 2);
  const firstRow = logos.slice(0, midpoint);
  const secondRow = logos.slice(midpoint);
  return (
    <section className="max-w-screen-2xl mx-auto px-4">
      <SectionTitle align="center" variant="badge" className="text-xs">
        Đối tác chiến lược
      </SectionTitle>
      <div className="relative mt-6 flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s] gap-3">
          {firstRow.map((l) => (
            <LogoCard key={l.src} src={l.src} alt={l.alt} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:22s] -mt-2 gap-3">
          {secondRow.map((l) => (
            <LogoCard key={l.src} src={l.src} alt={l.alt} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background" />
      </div>
    </section>
  );
}
