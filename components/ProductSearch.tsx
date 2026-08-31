"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Product } from "../data/products";

type ProductSearchProps = {
  products: Product[];
};

export default function ProductSearch({
  products,
}: ProductSearchProps) {
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return products;
    }

    return products.filter((product) => {
      return (
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
      );
    });
  }, [search, products]);

  return (
    <div>
      {/* Search box */}
      <div className="mx-auto max-w-2xl">
        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-xl">
            🔎
          </span>

          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search gadgets, accessories, kitchen products..."
            className="w-full rounded-2xl border bg-white py-4 pl-12 pr-5 text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />
        </div>
      </div>

      {/* Result count */}
      <div className="mt-6">
        <p className="text-sm font-semibold text-gray-500">
          {search.trim()
            ? `${filteredProducts.length} ${
                filteredProducts.length === 1 ? "product" : "products"
              } found for "${search}"`
            : `${filteredProducts.length} products`}
        </p>
      </div>

      {/* Products */}
      {filteredProducts.length > 0 ? (
        <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

                <h2 className="mt-2 line-clamp-2 min-h-14 text-lg font-bold text-gray-900">
                  {product.name}
                </h2>

                {product.rating > 0 && (
                  <div className="mt-3 flex items-center gap-2 text-sm">
                    <span className="text-yellow-500">★★★★★</span>

                    <span className="font-semibold text-gray-600">
                      {product.rating}
                    </span>
                  </div>
                )}

                <div className="mt-4 flex items-center justify-between">
                  <span className="font-black text-gray-900">
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
      ) : (
        <div className="mt-8 rounded-2xl border bg-white px-6 py-14 text-center">
          <div className="text-5xl">🔍</div>

          <h2 className="mt-4 text-xl font-black text-gray-900">
            No products found
          </h2>

          <p className="mt-2 text-gray-500">
            Try another search term such as "mouse", "lamp", "kitchen" or
            "Spider-Man".
          </p>

          <button
            type="button"
            onClick={() => setSearch("")}
            className="mt-5 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-blue-700"
          >
            Show All Products
          </button>
        </div>
      )}
    </div>
  );
}