import SectionTitle from "../../../components/shared/section-title";
import SecurityGrid from "./security-grid";

export default function Security() {
  const cards: { title: string; src: string }[] = [
    {
      title: "Lịch sử phát triển nhà cái",
      src: "https://www.hlads.club/wp-content/uploads/2025/07/LICH-SU-PHAT-TRIEN-NHA-CAI.png",
    },
    {
      title: "Tính hợp pháp",
      src: "https://www.hlads.club/wp-content/uploads/2025/07/TINH-HOP-PHAP-800x800.png",
    },
    {
      title: "Giấy phép kinh doanh hợp pháp",
      src: "https://www.hlads.club/wp-content/uploads/2025/07/GIAY-PHEP-KINH-DOANH-HOP-PHAP.png",
    },
  ];
  return (
    <section id="security" className="py-10">
      <SectionTitle as="div" align="center" variant="badge">
        BẢO MẬT VÀ GIẤY PHÉP
      </SectionTitle>
      <SecurityGrid items={cards} />
    </section>
  );
}
