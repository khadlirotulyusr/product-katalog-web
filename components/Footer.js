import Link from "next/link";
import { categories } from "@/data/products";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-dark)] text-[var(--color-cream)] mt-24">
      <div className="max-w-7xl mx-auto px-8 py-16 md:px-12 md:py-20 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] mb-4">
            Furni<span className="text-[var(--color-accent-light)]">co</span>
          </h3>
          <p className="text-sm text-[var(--color-warm)] leading-relaxed max-w-xs">
            Menghadirkan furniture berkualitas tinggi dengan desain modern dan material terpilih untuk hunian impian Anda.
          </p>
        </div>

        {/* Kategori */}
        <div>
          <h4 className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent-light)] mb-4">Produk</h4>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/kategori/${cat.slug}`}
                  className="text-sm text-[var(--color-warm)] hover:text-[var(--color-accent-light)] hover:underline transition-colors flex items-center gap-2"
                >
                  <span>{cat.icon}</span> {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h4 className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent-light)] mb-4">Kontak</h4>
          <ul className="space-y-2 text-sm text-[var(--color-warm)]">
            <li>📍 Jl. Furniture No. 88, Jakarta</li>
            <li>📞 (021) 1234-5678</li>
            <li>📱 0812-3456-7890 (WhatsApp)</li>
            <li>✉️ halo@furnico.id</li>
          </ul>
          <div className="flex gap-4 mt-6">
            <a href="#" className="text-[var(--color-warm)] hover:text-[var(--color-accent-light)] hover:underline transition-colors text-sm">Instagram</a>
            <a href="#" className="text-[var(--color-warm)] hover:text-[var(--color-accent-light)] hover:underline transition-colors text-sm">Facebook</a>
            <a href="#" className="text-[var(--color-warm)] hover:text-[var(--color-accent-light)] hover:underline transition-colors text-sm">TikTok</a>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--color-muted)] max-w-7xl mx-auto px-8 py-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[var(--color-muted)]">© 2026 Furnico. All rights reserved.</p>
        <p className="text-xs text-[var(--color-muted)]">Dibuat dengan ❤️ di Jakarta</p>
      </div>
    </footer>
  );
}