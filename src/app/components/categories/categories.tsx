import SectionTitle from "@/components/shared/section-title";
import CategoriesGrid from "./categories-grid";

const CATS = [
  { label: "Casino" },
  { label: "Thể thao" },
  { label: "Xổ số" },
  { label: "Bắn cá" },
  { label: "Đá gà" },
  { label: "Slots" },
];

// Ánh xạ ảnh theo nhãn danh mục; mục không có ảnh sẽ fallback về Placeholder.
const CAT_IMAGE_MAP: Record<string, string> = {
  "Thể thao": "https://www.hlads.club/wp-content/uploads/2025/07/The-Thao.png",
  Slots: "https://www.hlads.club/wp-content/uploads/2025/07/No-Hu.png",
  "Bắn cá": "https://www.hlads.club/wp-content/uploads/2025/07/Ban-Ca.png",
  "Đá gà": "https://www.hlads.club/wp-content/uploads/2025/07/Da-Ga.png",
  "Xổ số": "https://www.hlads.club/wp-content/uploads/2025/07/Xo-So.png",
};

// Chỉ hiển thị 5 danh mục có ảnh, đảm bảo 1 hàng 5 item trên desktop
const DISPLAY_CATS = CATS.filter((c) => !!CAT_IMAGE_MAP[c.label]).slice(0, 5);

export default function Categories() {
  return (
    <section className="">
      <SectionTitle align="center" variant="badge">
        Danh mục game
      </SectionTitle>
      <CategoriesGrid cats={DISPLAY_CATS} imageMap={CAT_IMAGE_MAP} />
    </section>
  );
}
