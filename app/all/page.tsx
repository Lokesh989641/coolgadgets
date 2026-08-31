import Link from "next/link";
import ProductSearch from "../../components/ProductSearch";
import { products } from "../../data/products";

export default function AllProductsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto max-w-7xl px-5 py-10 md:py-14">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
            CoolGadgets Collection
          </p>

          <h1 className="mt-2 text-4xl font-black text-gray-900 md:text-5xl">
            All Products
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-gray-500">
            Explore every gadget, accessory and interesting find available on
            CoolGadgets.
          </p>

          <Link
            href="/"
            className="mt-5 inline-block text-sm font-bold text-blue-600 hover:text-blue-700"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Search + Products */}
        <div className="mt-10">
          <ProductSearch products={products} />
        </div>

        {/* Affiliate disclosure */}
        <div className="mt-14 rounded-2xl border bg-white p-6 text-center">
          <p className="text-xs leading-5 text-gray-400">
            As an Amazon Associate I earn from qualifying purchases. Prices
            and availability may change on Amazon.
          </p>
        </div>
      </section>
    </main>
  );
}