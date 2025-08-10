import Image from "next/image";
import SectionTitle from "./section-title";

export default function News() {
  const items = [
    {
      title: "Ra mắt tính năng nạp nhanh",
      date: "10/08/2025",
      image:
        "https://www.hlads.club/wp-content/uploads/2025/08/photo_2025-07-22_21-42-59.webp",
    },
    {
      title: "Cập nhật giải đấu mùa hè",
      date: "05/08/2025",
      image: "https://www.hlads.club/wp-content/uploads/2025/08/7.webp",
    },
    {
      title: "Chính sách bảo mật mới",
      date: "01/08/2025",
      image: "https://www.hlads.club/wp-content/uploads/2025/08/1-4.webp",
    },
    {
      title: "Tin tức 4",
      image: "https://www.hlads.club/wp-content/uploads/2025/08/2-30.webp",
    },
    {
      title: "Tin tức 5",
      image: "https://www.hlads.club/wp-content/uploads/2025/08/22-6.webp",
    },
    {
      title: "Tin tức 6",
      image: "https://www.hlads.club/wp-content/uploads/2025/08/moiban2.webp",
    },
  ];
  return (
    <section id="news" className="py-6">
      <SectionTitle align="center" variant="badge">
        Tin tức
      </SectionTitle>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((n) => (
          <article
            key={n.image ?? n.title}
            className="group bg-white rounded-xl border border-slate-200 shadow-card overflow-hidden transition duration-300 ease-out hover:shadow-lg hover:border-slate-300 hover:-translate-y-0.5"
          >
            <div className="h-36 relative">
              <Image
                src={n.image!}
                alt={n.title}
                width={360}
                height={144}
                className="w-full h-full object-cover transition duration-300 ease-out group-hover:scale-105 group-hover:brightness-110"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                priority={false}
              />
            </div>
            <div className="p-4">
              {n.date && <div className="text-slate-500 text-sm">{n.date}</div>}
              <b className="block">{n.title}</b>
              <button className="mt-2 inline-flex items-center cursor-pointer gap-1 px-3 py-2 rounded-lg bg-brand text-white font-semibold transition-all duration-200 hover:bg-brand/90 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40">
                Xem chi tiết
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
