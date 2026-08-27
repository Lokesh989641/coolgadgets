"use client";

import { useState } from "react";
import { products } from "../data/products";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    `${product.name} ${product.category}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="/" className="text-2xl font-black">
            Cool<span className="text-blue-600">Gadgets</span>
          </a>

          <nav className="hidden gap-7 text-sm font-semibold md:flex">
            <a href="/" className="hover:text-blue-600">
              Home
            </a>
            <a href="#categories" className="hover:text-blue-600">
              Categories
            </a>
            <a href="#trending" className="hover:text-blue-600">
              Trending
            </a>
          </nav>
        </div>
      </header>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 text-center">
          <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-600">
            Discover cool finds
          </span>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            Products you
            <span className="text-blue-600"> didn't know you needed.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Discover useful gadgets, clever accessories and unique products
            worth checking out.
          </p>

          <div className="mx-auto mt-8 flex max-w-2xl overflow-hidden rounded-2xl border bg-white shadow-sm">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search gadgets..."
              className="min-w-0 flex-1 px-5 py-4 outline-none"
            />

            <button className="bg-blue-600 px-7 font-bold text-white">
              Search
            </button>
          </div>
        </div>
      </section>

      <section id="categories" className="mx-auto max-w-7xl px-5 py-14">
        <h2 className="text-2xl font-black">Browse Categories</h2>

        <div className="mt-7 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            ["📱", "Phone Gadgets"],
            ["💻", "Desk Gadgets"],
            ["🎮", "Gaming"],
            ["🚗", "Car Gadgets"],
            ["🏠", "Home Gadgets"],
            ["🎒", "Student Essentials"],
            ["🎁", "Unique Gifts"],
            ["✈️", "Travel Gadgets"],
          ].map(([icon, name]) => (
            <button
              key={name}
              onClick={() => setSearch(name)}
              className="rounded-2xl border bg-white p-6 text-left transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-3xl">{icon}</div>
              <div className="mt-3 font-bold">{name}</div>
            </button>
          ))}
        </div>
      </section>

      <section id="trending" className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-black">Trending Finds</h2>
              <p className="mt-2 text-gray-600">
                Products worth checking out.
              </p>
            </div>

            {search && (
              <button
                onClick={() => setSearch("")}
                className="text-sm font-semibold text-blue-600"
              >
                Clear search
              </button>
            )}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="py-20 text-center text-gray-500">
              No gadgets found.
            </div>
          ) : (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <article
                  key={product.id}
                  className="overflow-hidden rounded-2xl border bg-white transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <a href={`/products/${product.id}`}>
                    <div className="h-64 overflow-hidden bg-gray-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition duration-300 hover:scale-105"
                      />
                    </div>
                  </a>

                  <div className="p-5">
                    <span className="text-xs font-bold text-blue-600">
                      {product.category}
                    </span>

                    <a href={`/products/${product.id}`}>
                      <h3 className="mt-2 text-lg font-bold hover:text-blue-600">
                        {product.name}
                      </h3>
                    </a>

                    <div className="mt-2 text-sm">
                      ⭐ {product.rating}
                    </div>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      {product.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-xl font-black">
                        {product.price}
                      </span>

                      <a
                        href={`/products/${product.id}`}
                        className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-blue-700"
                      >
                        View Product
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <footer className="border-t bg-gray-50">
        <div className="mx-auto max-w-7xl px-5 py-10 text-center text-sm text-gray-500">
          © 2026 CoolGadgets. Product links may earn us a commission.
        </div>
      </footer>
    </main>
  );
}