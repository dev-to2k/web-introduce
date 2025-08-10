import Placeholder from "./placeholder";

type Promo = { title: string; desc: string; label: string };
const PROMOS: Promo[] = [
  { title: "Nạp lần đầu +100%", desc: "HSD: 30 ngày.", label: "Bonus 100%" },
  { title: "Hoàn 1.2% thể thao", desc: "Theo doanh thu ròng.", label: "Hoàn 1.2%" },
  { title: "Vòng quay may mắn", desc: "Thứ 6 hàng tuần.", label: "Vòng quay" },
  { title: "VIP club", desc: "Ưu đãi theo hạng.", label: "VIP Club" },
];

export default function Promotions() {
  return (
    <section id="uu-dai" className="py-8">
      <h2 className="text-center font-bold text-2xl">Khuyến mãi nổi bật</h2>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {PROMOS.map((p) => (
          <article key={p.title} className="min-h-[12rem] bg-white rounded-xl border border-slate-200 shadow-card p-4 grid content-between">
            <div className="h-24 rounded-lg overflow-hidden">
              <Placeholder label={p.label} width={320} height={110} className="w-full h-full" />
            </div>
            <div>
              <b>{p.title}</b>
              <div className="text-sm text-slate-500">{p.desc}</div>
              <button className="mt-1 px-3 py-2 rounded-lg bg-brand text-white font-semibold">Tìm hiểu</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
