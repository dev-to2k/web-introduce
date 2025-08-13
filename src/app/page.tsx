import AppSection from "./components/app-section/app-section";
import CustomerSupport from "./components/customer-support/customer-support";
import Hero from "./components/hero";
import MembersIntroContent from "./components/members-intro/members-intro-content";
import MembersIntroSlider from "./components/members-intro/members-intro-slider";
import News from "./components/news/news";
import Partners from "./components/partners";
import Security from "./components/security/security";
import SiteStats from "./components/site-stats";
import TruyCap from "./components/truy-cap/truy-cap";
import Videos from "./components/video/videos";

export default function Home() {
  return (
    <div className="space-y-8">
      {/* ATQ (banner) */}
      <Hero />

      {/* Giới thiệu thành viên (content) */}
      <MembersIntroContent />

      {/* Số liệu hệ thống */}
      <SiteStats />

      {/* Truy cập */}
      <TruyCap />

      {/* Tin tức */}
      <News />

      {/* Video */}
      <Videos />

      {/* Ứng dụng QR */}
      <AppSection />

      {/* Giới thiệu thành viên (slide video) */}
      <MembersIntroSlider />

      {/* Bảo mật */}
      <Security />

      {/* Đối tác */}
      <Partners />

      {/* Chăm sóc khách hàng */}
      <CustomerSupport />
    </div>
  );
}
