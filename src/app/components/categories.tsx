import Image from "next/image";
import Placeholder from "./placeholder";
import SectionTitle from "./section-title";

const CATS = [
  { label: "Casino" },
  { label: "Thể thao" },
  { label: "Xổ số" },
  { label: "Bắn cá" },
  { label: "Đá gà" },
  { label: "Slots" },
];

// Ánh xạ ảnh theo nhãn danh mục; mục không có ảnh sẽ fallback về Placeholder.
const CAT_IMAGE_MAP: Record<string, string> = {
  "Thể thao": "https://www.hlads.club/wp-content/uploads/2025/07/The-Thao.png",
  Slots: "https://www.hlads.club/wp-content/uploads/2025/07/No-Hu.png",
  "Bắn cá": "https://www.hlads.club/wp-content/uploads/2025/07/Ban-Ca.png",
  "Đá gà": "https://www.hlads.club/wp-content/uploads/2025/07/Da-Ga.png",
  "Xổ số": "https://www.hlads.club/wp-content/uploads/2025/07/Xo-So.png",
};

// Chỉ hiển thị 5 danh mục có ảnh, đảm bảo 1 hàng 5 item trên desktop
const DISPLAY_CATS = CATS.filter((c) => !!CAT_IMAGE_MAP[c.label]).slice(0, 5);

export default function Categories() {
  return (
    <section className="py-10">
      <SectionTitle align="center" variant="badge">
        Danh mục game
      </SectionTitle>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {DISPLAY_CATS.map((c) => (
          <div key={c.label} className="relative h-36 bg-white rounded-xl overflow-hidden group">
            {CAT_IMAGE_MAP[c.label] ? (
              <Image
                src={CAT_IMAGE_MAP[c.label]}
                alt={c.label}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                className="object-contain transition-transform duration-300 ease-out group-hover:scale-105 group-hover:brightness-110"
                priority={false}
              />
            ) : (
              <Placeholder
                label={c.label}
                width={220}
                height={140}
                className="w-full h-full"
              />
            )}
            <span className="absolute left-2 bottom-2 bg-white/90 px-3 py-1 rounded-lg font-extrabold text-slate-900">
              {c.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
