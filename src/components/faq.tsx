export default function Faq() {
  const items = [
    {
      q: "ATQ có hợp pháp không?",
      a: "Vận hành theo giấy phép hợp lệ tại khu vực cho phép. Người dùng cần tuân thủ pháp luật sở tại.",
    },
    { q: "Nạp/rút tiền như thế nào?", a: "Hỗ trợ chuyển khoản/QR. CSKH 24/7 sẵn sàng trợ giúp." },
  ];
  return (
    <section className="py-6">
      <h2 className="text-center font-bold text-2xl">Câu hỏi thường gặp</h2>
      <div className="mt-4 space-y-3">
        {items.map((it) => (
          <details key={it.q} className="bg-white rounded-xl p-4 border border-slate-200 shadow-card">
            <summary className="font-semibold cursor-pointer">{it.q}</summary>
            <p className="mt-2 text-slate-600">{it.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
