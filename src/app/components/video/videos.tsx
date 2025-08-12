import SectionTitle from "../../../components/shared/section-title";
import VideosGrid from "./videos-grid";

export default function Videos() {
  return (
    <section id="videos" className="max-w-screen-xl mx-auto px-4">
      <SectionTitle align="center" variant="badge">
        Video nổi bật
      </SectionTitle>
      <VideosGrid />
    </section>
  );
}
