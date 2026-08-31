import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "../../../data/products";

type CategoryPageProps = {
  params: Promise<{
    name: string;
  }>;
};

export default async function CategoryPage({
  params,
}: CategoryPageProps) {
  const { name } = await params;

  const categoryName = decodeURIComponent(name);

  const categoryProducts = products.filter(
    (product) =>
      product.category.toLowerCase() === categoryName.toLowerCase()
  );

  if (categoryProducts.length === 0) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f6f8fc]">
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-5 lg:px-6 lg:py-14">

        {/* HEADER */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center text-sm font-extrabold text-[#2563eb] transition hover:text-[#1d4ed8]"
          >
            ← Back to Home
          </Link>

          <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.18em] text-[#2563eb]">
            Explore Products
          </p>

          <h1 className="mt-2 text-3xl font-black tracking-[-0.035em] text-[#111827] sm:text-4xl md:text-5xl">
            {categoryName}
          </h1>

          <p className="mt-3 text-sm text-[#64748b]">
            {categoryProducts.length}{" "}
            {categoryProducts.length === 1 ? "product" : "products"} found
          </p>
        </div>

        {/* PRODUCT GRID */}
        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categoryProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="product-card group block overflow-hidden"
            >
              {/* IMAGE */}
              <div className="relative flex h-64 items-center justify-center bg-[#f8fafc] p-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                />

                <span className="absolute left-4 top-4 rounded-full border border-[#e2e8f0] bg-white px-3 py-1.5 text-[11px] font-bold text-[#64748b] shadow-sm">
                  {product.category}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h2 className="line-clamp-2 min-h-[52px] text-[16px] font-extrabold leading-6 tracking-[-0.02em] text-[#111827]">
                  {product.name}
                </h2>

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
          ))}
        </div>

        {/* AMAZON DISCLOSURE */}
        <div className="mt-12 rounded-2xl border border-[#e2e8f0] bg-white px-5 py-5 text-center">
          <p className="text-[11px] leading-5 text-[#94a3b8]">
            As an Amazon Associate I earn from qualifying purchases.
            Prices, availability and product details may change on Amazon.
          </p>
        </div>

      </section>
    </main>
  );
}