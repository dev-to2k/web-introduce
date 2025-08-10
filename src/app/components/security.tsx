import Placeholder from "./placeholder";

export default function Security() {
  const items = [
    { icon: "🛡️", text: "Mã hoá TLS/SSL, chống gian lận realtime." },
    { icon: "🌐", text: "Máy chủ toàn cầu, uptime cao, giám sát 24/7." },
    { icon: "✅", text: "Tuân thủ tiêu chuẩn vận hành (SOC/ISO)." },
  ];
  return (
    <section className="py-6 grid md:grid-cols-12 gap-6 items-start">
      <div className="md:col-span-7 space-y-3">
        <h2 className="font-bold text-2xl">Bảo mật & Giấy phép</h2>
        {items.map((it) => (
          <div key={it.text} className="grid grid-cols-[28px,1fr] gap-3 items-start">
            <div className="w-7 h-7 rounded-full bg-brand/10 grid place-items-center text-brand">{it.icon}</div>
            <p>{it.text}</p>
          </div>
        ))}
      </div>
      <div className="md:col-span-5">
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-card text-center">
          <div className="h-64 rounded-xl overflow-hidden bg-slate-100">
            <Placeholder label="License" width={380} height={260} className="w-full h-full" alt="Giấy phép" />
          </div>
          <p className="mt-3 font-semibold">Giấy phép quốc tế</p>
          <p className="text-slate-500 text-sm">Click để xem chi tiết & cách xác minh.</p>
        </div>
      </div>
    </section>
  );
}
