import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import CategorySidebar from "@/components/CategorySidebar";
import {
  categories,
  products,
  getCategoryBySlug,
  getProductsByCategory,
} from "@/data/products";

export async function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(slug);

  // Hitung jumlah produk per kategori untuk sidebar
  const productCounts = categories.reduce((acc, cat) => {
    acc[cat.slug] = products.filter((p) => p.category === cat.slug).length;
    return acc;
  }, {});

  return (
    <>
      <Navbar />
      <main>
        {/* ─── HEADER KATEGORI ───────────────────────────────── */}
        <section className="relative bg-[var(--color-dark)] py-16 md:py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[var(--color-accent)] blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[var(--color-accent-light)] blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-8 py-16 md:px-12 md:py-20 lg:px-16">
            <div className="flex items-center gap-2 text-sm text-[var(--color-warm)] mb-4">
              <Link
                href="/"
                className="hover:text-[var(--color-accent-light)] transition-colors"
              >
                Beranda
              </Link>
              <span>/</span>
              <span className="text-[var(--color-accent-light)]">
                {category.name}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {category.icon} {category.name}
            </h1>
            <p className="text-[var(--color-warm)] max-w-2xl leading-relaxed">
              {category.description}
            </p>
          </div>
        </section>

        {/* ─── KONTEN: SIDEBAR + PRODUK ─────────────────────── */}
        <section className="max-w-7xl mx-auto px-8 py-20 md:px-12 md:py-24 lg:px-16">
          <div className="flex flex-col md:flex-row gap-10 md:gap-14">
            {/* Sidebar Kategori */}
            <div className="md:w-80 flex-shrink-0">
              <CategorySidebar
                categories={categories}
                activeSlug={slug}
                productCounts={productCounts}
              />
            </div>

            {/* Area Produk */}
            <div className="flex-1 min-w-0">
              {categoryProducts.length > 0 ? (
                <>
                  <div className="flex items-end justify-between mb-8">
                    <div>
                      <p className="text-sm tracking-widest uppercase text-[var(--color-accent)] mb-2">
                        Katalog
                      </p>
                      <h2 className="text-xl md:text-2xl font-bold text-[var(--color-dark)]">
                        {categoryProducts.length} Produk Tersedia
                      </h2>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                    {categoryProducts.map((product, i) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        index={i}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-20 bg-white rounded-2xl border border-[var(--color-warm)]">
                  <div className="text-6xl mb-4">📭</div>
                  <h2 className="text-2xl font-bold text-[var(--color-dark)] mb-2">
                    Belum Ada Produk
                  </h2>
                  <p className="text-[var(--color-muted)] mb-6 max-w-lg mx-auto">
                    Kategori ini belum memiliki produk. Silakan jelajahi
                    kategori lain.
                  </p>
                  <Link
                    href="/"
                    className="inline-block px-6 py-3 bg-[var(--color-accent)] text-white rounded-full font-medium hover:bg-[var(--color-accent-light)] transition-colors"
                  >
                    Kembali ke Beranda
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ─── CTA ──────────────────────────────────────────────── */}
        <section className="bg-[var(--color-warm)] py-20 md:py-24">
          <div className="max-w-4xl mx-auto px-8 md:px-12 text-center">
            <h2 className="text-3xl font-bold text-[var(--color-dark)] mb-4">
              Butuh Bantuan Memilih {category.name}?
            </h2>
            <p className="text-[var(--color-muted)] mb-8 leading-relaxed">
              Tim konsultan kami siap membantu Anda menemukan produk yang paling
              sesuai dengan kebutuhan dan gaya hunian Anda.
            </p>
            <a
              href={`https://wa.me/6281234567890?text=Halo%20Furnico,%20saya%20ingin%20konsultasi%20tentang%20produk%20kategori%20${encodeURIComponent(
                category.name
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-white rounded-full font-medium hover:bg-[var(--color-accent-light)] transition-colors"
            >
              💬 Konsultasi Gratis
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
