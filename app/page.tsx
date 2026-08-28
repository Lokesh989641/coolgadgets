import Link from "next/link";
import { products } from "../data/products";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-3xl font-black">
            Cool<span className="text-blue-600">Gadgets</span>
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="text-4xl font-black text-gray-900">
          Discover Cool Gadgets
        </h1>

        <p className="mt-3 text-gray-600">
          Interesting gadgets and useful products worth checking out.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-64 items-center justify-center bg-gray-100 p-5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="p-5">
                <p className="text-sm font-semibold text-blue-600">
                  {product.category}
                </p>

                <h2 className="mt-2 text-lg font-bold text-gray-900">
                  {product.name}
                </h2>

                <p className="mt-2 text-yellow-500">
                  ⭐ {product.rating}
                </p>

                <p className="mt-3 text-xl font-black text-gray-900">
                  {product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}