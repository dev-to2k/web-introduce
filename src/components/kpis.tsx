export default function Kpis() {
  const items = [
    { value: "92%", label: "Khách hàng hài lòng" },
    { value: "6868+", label: "Thành viên hoạt động" },
    { value: "40+", label: "Máy chủ toàn cầu" },
    { value: "SOC/SSL", label: "Mã hoá & vận hành an toàn" },
  ];
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((it) => (
        <div key={it.label} className="bg-white rounded-xl p-5 border border-slate-200 shadow-card">
          <b className="text-2xl">{it.value}</b>
          <div className="text-slate-500 text-sm">{it.label}</div>
        </div>
      ))}
    </section>
  );
}
