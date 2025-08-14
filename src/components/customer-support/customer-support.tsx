import SectionTitle from "@/components/shared/section-title";
import {
  SupportBullets,
  SupportChannels,
  SupportImage,
  type ChannelItem,
} from "./customer-support-animated";
import CustomerSupportFloating from "./customer-support-floating";

const bulletItems = [
  "Live Chat: Giải đáp trực tiếp trên website/app.",
  "Hotline: Liên hệ qua số điện thoại hỗ trợ chính thức.",
  "Email: Phản hồi trong 1-3 giờ.",
  "Zalo/Telegram: Hỗ trợ nhanh qua tin nhắn.",
];

const channels: ChannelItem[] = [
  {
    key: "cskh",
    label: "CSKH 24/7",
    href: "tel:19006868",
    color: "text-brand",
    ring: "ring-brand/30 bg-brand/10",
    icon: "headset",
  },
  {
    key: "telegram",
    label: "Telegram",
    href: "#",
    color: "text-sky-500",
    ring: "ring-sky-300/60 bg-sky-50",
    icon: "telegram",
  },
  {
    key: "facebook",
    label: "Facebook",
    href: "#",
    color: "text-blue-600",
    ring: "ring-blue-300/60 bg-blue-50",
    icon: "facebook",
  },
  {
    key: "youtube",
    label: "YouTube",
    href: "#",
    color: "text-red-600",
    ring: "ring-red-300/60 bg-red-50",
    icon: "youtube",
  },
];

export default function CustomerSupport() {
  return (
    <>
      <section
        id="support"
        className="hidden md:block py-12 max-w-screen-xl mx-auto px-4 md:py-16 "
      >
        <SectionTitle
          as="div"
          align="center"
          variant="badge"
          className="mb-10 text-xs sm:text-sm"
        >
          Dịch Vụ Hỗ Trợ Khách Hàng
        </SectionTitle>
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Illustration */}
          <div className="md:col-span-5">
            <SupportImage />
          </div>

          {/* Right: Content */}
          <div className="md:col-span-7">
            <div className="relative rounded-2xl clip-animated-border">
              <div className="rounded-2xl bg-white shadow-xl p-6 md:p-8 dark:bg-neutral-900">
                <div className="space-y-3">
                  <SectionTitle
                    as="div"
                    align="left"
                    variant="default"
                    className="mb-4 text-brand text-2xl md:text-3xl"
                  >
                    Hỗ Trợ Khách Hàng 24/7
                  </SectionTitle>
                  <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base">
                    ATQ cam kết hỗ trợ 24/7 với đội ngũ chuyên nghiệp qua nhiều
                    kênh:
                  </p>
                  <SupportBullets
                    items={bulletItems}
                    className="text-sm md:text-base"
                  />
                  <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base">
                    Liên hệ nhanh:{" "}
                    <a href="#" className="text-brand hover:underline">
                      Website ATQ.com
                    </a>{" "}
                    |
                    <a
                      href="tel:19006868"
                      className="text-brand hover:underline"
                    >
                      {" "}
                      Hotline: 1900 6868
                    </a>
                  </p>

                  {/* Channels */}
                  <SupportChannels channels={channels} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CustomerSupportFloating bullets={bulletItems} channels={channels} />
    </>
  );
}
