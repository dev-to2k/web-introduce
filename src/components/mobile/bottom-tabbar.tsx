import Link from "next/link";
import type { ReactNode, SVGProps } from "react";

const items: {
  href: string;
  label: string;
  icon: (props: SVGProps<SVGSVGElement>) => ReactNode;
}[] = [
  { href: "#home", label: "Home", icon: HomeIcon },
  { href: "#news", label: "Hot News", icon: NewsIcon },
  { href: "#events", label: "Events", icon: EventsIcon },
  { href: "#members-content", label: "Member", icon: MemberIcon },
  { href: "#support", label: "Account", icon: AccountIcon },
] as const;

export default function MobileBottomTabbar() {
  return (
    <nav className="fixed bottom-0 inset-x-0 z-50">
      <div className="mx-2 mb-2 rounded-2xl bg-white text-slate-900 border border-slate-200 shadow-2xl dark:bg-neutral-900 dark:text-white dark:border-white/10">
        <ul className="grid grid-cols-5 text-[11px]">
          {items.map(({ href, label, icon: Icon }) => (
            <li
              key={href}
              className="flex flex-col items-center justify-center py-2"
            >
              <Link href={href} className="flex flex-col items-center gap-1">
                <Icon className="h-5 w-5" />
                <span className="leading-none">{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function HomeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...props}
    >
      <path d="m3 10 9-7 9 7" />
      <path d="M9 22V12h6v10" />
    </svg>
  );
}

function NewsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...props}
    >
      <path d="M3 4h13a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M7 8h9M7 12h9M7 16h5" />
    </svg>
  );
}

function EventsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...props}
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

function MemberIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...props}
    >
      <circle cx="12" cy="7" r="4" />
      <path d="M5.5 21a6.5 6.5 0 0 1 13 0Z" />
    </svg>
  );
}

function AccountIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...props}
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
