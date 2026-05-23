"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { categories } from "@/data/products";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-[var(--color-cream)] border-b border-[var(--color-warm)]">
      <div className="max-w-7xl mx-auto px-8 py-4 md:px-12 lg:px-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold font-[family-name:var(--font-playfair)] text-[var(--color-dark)] tracking-tight">
            Furni<span className="text-[var(--color-accent)]">co</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 py-0">
          <Link
            href="/"
            className={`text-sm px-5 py-2.5 rounded-lg transition-colors ${
              pathname === "/"
                ? "text-[var(--color-accent)] font-medium bg-[var(--color-warm)]"
                : "text-[var(--color-muted)] hover:text-[var(--color-accent)] hover:bg-[var(--color-warm)]"
            }`}
          >
            Beranda
          </Link>
          {categories.map((cat) => {
            const isActive = pathname === `/kategori/${cat.slug}`;
            return (
              <Link
                key={cat.slug}
                href={`/kategori/${cat.slug}`}
                className={`text-sm px-5 py-2.5 my-4 rounded-lg transition-colors ${
                  isActive
                    ? "text-[var(--color-accent)] font-medium bg-[var(--color-warm)]"
                    : "text-[var(--color-muted)] hover:text-[var(--color-accent)] hover:bg-[var(--color-warm)]"
                }`}
              >
                {cat.name}
              </Link>
            );
          })}
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-[var(--color-dark)] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-5 h-0.5 bg-current mb-1.5 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-5 h-0.5 bg-current mb-1.5 transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <div className={`w-5 h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-8 pb-8 flex flex-col gap-4 border-t border-[var(--color-warm)] pt-6 animate-fade-in">
          <Link href="/" onClick={() => setMenuOpen(false)} className="text-sm text-[var(--color-muted)]">Beranda</Link>
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/kategori/${cat.slug}`}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-[var(--color-muted)] flex items-center gap-2"
            >
              <span>{cat.icon}</span> {cat.name}
            </Link>
          ))}
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 bg-[var(--color-accent)] text-white rounded-full text-center mt-2"
          >
            Hubungi Kami
          </a>
        </div>
      )}
    </nav>
  );
}