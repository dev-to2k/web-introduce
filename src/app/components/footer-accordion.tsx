"use client";

import { useState } from "react";

type Section = {
  title: string;
  items: string[];
};

export default function FooterAccordion({ sections }: { sections: Section[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="sm:hidden space-y-2">
      {sections.map((section, idx) => (
        <div key={section.title} className="border-b border-white/10 py-2">
          <button
            type="button"
            aria-expanded={openIndex === idx}
            aria-controls={`footer-accordion-panel-${idx}`}
            onClick={() => toggle(idx)}
            className="w-full flex items-center justify-between text-white font-semibold tracking-wide uppercase text-base"
          >
            <span>{section.title}</span>
            <svg
              className={`h-5 w-5 transform transition-transform duration-300 ${
                openIndex === idx ? "rotate-180" : "rotate-0"
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <div
            id={`footer-accordion-panel-${idx}`}
            className={`overflow-hidden transition-all duration-300 ease-out ${
              openIndex === idx ? "max-h-60 opacity-100 mt-2" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="text-sm space-y-2 text-slate-300/90">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
