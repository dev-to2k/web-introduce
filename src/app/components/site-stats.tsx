import CountUp from "./count-up";

type Stat = {
  value: number;
  label: string;
};

export default function SiteStats() {
  const stats: Stat[] = [
    { value: 368, label: "Trang Web" },
    { value: 23686, label: "Lượt truy cập" },
    { value: 24, label: "Ngôn Ngữ" },
  ];

  return (
    <section aria-label="Số liệu hệ thống" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="bg-white rounded-xl p-6 border border-slate-200 shadow-card text-center"
        >
          <CountUp end={s.value} className="text-3xl font-semibold text-brand" locale="en-US" />
          <div className="mt-1 text-slate-500">{s.label}</div>
        </div>
      ))}
    </section>
  );
}
