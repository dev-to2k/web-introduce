export default function Payments() {
  const items = [
    "MOMO",
    "ZALOPAY",
    "VNPAY",
    "BANK",
    "PAYOS",
    "STRIPE",
  ];
  return (
    <section className="py-6">
      <h2 className="text-center font-bold text-2xl">Đối tác thanh toán</h2>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {items.map((name) => (
          <div key={name} className="overflow-visible">
            <div className="rounded-full bg-white border border-slate-200 shadow-card px-5 h-[54px] grid place-items-center">
              <span className="text-slate-500 font-semibold">{name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
