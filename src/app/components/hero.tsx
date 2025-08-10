"use client";
import VideoPlayer from "./video-player";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-12 md:py-16">
      <div className="relative grid md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-7">
          <span className="hero-fade inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 text-brand font-bold text-xs ring-1 ring-brand/20 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand" />
            </span>
            Liên minh ATQ · Nền tảng game quốc tế
          </span>

          <h1 className="hero-fade-delay mt-4 text-4xl md:text-6xl font-black tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-brand to-indigo-600">
            Cuộc chơi mới – Tầm nhìn mới
          </h1>

          <p className="hero-fade-delay-2 mt-4 text-slate-600 md:text-lg max-w-xl">
            Hệ sinh thái game đa nền tảng, nạp/rút nhanh, bảo mật chuẩn quốc tế.
            Tập trung vào trải nghiệm mượt, khuyến mãi minh bạch, CSKH 24/7.
          </p>

          <div className="hero-fade-delay-2 mt-6 flex flex-wrap gap-3">
            <button className="px-5 py-3 rounded-lg bg-gradient-to-r from-brand via-indigo-500 to-violet-500 text-white font-semibold shadow-card hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-brand/40">
              <span className="relative inline-flex items-center gap-2 z-10">
                Đăng ký miễn phí
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M13.5 4.5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V6.31l-6.22 6.22a.75.75 0 1 1-1.06-1.06L17.44 5.25h-2.19a.75.75 0 0 1-.75-.75Z" />
                  <path d="M5.25 6A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V12a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V8.25a.75.75 0 0 1 .75-.75H12a.75.75 0 0 0 0-1.5H5.25Z" />
                </svg>
              </span>
            </button>
            <button className="px-5 py-3 rounded-lg border-2 border-brand/70 text-brand font-semibold hover:bg-brand/10 hover:-translate-y-0.5 transition-transform duration-300 inline-flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M3 3h8v8H3V3Zm2 2v4h4V5H5Zm6-2h10v10H11V3Zm2 2v6h6V5h-6ZM3 13h10v8H3v-8Zm2 2v4h6v-4H5Zm12-2h4v4h-4v-4Zm0 6h4v4h-4v-4Z" />
              </svg>
              Quét QR tải app
            </button>
          </div>

          <div className="hero-fade-delay-2 mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <span>★ 4.8/5</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span>6,8K+ thành viên</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span>Giấy phép quốc tế</span>
          </div>
        </div>

        <div className="md:col-span-5 hero-float">
          <VideoPlayer
            className="h-80 w-full rounded-xl shadow-card overflow-hidden ring-1 ring-black/5"
            src="/videos/banner-video.mp4"
            poster="https://storage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
            autoPlay
            muted
            loop
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
          100% {
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(12px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .hero-float {
          animation: float 6s ease-in-out infinite;
        }
        .hero-fade {
          animation: fadeInUp 0.7s ease-out both;
        }
        .hero-fade-delay {
          animation: fadeInUp 0.8s ease-out 0.08s both;
        }
        .hero-fade-delay-2 {
          animation: fadeInUp 0.9s ease-out 0.16s both;
        }
      `}</style>
    </section>
  );
}
