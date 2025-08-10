import SectionTitle from "./section-title";

export default function Partners() {
  const partners = ["58WIN", "8XX", "AX88", "CHELSEA", "MD365", "PAYGATE"];
  return (
    <section className="py-10">
      <SectionTitle align="center" variant="badge">
        Đối tác chiến lược
      </SectionTitle>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {partners.map((name) => (
          <div
            key={name}
            className="h-[60px] bg-white rounded-xl border border-slate-200 grid place-items-center shadow-card"
          >
            <span className="text-slate-500 text-sm font-semibold">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
