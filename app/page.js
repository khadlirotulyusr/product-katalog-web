import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { categories, products } from "@/data/products";

export default function HomePage() {
  const featured = products.filter((p) => p.badge === "Terlaris").slice(0, 4);

  return (
    <>
      <Navbar />
      <main>
        {/* ─── HERO ─────────────────────────────────────────────── */}
        <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-[var(--color-dark)]">
          {/* Background image */}
          <div className="absolute inset-0 opacity-30">
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&q=80"
              alt="Hero furniture"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Decorative line */}
          <div className="absolute left-0 top-0 h-full w-1 bg-[var(--color-accent)] opacity-60" />

          <div className="relative max-w-7xl mx-auto px-8 py-24 md:px-12 lg:px-16">
            <p className="text-sm tracking-[0.3em] uppercase text-[var(--color-accent-light)] mb-6 animate-fade-up">
              Koleksi Terbaru 2025
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight max-w-3xl mb-8 animate-fade-up delay-100">
              Furniture untuk
              <br />
              <span className="text-[var(--color-accent-light)] italic">
                Hunian Impian
              </span>
            </h1>
            <p className="text-lg text-[var(--color-warm)] max-w-xl leading-relaxed mb-12 animate-fade-up delay-200">
              Temukan koleksi furniture berkualitas tinggi — dari kursi
              ergonomis hingga tempat tidur premium — semua dirancang untuk
              kenyamanan hidup Anda.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
              <Link
                href="#kategori"
                className="px-8 py-3.5 bg-[var(--color-accent)] text-white rounded-full font-medium hover:bg-[var(--color-accent-light)] transition-colors"
              >
                Lihat Katalog
              </Link>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 mx-2 border border-white/40 text-white rounded-full font-medium hover:border-[var(--color-accent-light)] hover:text-[var(--color-accent-light)] transition-colors"
              >
                Konsultasi Gratis
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm border-t border-white/10">
            <div className="max-w-7xl mx-auto px-8 py-5 md:px-12 lg:px-16 grid grid-cols-3 gap-4 text-center">
              {[
                ["500+", "Produk"],
                ["10.000+", "Pelanggan"],
                ["5 Tahun", "Pengalaman"],
              ].map(([val, label]) => (
                <div key={label}>
                  <div className="text-xl md:text-2xl font-bold text-[var(--color-accent-light)]">
                    {val}
                  </div>
                  <div className="text-xs text-[var(--color-warm)]">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── KATEGORI ─────────────────────────────────────────── */}
        <section
          id="kategori"
          className="max-w-7xl mx-auto px-8 py-20 md:px-12 md:py-24 lg:px-16 lg:py-28 animate-fade-in"
        >
          <div className="text-center mb-14 md:mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-[var(--color-accent)] mb-3">
              Jelajahi
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-dark)]">
              Kategori Produk
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {categories.map((cat, i) => (
              <Link
                key={cat.slug}
                href={`/kategori/${cat.slug}`}
                className="group relative flex flex-col items-center justify-center gap-3 p-6 bg-white rounded-2xl border border-[var(--color-warm)] shadow-sm hover:shadow-xl hover:border-[var(--color-accent)] transition-all duration-300 hover:-translate-y-1 animate-fade-up overflow-hidden"
                style={{
                  animationDelay: `${i * 0.08}s`,
                  opacity: 0,
                  animationFillMode: "forwards",
                }}
              >
                {/* Background Hover */}
                <div className="absolute inset-0 bg-[var(--color-accent)] opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

                {/* Icon */}
                <span className="relative z-10 text-4xl transition-transform duration-300 group-hover:scale-110">
                  {cat.icon}
                </span>

                {/* Title */}
                <span className="relative z-10 text-sm font-semibold text-[var(--color-dark)] group-hover:text-[var(--color-accent)] transition-colors text-center">
                  {cat.name}
                </span>

                {/* CTA */}
                <span className="relative z-10 text-xs text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-colors">
                  Lihat semua →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ─── PRODUK TERLARIS ──────────────────────────────────── */}
        <section className="bg-white py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            <div className="flex items-end justify-between mb-14 md:mb-16">
              <div>
                <p className="text-sm tracking-widest uppercase text-[var(--color-accent)] mb-3">
                  Pilihan Utama
                </p>
                <h2 className="text-4xl font-bold text-[var(--color-dark)]">
                  Produk Terlaris
                </h2>
              </div>
              <Link
                href="/kategori/kursi"
                className="text-sm text-[var(--color-accent)] hover:underline hidden md:block"
              >
                Lihat semua →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featured.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ─── KEUNGGULAN ───────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-8 py-24 md:px-12 md:py-32 lg:px-16">
          <div className="text-center mb-14 md:mb-16">
            <p className="text-sm tracking-widest uppercase text-[var(--color-accent)] mb-3">
              Mengapa Kami
            </p>
            <h2 className="text-4xl font-bold text-[var(--color-dark)]">
              Keunggulan Furnico
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {[
              {
                icon: "🪵",
                title: "Material Premium",
                desc: "Kayu jati, rotan, dan material pilihan yang tahan lama.",
              },
              {
                icon: "🚚",
                title: "Gratis Ongkir",
                desc: "Pengiriman gratis ke seluruh Jabodetabek untuk semua pesanan.",
              },
              {
                icon: "🔧",
                title: "Pasang Gratis",
                desc: "Tim profesional kami siap merakit furniture di rumah Anda.",
              },
              {
                icon: "🛡️",
                title: "Garansi Resmi",
                desc: "Garansi 1–5 tahun untuk semua produk, tanpa syarat ribet.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="text-center p-8 rounded-2xl bg-[var(--color-warm)] animate-fade-up"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  opacity: 0,
                  animationFillMode: "forwards",
                }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-[var(--color-dark)] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── CTA BANNER ───────────────────────────────────────── */}
        <section className="bg-[var(--color-dark)] py-20 md:py-24">
          <div className="max-w-4xl mx-auto px-8 md:px-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Siap Mendekorasi{" "}
              <span className="text-[var(--color-accent-light)] italic">
                Rumah Anda?
              </span>
            </h2>
            <p className="text-[var(--color-warm)] mb-8 leading-relaxed">
              Konsultasikan kebutuhan furniture Anda dengan tim ahli kami secara
              gratis. Kami siap membantu mewujudkan ruangan impian Anda.
            </p>
            <a
              href="https://wa.me/6281234567890?text=Halo%20Furnico,%20saya%20ingin%20konsultasi%20furniture"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-white rounded-full font-medium hover:bg-[var(--color-accent-light)] transition-colors"
            >
              💬 Chat via WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
