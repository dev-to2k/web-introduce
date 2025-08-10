import Hero from "./components/hero";
import Categories from "./components/categories";
import AppSection from "./components/app-section";
import Security from "./components/security";
import Partners from "./components/partners";
import CustomerSupport from "./components/customer-support";
import MembersIntroSlider from "./components/members-intro-slider";
import MembersIntroContent from "./components/members-intro-content";
import News from "./components/news";
import Videos from "./components/videos";

export default function Home() {
  return (
    <div className="space-y-8">
      {/* ATQ (banner) */}
      <Hero />

      {/* Giới thiệu thành viên (slide video) */}
      <MembersIntroSlider />

      {/* Danh mục trò chơi */}
      <Categories />

      {/* Giới thiệu thành viên (content) */}
      <MembersIntroContent />

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
      
      {/* Chăm sóc khách hàng */}
      <CustomerSupport />
    </div>
  );
}
