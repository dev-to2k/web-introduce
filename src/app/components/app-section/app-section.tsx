import AppCtaButtons from "../../../components/shared/app-cta-buttons";
import SectionTitle from "../../../components/shared/section-title";
import AppSectionLeft from "./app-section-left";
import AppSectionRight from "./app-section-right";

export default function AppSection() {
  return (
    <section id="app" className="max-w-screen-xl mx-auto px-4">
      <SectionTitle as="div" align="center" variant="badge">
        ATQ – NỀN TẢNG GIẢI TRÍ HÀNG ĐẦU
      </SectionTitle>
      <div className="grid md:grid-cols-12 gap-8 items-start mt-6">
        {/* Left: Stacked phone mockups */}
        <div className="md:col-span-6">
          <AppSectionLeft />
        </div>

        {/* Right: Content */}
        <div className="md:col-span-6">
          {/* Wrapper khớp chiều cao khung ảnh bên trái và đẩy CTA xuống đáy */}
          <div className="mt-6 md:mt-16 min-h-[320px] md:min-h-[380px] grid grid-rows-[auto_1fr_auto]">
            {/* Logos + content top */}
            <AppSectionRight />
            {/* CTA bottom aligned */}
            <AppCtaButtons className="mt-5 self-end" />
          </div>
        </div>
      </div>
    </section>
  );
}
