export default function Process() {
  const steps = [
    { n: 1, title: "Tạo tài khoản", desc: "Dưới 60 giây." },
    { n: 2, title: "Xác minh nhanh", desc: "Bảo mật 2 lớp." },
    { n: 3, title: "Nạp & chơi", desc: "Hỗ trợ 24/7." },
  ];
  return (
    <section id="huong-dan" className="py-6 grid md:grid-cols-3 gap-4">
      {steps.map((s) => (
        <div key={s.n} className="bg-white rounded-xl p-5 border border-slate-200 shadow-card">
          <div className="w-7 h-7 grid place-items-center rounded-full bg-brand text-white font-bold">{s.n}</div>
          <b>{s.title}</b>
          <p className="text-slate-600">{s.desc}</p>
        </div>
      ))}
    </section>
  );
}
