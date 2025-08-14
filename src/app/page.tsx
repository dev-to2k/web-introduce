import AppSection from "./components/app-section/app-section";
import CustomerSupport from "./components/customer-support/customer-support";
import HotEvents from "./components/events/hot-events";
import Hero from "./components/hero";
import MembersIntroContent from "./components/members-intro/members-intro-content";
import MembersIntroSlider from "./components/members-intro/members-intro-slider";
import AllianceGridMobile from "./components/mobile/alliance-grid";
import QuickActionsMobile from "./components/mobile/quick-actions";
import News from "./components/news/news";
import Partners from "./components/partners";
import Videos from "./components/video/videos";

export default function Home() {
  return (
    <div id="home" className="space-y-8">
      {/* ATQ (banner) */}
      <Hero />

      {/* Mobile quick actions giống OKwin */}
      <div className="md:hidden">
        <QuickActionsMobile />
      </div>

      {/* Quick alliance grid (OKwin style) */}
      <AllianceGridMobile />

      {/* Ứng dụng QR */}
      <AppSection />

      {/* Tin tức */}
      <News />

      {/* Hot Events */}
      <HotEvents />

      {/* Video */}
      <Videos />

      {/* Giới thiệu thành viên (slide video) */}
      <MembersIntroSlider />

      {/* Đối tác */}
      <Partners />

      {/* Chăm sóc khách hàng */}
      <CustomerSupport />
    </div>
  );
}
