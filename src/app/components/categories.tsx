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

export default function Categories() {
  return (
    <section className="py-10">
      <SectionTitle align="center" variant="badge">
        Danh mục game
      </SectionTitle>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CATS.map((c) => (
          <div
            key={c.label}
            className="relative h-36 bg-white rounded-xl border border-slate-200 shadow-card overflow-hidden"
          >
            <Placeholder
              label={c.label}
              width={220}
              height={140}
              className="w-full h-full"
            />
            <span className="absolute left-2 bottom-2 bg-white/90 px-3 py-1 rounded-lg font-extrabold">
              {c.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
