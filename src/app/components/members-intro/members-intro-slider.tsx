"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitleClient from "../../../components/shared/section-title-client";
import VideoPlayer from "../video/video-player";

export default function MembersIntroSlider() {
  const videos = [
    { src: "/videos/banner-video.mp4", title: "58WIN" },
    { src: "/videos/banner-video.mp4", title: "8XX" },
    { src: "/videos/banner-video.mp4", title: "AX88" },
  ];
  // Bật loop chỉ khi số video > max slidesPerView để tránh cảnh báo Swiper
  const shouldLoop = videos.length > 3;
  return (
    <section id="members-slider" className="py-6">
      <SectionTitleClient align="center" variant="badge">
        Giới thiệu thành viên
      </SectionTitleClient>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView={1.1}
        breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={shouldLoop}
        className="mt-4 px-1"
      >
        {videos.map((v) => (
          <SwiperSlide key={v.title}>
            <div className="rounded-xl border border-slate-200 overflow-hidden">
              <VideoPlayer
                className="h-56 w-full"
                src={v.src}
                poster="https://storage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
                autoPlay
                muted
                loop
              />
              <div className="p-3 font-semibold">{v.title}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
