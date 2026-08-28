"use client";

import Link from "next/link";
import { useState } from "react";
import { products } from "../data/products";

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(products.map((product) => product.category))),
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link href="/" className="text-2xl font-black">
            Cool<span className="text-blue-600">Gadgets</span>
          </Link>

          <span className="hidden text-sm text-gray-500 sm:block">
            Cool finds. Useful gadgets.
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="mx-auto max-w-7xl px-5 py-16 text-white md:py-20">
          <p className="font-bold uppercase tracking-wider text-blue-200">
            Welcome to CoolGadgets
          </p>

          <h1 className="mt-3 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
            Discover gadgets worth checking out.
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-blue-100">
            Interesting products, useful accessories and cool finds from
            Amazon — all in one place.
          </p>

          <div className="mt-8 max-w-2xl">
            <input
              type="search"
              placeholder="Search gadgets..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border-0 bg-white px-5 py-4 text-gray-900 shadow-lg outline-none ring-0 placeholder:text-gray-400"
            />
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-black text-gray-900">
              Featured Gadgets
            </h2>

            <p className="mt-1 text-gray-500">
              {filteredProducts.length} products to explore
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                  category === item
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="mt-10 rounded-2xl border bg-white p-12 text-center">
            <h3 className="text-xl font-bold">No gadgets found</h3>
            <p className="mt-2 text-gray-500">
              Try a different search term.
            </p>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-64 items-center justify-center bg-gray-100 p-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <span className="text-xs font-bold uppercase tracking-wide text-blue-600">
                    {product.category}
                  </span>

                  <h3 className="mt-2 line-clamp-2 min-h-14 text-lg font-bold text-gray-900">
                    {product.name}
                  </h3>

                  {product.rating > 0 && (
                    <div className="mt-3 text-sm">
                      <span className="text-yellow-500">★★★★★</span>
                      <span className="ml-2 font-semibold text-gray-600">
                        {product.rating}
                      </span>
                    </div>
                  )}

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-black text-gray-900">
                      {product.price}
                    </span>

                    <span className="rounded-lg bg-orange-500 px-3 py-2 text-sm font-bold text-white">
                      View
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Affiliate disclosure */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-5 py-8 text-center text-xs leading-5 text-gray-400">
          As an Amazon Associate I earn from qualifying purchases. Prices and
          availability may change on Amazon.
        </div>
      </footer>
    </main>
  );
}