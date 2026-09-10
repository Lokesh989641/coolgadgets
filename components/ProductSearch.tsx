"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Product } from "../data/products";

type ProductSearchProps = {
  products?: Product[];
};

export default function ProductSearch({
  products = [],
}: ProductSearchProps) {
  const [search, setSearch] = useState("");

  // Always make sure products is an array
  const safeProducts = Array.isArray(products) ? products : [];

  // Search/filter products
  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return safeProducts;
    }

    return safeProducts.filter((product) => {
      const name = product.name?.toLowerCase() || "";
      const category = product.category?.toLowerCase() || "";
      const description = product.description?.toLowerCase() || "";

      return (
        name.includes(query) ||
        category.includes(query) ||
        description.includes(query)
      );
    });
  }, [search, safeProducts]);

  return (
    <div className="w-full">
      {/* =========================
          SEARCH BOX
      ========================== */}
      <div className="mx-auto w-full max-w-3xl">
        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-xl">
            🔎
          </span>

          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search gadgets, accessories, kitchen products..."
            className="
              w-full
              rounded-2xl
              border border-gray-300
              bg-white
              py-4
              pl-12
              pr-5
              text-gray-900
              shadow-sm
              outline-none
              transition
              placeholder:text-gray-400
              focus:border-blue-500
              focus:ring-4
              focus:ring-blue-100
            "
          />
        </div>
      </div>

      {/* =========================
          RESULT COUNT
      ========================== */}
      <div className="mt-6">
        <p className="text-sm font-semibold text-gray-500">
          {search.trim()
            ? `${filteredProducts.length} ${
                filteredProducts.length === 1 ? "product" : "products"
              } found for "${search}"`
            : `${filteredProducts.length} products`}
        </p>
      </div>

      {/* =========================
          PRODUCT GRID
          MOBILE = 2
          DESKTOP = 4
      ========================== */}
      {filteredProducts.length > 0 ? (
        <div
          className="
            mt-5
            grid
            w-full
            grid-cols-2
            gap-3
            sm:gap-4
            lg:grid-cols-4
            lg:gap-5
          "
        >
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="
                group
                flex
                h-full
                min-w-0
                flex-col
                overflow-hidden
                rounded-xl
                border
                border-gray-200
                bg-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              {/* =========================
                  PRODUCT IMAGE
              ========================== */}
              <div
                className="
                  flex
                  h-40
                  w-full
                  items-center
                  justify-center
                  overflow-hidden
                  bg-gray-50
                  p-3
                  sm:h-48
                  sm:p-4
                  lg:h-52
                  lg:p-5
                "
              >
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="
                    h-full
                    w-full
                    object-contain
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                />
              </div>

              {/* =========================
                  PRODUCT INFORMATION
              ========================== */}
              <div className="flex flex-1 flex-col p-3 sm:p-4">
                {/* Category */}
                <span
                  className="
                    line-clamp-1
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-wide
                    text-blue-600
                    sm:text-xs
                  "
                >
                  {product.category}
                </span>

                {/* Product Name */}
                <h2
                  className="
                    mt-1.5
                    line-clamp-2
                    min-h-[2.75rem]
                    text-sm
                    font-bold
                    leading-5
                    text-gray-900
                    sm:text-base
                    sm:leading-6
                  "
                >
                  {product.name}
                </h2>

                {/* Rating */}
                {product.rating > 0 && (
                  <div className="mt-2 flex items-center gap-1.5">
                    <span
                      className="
                        rounded-md
                        bg-green-600
                        px-1.5
                        py-0.5
                        text-[10px]
                        font-bold
                        text-white
                        sm:px-2
                        sm:py-1
                        sm:text-xs
                      "
                    >
                      {product.rating} ★
                    </span>

                    <span className="hidden text-xs text-gray-500 sm:block">
                      Rating
                    </span>
                  </div>
                )}

                {/* Price + View Button */}
                <div
                  className="
                    mt-auto
                    flex
                    items-center
                    justify-between
                    gap-2
                    pt-3
                    sm:pt-4
                  "
                >
                  <span
                    className="
                      min-w-0
                      truncate
                      text-sm
                      font-black
                      text-gray-900
                      sm:text-lg
                    "
                  >
                    {product.price}
                  </span>

                  <span
                    className="
                      shrink-0
                      rounded-lg
                      bg-orange-500
                      px-2.5
                      py-1.5
                      text-[10px]
                      font-bold
                      text-white
                      transition
                      group-hover:bg-orange-600
                      sm:px-3
                      sm:py-2
                      sm:text-xs
                    "
                  >
                    View
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        /* =========================
           NO PRODUCTS
        ========================== */
        <div
          className="
            mt-8
            rounded-2xl
            border
            border-gray-200
            bg-white
            px-6
            py-14
            text-center
          "
        >
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
            className="
              mt-5
              rounded-lg
              bg-blue-600
              px-5
              py-2.5
              text-sm
              font-bold
              text-white
              transition
              hover:bg-blue-700
            "
          >
            Show All Products
          </button>
        </div>
      )}
    </div>
  );
}