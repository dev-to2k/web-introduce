import AppSection from "./components/app-section";
import Categories from "./components/categories";
import CustomerSupport from "./components/customer-support";
import Events from "./components/events";
import Hero from "./components/hero";
import MembersIntroContent from "./components/members-intro-content";
import MembersIntroSlider from "./components/members-intro-slider";
import News from "./components/news";
import Partners from "./components/partners";
import Security from "./components/security";
import SiteStats from "./components/site-stats";
import Videos from "./components/videos";

export default function Home() {
  return (
    <div className="space-y-8">
      {/* ATQ (banner) */}
      <Hero />

      {/* Giới thiệu thành viên (slide video) */}
      <MembersIntroSlider />

      {/* Số liệu hệ thống */}
      <SiteStats />

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
