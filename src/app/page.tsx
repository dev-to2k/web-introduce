import AppSection from "./components/app-section/app-section";
import Categories from "./components/categories/categories";
import CustomerSupport from "./components/customer-support";
import Events from "./components/events/events";
import Hero from "./components/hero";
import MembersIntroContent from "./components/members-intro/members-intro-content";
import MembersIntroSlider from "./components/members-intro/members-intro-slider";
import News from "./components/news/news";
import Partners from "./components/partners";
import Security from "./components/security/security";
import SiteStats from "./components/site-stats";
import Videos from "./components/video/videos";
import TruyCap from "./components/truy-cap/truy-cap";

export default function Home() {
  return (
    <div className="space-y-8">
      {/* ATQ (banner) */}
      <Hero />

      {/* Giới thiệu thành viên (slide video) */}
      <MembersIntroSlider />

      {/* Số liệu hệ thống */}
      <SiteStats />

      {/* Truy cập */}
      <TruyCap />

      {/* Giới thiệu thành viên (content) */}
      <MembersIntroContent />

      {/* Danh mục trò chơi */}
      <Categories />

      {/* Tin tức */}
      <News />

      {/* Video */}
      <Videos />

      {/* Ứng dụng QR */}
      <AppSection />

      {/* Bảo mật */}
      <Security />

      {/* Đối tác */}
      <Partners />

      {/* Sự kiện – ATQ */}
      <Events />

      {/* Chăm sóc khách hàng */}
      <CustomerSupport />
    </div>
  );
}
