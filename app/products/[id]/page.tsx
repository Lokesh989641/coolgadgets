import { notFound } from "next/navigation";
import { products } from "../../../data/products";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
          <a href="/" className="text-2xl font-black">
            Cool<span className="text-blue-600">Gadgets</span>
          </a>

          <a
            href="/"
            className="font-semibold text-gray-600 hover:text-blue-600"
          >
            ← Back
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-10">
        <div className="grid overflow-hidden rounded-3xl border bg-white shadow-sm md:grid-cols-2">
          <div className="flex h-[420px] items-center justify-center bg-gray-100 p-8 md:h-[600px]">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>

          <div className="p-8 md:p-12">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-bold text-blue-600">
              {product.category}
            </span>

            <h1 className="mt-5 text-3xl font-black leading-tight md:text-4xl">
              {product.name}
            </h1>

            <div className="mt-5 flex items-center gap-2">
              <span className="text-yellow-500">★★★★★</span>
              <span className="font-semibold">{product.rating}</span>
              <span className="text-gray-500">Amazon rating</span>
            </div>

            <div className="mt-8 border-y py-6">
              <p className="text-sm text-gray-500">Current price</p>
              <p className="mt-1 text-4xl font-black">{product.price}</p>
            </div>

            <p className="mt-7 leading-7 text-gray-600">
              {product.description}
            </p>

            <a
              href={product.affiliateUrl}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="mt-8 block rounded-xl bg-orange-500 px-6 py-4 text-center text-lg font-black text-white transition hover:bg-orange-600"
            >
              🛒 Check Price on Amazon
            </a>

            <div className="mt-6 rounded-xl bg-gray-50 p-4 text-sm text-gray-500">
              <p>✓ Price checked from Amazon</p>
              <p className="mt-1">✓ Secure purchase on Amazon</p>
              <p className="mt-1">✓ Price and availability may change</p>
            </div>

            <p className="mt-6 text-xs leading-5 text-gray-400">
              As an Amazon Associate I earn from qualifying purchases.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}