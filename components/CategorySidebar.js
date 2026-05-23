"use client";

import { useState } from "react";
import Link from "next/link";

export default function CategorySidebar({ categories, activeSlug, productCounts }) {
  const [expandedSlug, setExpandedSlug] = useState(activeSlug);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleExpand = (slug) => {
    setExpandedSlug((prev) => (prev === slug ? null : slug));
  };

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="md:hidden fixed bottom-6 left-6 z-40 px-5 py-3 bg-[var(--color-accent)] text-white rounded-full shadow-lg hover:bg-[var(--color-accent-light)] transition-colors flex items-center gap-2 font-medium"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
        </svg>
        Kategori
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden animate-fade-in"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:sticky top-0 md:top-6 left-0 h-full md:h-auto
          w-72 md:w-80 z-50 md:z-auto
          bg-[var(--color-cream)] md:bg-transparent
          p-8 md:p-0
          transform transition-transform duration-300 ease-out
          ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          overflow-y-auto md:overflow-visible
        `}
      >
        {/* Mobile close button */}
        <button
          onClick={() => setMobileOpen(false)}
          className="md:hidden absolute top-4 right-4 p-2 text-[var(--color-dark)] hover:text-[var(--color-accent)] transition-colors"
          aria-label="Tutup sidebar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-6 md:mb-8">
          <h3 className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-4 hidden md:block">
            Kategori Produk
          </h3>
          <div className="space-y-4">
            {categories.map((cat) => {
              const isActive = cat.slug === activeSlug;
              const isExpanded = expandedSlug === cat.slug;
              const count = productCounts[cat.slug] ?? 0;

              return (
                <div
                  key={cat.slug}
                  className={`
                    rounded-xl border transition-all duration-200 overflow-hidden
                    ${isActive
                      ? "border-[var(--color-accent)] bg-white shadow-md"
                      : "border-[var(--color-warm)] bg-white/60 hover:bg-white hover:shadow-sm"
                    }
                  `}
                >
                  <button
                    onClick={() => toggleExpand(cat.slug)}
                    className="w-full flex items-center gap-3 px-5 py-4 text-left"
                  >
                    <span className={`text-xl ${isActive ? "grayscale-0" : "grayscale-[0.3]"}`}>
                      {cat.icon}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className={`text-sm font-semibold truncate ${isActive ? "text-[var(--color-accent)]" : "text-[var(--color-dark)]"}`}>
                        {cat.name}
                      </div>
                      <div className="text-xs text-[var(--color-muted)]">
                        {count} produk
                      </div>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 text-[var(--color-muted)] transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Expanded content */}
                  <div
                    className={`
                      grid transition-all duration-300 ease-in-out
                      ${isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
                    `}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 pt-3 border-t border-[var(--color-warm)]">
                        <p className="text-xs text-[var(--color-muted)] leading-relaxed mb-3">
                          {cat.description}
                        </p>
                        <Link
                          href={`/kategori/${cat.slug}`}
                          onClick={() => setMobileOpen(false)}
                          className={`
                            inline-flex items-center gap-1 text-xs font-medium transition-colors
                            ${isActive
                              ? "text-[var(--color-accent)]"
                              : "text-[var(--color-dark)] hover:text-[var(--color-accent)]"
                            }
                          `}
                        >
                          {isActive ? "Sedang dilihat" : "Lihat produk"}
                          <span>→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
}
