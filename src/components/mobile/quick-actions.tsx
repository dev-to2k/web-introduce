import Link from "next/link";
import type { ReactNode, SVGProps } from "react";

type Action = {
  href: string;
  label: string;
  icon: (props: SVGProps<SVGSVGElement>) => ReactNode;
  gradientFrom: string;
  gradientTo: string;
};

const actions: Action[] = [
  {
    href: "#login",
    label: "Login",
    icon: UserIcon,
    gradientFrom: "from-sky-400",
    gradientTo: "to-blue-500",
  },
  {
    href: "#register",
    label: "Register",
    icon: UserPlusIcon,
    gradientFrom: "from-pink-400",
    gradientTo: "to-rose-500",
  },
  {
    href: "#points",
    label: "Points",
    icon: MapIcon,
    gradientFrom: "from-amber-400",
    gradientTo: "to-orange-500",
  },
  {
    href: "#support",
    label: "Services",
    icon: MessageIcon,
    gradientFrom: "from-violet-400",
    gradientTo: "to-purple-500",
  },
];

export default function QuickActionsMobile() {
  return (
    <div className="mt-3 px-3">
      <div className="rounded-2xl bg-white/90 border border-slate-200 p-3 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:bg-neutral-800/80 dark:border-white/10">
        <div className="grid grid-cols-4 gap-3">
          {actions.map(
            ({ href, label, icon: Icon, gradientFrom, gradientTo }) => (
              <Link
                key={href}
                href={href}
                className="flex flex-col items-center gap-1 text-slate-900 dark:text-white"
              >
                <span
                  className={`h-12 w-12 grid place-items-center rounded-2xl bg-gradient-to-br ${gradientFrom} ${gradientTo}`}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wide opacity-90 text-center leading-none">
                  {label}
                </span>
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
}

function UserIcon(props: SVGProps<SVGSVGElement>) {
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

function UserPlusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...props}
    >
      <path d="M15 19v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M19 8v6M22 11h-6" />
    </svg>
  );
}

function MapIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...props}
    >
      <path d="m9 18-6 3V6l6-3 6 3 6-3v15l-6 3-6-3Z" />
      <path d="M9 3v15M15 6v15" />
    </svg>
  );
}

function MessageIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...props}
    >
      <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
    </svg>
  );
}
