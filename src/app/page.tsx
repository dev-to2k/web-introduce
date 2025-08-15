import { RenderMobile } from "@/components/responsive/RenderAt";
import AppSection from "../components/app-section/app-section";
import CustomerSupport from "../components/customer-support/customer-support";
import HotEvents from "../components/events/hot-events";
import Hero from "../components/hero";
import MembersIntroSlider from "../components/members-intro/members-intro-slider";
import AllianceGridMobile from "../components/mobile/alliance-grid";
import QuickActionsMobile from "../components/mobile/quick-actions";
import News from "../components/news/news";
import Partners from "../components/partners";

export default function Home() {
  return (
    <div id="home" className="space-y-8">
      {/* ATQ (banner) */}
      <Hero />

      {/* Mobile quick actions giống OKwin */}
      <RenderMobile>
        <QuickActionsMobile />
      </RenderMobile>

      {/* Quick alliance grid (OKwin style) */}
      <RenderMobile>
        <AllianceGridMobile />
      </RenderMobile>

      {/* Ứng dụng QR */}
      <AppSection />

      {/* Tin tức */}
      <News />

      {/* Hot Events */}
      <HotEvents />

      {/* Giới thiệu thành viên (slide video) */}
      <MembersIntroSlider />

      {/* Đối tác */}
      <Partners />

      {/* Chăm sóc khách hàng */}
      <CustomerSupport />
    </div>
  );
}
