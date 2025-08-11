import SectionTitle from "../../../components/shared/section-title";
import NewsGrid from "./news-grid";

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
      date: "29/07/2025",
      image: "https://www.hlads.club/wp-content/uploads/2025/08/2-30.webp",
    },
    {
      title: "Tin tức 5",
      date: "27/07/2025",
      image: "https://www.hlads.club/wp-content/uploads/2025/08/22-6.webp",
    },
    {
      title: "Tin tức 6",
      date: "25/07/2025",
      image: "https://www.hlads.club/wp-content/uploads/2025/08/moiban2.webp",
    },
  ];
  return (
    <section id="news" className="py-6">
      <SectionTitle align="center" variant="badge">
        Tin tức
      </SectionTitle>
      <NewsGrid items={items} />
    </section>
  );
}
