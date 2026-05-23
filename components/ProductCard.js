import Link from "next/link";
import SafeImage from "./SafeImage";

export default function ProductCard({ product, index = 0 }) {
  return (
    <Link
      href={`/produk/${product.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-up"
      style={{ animationDelay: `${index * 0.08}s`, opacity: 0, animationFillMode: "forwards" }}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3] bg-[var(--color-warm)]">
        <SafeImage
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full bg-[var(--color-accent)] text-white">
            {product.badge}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className="font-[family-name:var(--font-playfair)] text-base font-semibold text-[var(--color-dark)] group-hover:text-[var(--color-accent)] transition-colors leading-snug mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-[var(--color-muted)] line-clamp-2 mb-4 leading-relaxed">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-base font-bold text-[var(--color-accent)]">{product.price}</span>
          <span className="text-xs text-[var(--color-accent)] group-hover:translate-x-1 transition-transform">
            Lihat Detail →
          </span>
        </div>
      </div>
    </Link>
  );
}