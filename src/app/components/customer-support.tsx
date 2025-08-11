import SectionTitle from "../../components/shared/section-title";
import { SupportImage, SupportBullets, SupportChannels, type ChannelItem } from "./customer-support-animated";


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
    <section
      id="support"
      className="py-10 md:py-14 grid md:grid-cols-12 gap-8 items-start"
    >
      {/* Left: Illustration */}
      <div className="md:col-span-5">
        <SupportImage />
      </div>

      {/* Right: Content */}
      <div className="md:col-span-7">
        <SectionTitle align="left" variant="default">
          Dịch Vụ Hỗ Trợ Khách Hàng
        </SectionTitle>
        <p className="mt-2 text-slate-600">
          ATQ cam kết hỗ trợ 24/7 với đội ngũ chuyên nghiệp qua nhiều kênh:
        </p>
        <SupportBullets items={bulletItems} className="mt-3" />
        <p className="mt-3 text-slate-600">
          Liên hệ ngay: Website ATQ.com | Hotline: 1900 6868
        </p>

        {/* Channels */}
        <SupportChannels channels={channels} />
      </div>
    </section>
  );
}
