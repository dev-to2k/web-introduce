"use client";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { RenderMobile } from "../responsive/RenderAt";
import SectionTitleClient from "../shared/section-title-client";
import VideoPlayer from "../video/video-player";
import { useMediaQuery } from "@/hooks/use-media";
import VideoModal from "../video/video-modal";

export default function MembersIntroSlider() {
  const [selectedVideo, setSelectedVideo] = useState<
    { src: string; title: string; thumbnail?: string } | null
  >(null);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const videos = [
    {
      src: "https://www.youtube.com/watch?v=mBjj3RkZobw",
      title:
        "58win | Công thức bắt cầu tài xỉu cho anh em kiếm cơm gạo hàng ngày | 58win",
      thumbnail:
        "https://i.ytimg.com/vi/mBjj3RkZobw/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDY0g1qYyErlkIAnQAzXxFNSTlL2w",
    },
    {
      src: "https://www.youtube.com/watch?v=QR2CnMsgqYk",
      title:
        "58win | Mẹo ăn thông tài xỉu cực ngon, bí quyết để chiến thắng | 58win",
      thumbnail:
        "https://i.ytimg.com/vi/QR2CnMsgqYk/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCfSDPoLD_dbPLCGA-qug8c_Dh8LQ",
    },
    {
      src: "https://www.youtube.com/watch?v=96Ruv-gLJg4",
      title: "AX88 | Cách đánh tài xỉu cực dễ, bí quyết để chiến thắng | AX88",
      thumbnail:
        "https://i.ytimg.com/vi/96Ruv-gLJg4/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDVp8dm9tK0OBnJscoscCj7IwR4YA",
    },
    {
      src: "https://www.youtube.com/watch?v=KQWypLeDIa4",
      title:
        "58WIN | Cách đánh tài xỉu cực dễ, bí quyết để chiến thắng | 58WIN",
      thumbnail:
        "https://i.ytimg.com/vi/KQWypLeDIa4/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAmuEsXFxA07lSacspbAShAff7IaA",
    },
    {
      src: "https://www.youtube.com/watch?v=6Hb0_iV1TFU",
      title: "8XX | Cách đánh tài xỉu cực dễ, bí quyết để chiến thắng | 8XX",
      thumbnail:
        "https://i.ytimg.com/vi/6Hb0_iV1TFU/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCeEXzkd7fb7UPbNlbapk6lwWqaBw",
    },
    {
      src: "https://www.youtube.com/watch?v=IsC61BEobrQ",
      title: "AX88 | Cách đánh tài xỉu cực dễ, bí quyết để chiến thắng | AX88",
      thumbnail:
        "https://i.ytimg.com/vi/IsC61BEobrQ/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAcgJoX5yCXiAGk9KPqMO_w2vAE1w",
    },
  ];
  // Tạo danh sách dài hơn để hiển thị dày đặc hơn trên desktop và mobile
  const videosLarge = Array.from({ length: 3 }, () => videos).flat();
  // Bật loop chỉ khi số video > max slidesPerView để tránh cảnh báo Swiper
  const shouldLoop = videosLarge.length > 3;
  const renderCard = (v: {
    src: string;
    title: string;
    thumbnail?: string;
  }) => {
    const clickable = isDesktop === true;
    return (
      <figure
        className={cn(
          "relative w-full overflow-hidden rounded-xl border",
          // light styles
          "border-gray-950/[.10] bg-gray-950/[.02] hover:bg-gray-950/[.06]",
          // dark styles
          "dark:border-gray-50/[.10] dark:bg-gray-50/[.06] dark:hover:bg-gray-50/[.12]",
          clickable && "cursor-pointer group"
        )}
        onClick={clickable ? () => setSelectedVideo(v) : undefined}
        role={clickable ? "button" : undefined}
      >
        <VideoPlayer
          className="h-56 w-full"
          src={v.src}
          poster={v.thumbnail}
          autoPlay={false}
          muted
          loop
          hideOverlayPlayButton={clickable}
        />
        {clickable ? (
          <span className="pointer-events-none absolute inset-0 grid place-items-center">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/90 text-black shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 ml-0.5"
              >
                <path d="M8 5.14v13.72L19 12 8 5.14z" />
              </svg>
            </span>
          </span>
        ) : null}
        <figcaption className="p-3 font-semibold text-gray-900 dark:text-white">
          {v.title}
        </figcaption>
      </figure>
    );
  };
  return (
    <section id="members-slider" className="py-6 max-w-screen-2xl mx-auto px-4">
      <BlurFade inView>
        <SectionTitleClient
          align="center"
          variant="badge"
          className="text-xs sm:text-sm"
        >
          Thiện Nguyện
        </SectionTitleClient>
      </BlurFade>
      {/* Mobile: giữ SwiperJS */}
      <RenderMobile>
        <BlurFade inView delay={0.05}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1.1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={shouldLoop}
            className="mt-4 px-1"
          >
            {videosLarge.map((v, idx) => (
              <SwiperSlide key={`${v.title}-${idx}`}>
                {renderCard(v)}
              </SwiperSlide>
            ))}
          </Swiper>
        </BlurFade>
      </RenderMobile>

      {/* Desktop: Marquee dọc 5 cột */}
      <div className="relative overflow-hidden hidden md:grid grid-cols-5 gap-4 mt-4">
        <BlurFade inView delay={0.06}>
          <Marquee vertical pauseOnHover className="h-[560px] [--duration:36s]">
            {videosLarge.map((v, idx) => (
              <div key={`col1-${v.src}-${idx}`} className="w-full">
                {renderCard(v)}
              </div>
            ))}
          </Marquee>
        </BlurFade>
        <BlurFade inView delay={0.12}>
          <Marquee
            vertical
            reverse
            pauseOnHover
            className="h-[560px] [--duration:40s]"
          >
            {videosLarge.map((v, idx) => (
              <div key={`col2-${v.src}-${idx}`} className="w-full">
                {renderCard(v)}
              </div>
            ))}
          </Marquee>
        </BlurFade>
        <BlurFade inView delay={0.18}>
          <Marquee vertical pauseOnHover className="h-[560px] [--duration:44s]">
            {videosLarge.map((v, idx) => (
              <div key={`col3-${v.src}-${idx}`} className="w-full">
                {renderCard(v)}
              </div>
            ))}
          </Marquee>
        </BlurFade>
        <BlurFade inView delay={0.24}>
          <Marquee
            vertical
            reverse
            pauseOnHover
            className="h-[560px] [--duration:48s]"
          >
            {videosLarge.map((v, idx) => (
              <div key={`col4-${v.src}-${idx}`} className="w-full">
                {renderCard(v)}
              </div>
            ))}
          </Marquee>
        </BlurFade>
        <BlurFade inView delay={0.3}>
          <Marquee vertical pauseOnHover className="h-[560px] [--duration:52s]">
            {videosLarge.map((v, idx) => (
              <div key={`col5-${v.src}-${idx}`} className="w-full">
                {renderCard(v)}
              </div>
            ))}
          </Marquee>
        </BlurFade>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/6 bg-gradient-to-b from-background" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/6 bg-gradient-to-t from-background" />
      </div>
      {/* Desktop video modal */}
      <VideoModal
        isOpen={!!selectedVideo && isDesktop === true}
        onClose={() => setSelectedVideo(null)}
        src={selectedVideo?.src ?? null}
        poster={selectedVideo?.thumbnail}
        title={selectedVideo?.title}
      />
    </section>
  );
}
