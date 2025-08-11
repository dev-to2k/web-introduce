import SectionTitle from "../../../components/shared/section-title";
import type { TruyCapItem } from "./truy-cap-grid";
import TruyCapSwiper from "./truy-cap-swiper";
import fs from "fs";
import path from "path";

function getImages(): TruyCapItem[] {
  const dir = path.join(process.cwd(), "public", "images", "truy-cap");
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const files = entries.filter((e) => e.isFile()).map((e) => e.name);
    const exts = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);
    return files
      .filter((name) => exts.has(path.extname(name).toLowerCase()))
      .sort()
      .map((name, idx) => ({
        src: `/images/truy-cap/${name}`,
        alt: `Truy cập ${idx + 1}`,
      }));
  } catch (err) {
    return [];
  }
}

export default function TruyCap() {
  const items = getImages();
  if (items.length === 0) return null;
  return (
    <section id="truy-cap" className="py-6">
      <SectionTitle align="center" variant="badge">
        Truy cập
      </SectionTitle>
      <TruyCapSwiper items={items} />
    </section>
  );
}
