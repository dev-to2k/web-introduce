export default function Features() {
  const items = [
    { title: "Nạp/rút dưới 60s", desc: "Tự động hoá, theo dõi realtime." },
    { title: "Đa nền tảng", desc: "Web, iOS, Android. Nhẹ, mượt." },
    { title: "Ưu đãi minh bạch", desc: "Điều kiện rõ ràng, rút dễ." },
  ];
  return (
    <section id="san-pham" className="py-4 grid md:grid-cols-3 gap-4">
      {items.map((it) => (
        <div key={it.title} className="bg-white rounded-xl p-5 border border-slate-200 shadow-card">
          <h3 className="font-bold">{it.title}</h3>
          <p className="text-slate-600">{it.desc}</p>
        </div>
      ))}
    </section>
  );
}
