import Link from "next/link";
import { products } from "../data/products";

const categoryData = [
  {
    name: "Computer Accessories",
    slug: "Computer%20Accessories",
    icon: "⌨️",
    description: "Useful gear for your desk",
  },
  {
    name: "Home & Kitchen",
    slug: "Home%20%26%20Kitchen",
    icon: "🏠",
    description: "Smart finds for everyday life",
  },
  {
    name: "Mobile Accessories",
    slug: "Mobile%20Accessories",
    icon: "📱",
    description: "Accessories for your devices",
  },
  {
    name: "Travel",
    slug: "Travel",
    icon: "✈️",
    description: "Compact travel essentials",
  },
  {
    name: "Stationery",
    slug: "Stationery",
    icon: "📓",
    description: "Creative everyday essentials",
  },
  {
    name: "Home Decor",
    slug: "Home%20Decor",
    icon: "💡",
    description: "Small upgrades for your space",
  },
];

function ProductCard({
  product,
}: {
  product: (typeof products)[number];
}) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="product-card group block"
    >
      {/* IMAGE */}
      <div className="relative flex h-64 items-center justify-center bg-[#f8fafc] p-6">

        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
        />

        {/* CATEGORY */}
        <span className="absolute left-4 top-4 rounded-full border border-[#e2e8f0] bg-white px-3 py-1.5 text-[11px] font-bold text-[#64748b] shadow-sm">
          {product.category}
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-5">

        <h3 className="line-clamp-2 min-h-[52px] text-[16px] font-extrabold leading-6 tracking-[-0.02em] text-[#111827]">
          {product.name}
        </h3>

        {/* RATING */}
        {product.rating > 0 && (
          <div className="mt-3 flex items-center gap-2">
            <span className="text-sm tracking-wide text-amber-500">
              ★★★★★
            </span>

            <span className="text-xs font-bold text-[#64748b]">
              {product.rating}
            </span>
          </div>
        )}

        {/* PRICE */}
        <div className="mt-5 flex items-center justify-between border-t border-[#eef2f7] pt-4">
          <span className="text-lg font-black text-[#111827]">
            {product.price}
          </span>

          <span className="rounded-xl bg-[#2563eb] px-4 py-2 text-xs font-extrabold text-white transition group-hover:bg-[#1d4ed8]">
            View Product
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function HomePage() {
  const featuredProducts = products.slice(0, 4);

  return (
    <main className="min-h-screen bg-[#f6f8fc]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-4 pt-6 sm:px-5 lg:px-6 lg:pt-8">
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#172554] via-[#1e3a8a] to-[#2563eb] px-6 py-14 text-white shadow-xl shadow-blue-100 sm:px-10 lg:px-14 lg:py-20">

          {/* Soft background glow */}
          <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#60a5fa]/20 blur-3xl" />

          <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-[#3b82f6]/20 blur-3xl" />

          {/* Decorative ring */}
          <div className="absolute right-10 top-10 hidden h-32 w-32 rounded-full border border-white/10 lg:block" />

          <div className="relative max-w-3xl">

            {/* LABEL */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#bfdbfe]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#60a5fa]" />
              CoolGadgets
            </div>

            {/* HEADING */}
            <h1 className="text-4xl font-black leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Discover products
              <br />
              <span className="text-[#60a5fa]">
                worth knowing about.
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#dbeafe] sm:text-lg">
              Interesting gadgets, useful accessories and unique finds,
              collected in one simple place so you can discover something
              genuinely cool.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-3">

              <Link
                href="/all"
                className="rounded-xl bg-[#2563eb] px-6 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-blue-950/20 transition hover:-translate-y-0.5 hover:bg-[#3b82f6]"
              >
                Explore Products →
              </Link>

              <a
                href="#categories"
                className="rounded-xl border border-white/15 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/15"
              >
                Browse Categories
              </a>
            </div>

            {/* TRUST POINTS */}
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold text-[#bfdbfe]">
              <span>✓ Curated finds</span>
              <span>✓ Useful products</span>
              <span>✓ Amazon links</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED PRODUCTS
      ====================================================== */}

      <section
        id="featured"
        className="mx-auto max-w-7xl px-4 py-14 sm:px-5 lg:px-6 lg:py-20"
      >
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#2563eb]">
              Handpicked for you
            </p>

            <h2 className="mt-2 text-3xl font-black tracking-[-0.035em] text-[#111827] sm:text-4xl">
              Featured Finds
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-[#64748b]">
              A few interesting products from our collection that caught our
              attention.
            </p>
          </div>

          <Link
            href="/all"
            className="self-start rounded-xl border border-[#dbe3ef] bg-white px-5 py-3 text-sm font-extrabold text-[#334155] transition hover:border-[#bfdbfe] hover:bg-[#eff6ff] hover:text-[#2563eb] sm:self-auto"
          >
            View All Products →
          </Link>
        </div>

        {/* PRODUCT GRID */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>

      {/* =====================================================
          CATEGORIES
      ====================================================== */}

      <section
        id="categories"
        className="border-y border-[#e2e8f0] bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-5 lg:px-6 lg:py-20">

          <div className="text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#2563eb]">
              Explore by interest
            </p>

            <h2 className="mt-2 text-3xl font-black tracking-[-0.035em] text-[#111827] sm:text-4xl">
              Browse Categories
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#64748b]">
              Find useful products by the things you care about.
            </p>
          </div>

          {/* CATEGORY GRID */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categoryData.map((category) => (
              <Link
                key={category.name}
                href={`/category/${category.slug}`}
                className="group flex items-center gap-4 rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] p-5 transition duration-200 hover:-translate-y-1 hover:border-[#bfdbfe] hover:bg-white hover:shadow-lg hover:shadow-slate-200/50"
              >

                {/* ICON */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-2xl shadow-sm transition group-hover:bg-[#eff6ff]">
                  {category.icon}
                </div>

                {/* TEXT */}
                <div className="min-w-0">
                  <h3 className="font-extrabold text-[#111827]">
                    {category.name}
                  </h3>

                  <p className="mt-1 text-xs text-[#64748b]">
                    {category.description}
                  </p>
                </div>

                {/* ARROW */}
                <span className="ml-auto text-lg text-[#94a3b8] transition group-hover:translate-x-1 group-hover:text-[#2563eb]">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          DISCOVERY BANNER
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-5 lg:px-6 lg:py-20">
        <div className="relative overflow-hidden rounded-[24px] border border-[#dbe5f0] bg-[#eff6ff] px-6 py-10 sm:px-10">

          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#60a5fa]/10 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">

            <div className="max-w-2xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#2563eb]">
                Keep exploring
              </p>

              <h2 className="mt-2 text-2xl font-black tracking-[-0.03em] text-[#111827] sm:text-3xl">
                Looking for something cool?
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#64748b]">
                Explore the complete CoolGadgets collection and discover
                products across all our categories.
              </p>
            </div>

            <Link
              href="/all"
              className="shrink-0 rounded-xl bg-[#2563eb] px-6 py-3.5 text-sm font-extrabold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1d4ed8] hover:shadow-lg"
            >
              Explore Everything →
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          AMAZON DISCLOSURE
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-5 lg:px-6">
        <div className="rounded-2xl border border-[#e2e8f0] bg-white px-5 py-5 text-center">
          <p className="text-[11px] leading-5 text-[#94a3b8]">
            As an Amazon Associate I earn from qualifying purchases.
            Prices, availability and product details may change on Amazon.
          </p>
        </div>
      </section>

    </main>
  );
}