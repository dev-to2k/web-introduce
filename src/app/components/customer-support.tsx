import Image from "next/image";
import React from "react";
import SectionTitle from "./section-title";

type IconProps = React.SVGProps<SVGSVGElement> & { className?: string };

const IconHeadset: React.FC<IconProps> = ({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className={className}
    aria-hidden
    {...props}
  >
    <path d="M4 12a8 8 0 1 1 16 0v5a3 3 0 0 1-3 3h-2.5a1.5 1.5 0 1 1 0-3H17a1 1 0 0 0 1-1v-4a6 6 0 1 0-12 0v4a1 1 0 0 0 1 1h2.5a1.5 1.5 0 1 1 0 3H8a3 3 0 0 1-3-3v-5Z" />
  </svg>
);

const IconTelegram: React.FC<IconProps> = ({ className, ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M9.03 14.8 8.8 18.5c.36 0 .52-.16.71-.35l1.7-1.63 3.52 2.58c.65.36 1.12.17 1.3-.6l2.35-11.02.01-.01c.21-.97-.35-1.35-.98-1.11L3.7 9.14c-.95.37-.93.91-.16 1.15l4.1 1.28 9.5-6.01c.45-.29.86-.13.52.16l-8.63 7.08Z" />
  </svg>
);

const IconFacebook: React.FC<IconProps> = ({ className, ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M13.5 22v-8h2.7l.4-3h-3.1V8.6c0-.9.24-1.5 1.5-1.5h1.7V4.4c-.84-.1-1.68-.2-2.52-.2-2.5 0-4.18 1.52-4.18 4.3V11H7v3h2.99v8h3.51Z" />
  </svg>
);

const IconYoutube: React.FC<IconProps> = ({ className, ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M22 8.2s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.1-.8C16.8 5.1 12 5.1 12 5.1h0s-4.8 0-7.1.3c-.4 0-1.3 0-2.1.8-.6.6-.8 2-.8 2S1.7 9.8 1.7 11.4v1.1c0 1.6.3 3.2.3 3.2s.2 1.4.8 2c.8.8 1.8.8 2.3.9 1.7.2 7 .3 7 .3s4.8 0 7.1-.3c.4 0 1.3 0 2.1-.8.6-.6.8-2 .8-2s.3-1.6.3-3.2v-1.1c0-1.6-.3-3.2-.3-3.2ZM10.1 14.6V8.9l5.6 2.9-5.6 2.8Z" />
  </svg>
);

const bulletItems = [
  "Live Chat: Giải đáp trực tiếp trên website/app.",
  "Hotline: Liên hệ qua số điện thoại hỗ trợ chính thức.",
  "Email: Phản hồi trong 1-3 giờ.",
  "Zalo/Telegram: Hỗ trợ nhanh qua tin nhắn.",
];

const channels = [
  {
    key: "cskh",
    label: "CSKH 24/7",
    href: "tel:19006868",
    color: "text-brand",
    ring: "ring-brand/30 bg-brand/10",
    Icon: IconHeadset,
  },
  {
    key: "telegram",
    label: "Telegram",
    href: "#",
    color: "text-sky-500",
    ring: "ring-sky-300/60 bg-sky-50",
    Icon: IconTelegram,
  },
  {
    key: "facebook",
    label: "Facebook",
    href: "#",
    color: "text-blue-600",
    ring: "ring-blue-300/60 bg-blue-50",
    Icon: IconFacebook,
  },
  {
    key: "youtube",
    label: "YouTube",
    href: "#",
    color: "text-red-600",
    ring: "ring-red-300/60 bg-red-50",
    Icon: IconYoutube,
  },
] as const;

export default function CustomerSupport() {
  return (
    <section
      id="support"
      className="py-10 md:py-14 grid md:grid-cols-12 gap-8 items-start"
    >
      {/* Left: Illustration */}
      <div className="md:col-span-5">
        <div className="relative h-[320px] md:h-[380px]">
          <div className="relative h-full w-full bg-white p-2 md:p-4">
            <Image
              src="/images/ATQ-CSKH.png"
              alt="Dịch vụ hỗ trợ khách hàng ATQ"
              fill
              sizes="(min-width: 768px) 560px, 100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Right: Content */}
      <div className="md:col-span-7">
        <SectionTitle align="left" variant="default">
          Dịch Vụ Hỗ Trợ Khách Hàng
        </SectionTitle>
        <p className="mt-2 text-slate-600">
          ATQ cam kết hỗ trợ 24/7 với đội ngũ chuyên nghiệp qua nhiều kênh:
        </p>
        <ul className="mt-3 space-y-2 text-slate-600 list-disc list-inside">
          {bulletItems.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <p className="mt-3 text-slate-600">
          Liên hệ ngay: Website ATQ.com | Hotline: 1900 6868
        </p>

        {/* Channels */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {channels.map(({ key, label, href, Icon, color, ring }) => (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl p-4 bg-white ring-1 ring-slate-200 hover:shadow-card transition border border-slate-100 text-center"
              aria-label={label}
            >
              <div
                className={`mx-auto h-12 w-12 rounded-full grid place-items-center ring-1 ${ring}`}
              >
                <Icon className={`h-6 w-6 ${color}`} />
              </div>
              <div className="mt-2 font-semibold text-slate-900 group-hover:text-brand transition">
                {label}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
