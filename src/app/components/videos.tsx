import SectionTitle from "./section-title";
import VideoPlayer from "./video-player";

export default function Videos() {
  return (
    <section id="videos" className="py-10">
      <SectionTitle align="center" variant="badge">
        Video nổi bật
      </SectionTitle>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <VideoPlayer
          className="h-64 w-full rounded-xl shadow-card overflow-hidden"
          src="/videos/banner-video.mp4"
          poster="https://storage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
          autoPlay
          muted
          loop
        />
        <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-card">
          <b>Giới thiệu hệ sinh thái ATQ</b>
          <p className="text-slate-600 mt-2">
            Khám phá các danh mục trò chơi, cộng đồng thành viên, ưu đãi và
            chính sách an toàn.
          </p>
        </div>
      </div>
    </section>
  );
}
