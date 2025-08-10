import EventsClient, { type VideoItem } from "./events-client";
import SectionTitle from "./section-title";

export default function Events() {
  // Demo data - có thể thay bằng dữ liệu thật sau
  const items: VideoItem[] = [
    {
      id: "gxXu_cH3goU", // Big Buck Bunny sample on YouTube
      title: "Liên Minh ATQ – Giới thiệu ứng dụng",
      channel: "ATQ Channel's",
    },
    {
      id: "ITqv0OewO-w", // YouTube IFrame API Demo
      title: "Liên Minh ATQ – Sự kiện cộng đồng",
      channel: "ATQ Channel's",
    },
    {
      id: "HL1qdE4o0iY", // Sample
      title: "Liên Minh ATQ – Thiện nguyện",
      channel: "ATQ Channel's",
    },
    {
      id: "fKkCc6Spi8I", // Sample
      title: "𝔻𝕀̉ℕℍ 𝕃𝔼̂̃ ℍ𝕆̣̂𝕀 – ℝ𝕀ℕℍ ℚ𝕌𝔸̀ 𝕋𝕆̛́𝕀 𝔹𝔼̂́ℕ ℂ𝕌̀ℕ𝔾 𝟝𝟠𝕎𝕀ℕ!",
      channel: "ATQ Channel's",
    },
  ];

  return (
    <section id="events" className="py-10">
      <SectionTitle align="center" variant="badge">
        Sự kiện – ATQ
      </SectionTitle>
      <div className="mt-6">
        <EventsClient items={items} />
      </div>
    </section>
  );
}
