"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { products, type Product } from "../data/products";

type HomeFeedProps = {
  products: Product[];
};

const categories = [
  {
    name: "Mobile",
    icon: "📱",
    slug: "Mobile%20Accessories",
  },
  {
    name: "Computer",
    icon: "💻",
    slug: "Computer%20Accessories",
  },
  {
    name: "Home",
    icon: "🏠",
    slug: "Home%20%26%20Kitchen",
  },
  {
    name: "Travel",
    icon: "✈️",
    slug: "Travel",
  },
  {
    name: "Stationery",
    icon: "✏️",
    slug: "Stationery",
  },
];

const sections = [
  {
    title: "Fresh Finds",
    subtitle: "New things worth discovering",
  },
  {
    title: "Mobile Essentials",
    subtitle: "Useful upgrades for your phone",
  },
  {
    title: "Desk & Tech",
    subtitle: "Make your setup smarter",
  },
  {
    title: "Smart Home Finds",
    subtitle: "Small things that make a difference",
  },
];

function shuffle<T>(array: T[]) {
  return [...array].sort(() => Math.random() - 0.5);
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="home-product-card"
    >
      <div className="home-product-image">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
        />

        {product.rating >= 4.2 && (
          <span className="home-product-badge">
            DEAL
          </span>
        )}
      </div>

      <div className="home-product-info">
        <div className="home-product-category">
          {product.category}
        </div>

        <h3>{product.name}</h3>

        <div className="home-product-rating">
          <span>★</span>
          <span>{product.rating}</span>
        </div>

        <div className="home-product-bottom">
          <strong>{product.price}</strong>

          <span className="home-product-arrow">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}

function ProductCarousel({
  items,
}: {
  items: Product[];
}) {
  const [page, setPage] = useState(0);

  /*
    4 products per page.

    Mobile:
    2 columns × 2 rows = 4 products

    Desktop:
    4 columns × 1 row = 4 products
  */
  const pages = useMemo(() => {
    const result: Product[][] = [];

    for (let i = 0; i < items.length; i += 4) {
      result.push(items.slice(i, i + 4));
    }

    return result;
  }, [items]);

  useEffect(() => {
    if (pages.length <= 1) return;

    const timer = setInterval(() => {
      setPage((current) => (current + 1) % pages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [pages.length]);

  if (!pages.length) return null;

  return (
    <div className="home-carousel">
      <div
        className="home-carousel-track"
        style={{
          transform: `translateX(-${page * 100}%)`,
        }}
      >
        {pages.map((pageProducts, index) => (
          <div
            key={index}
            className="home-carousel-page"
          >
            {pageProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        ))}
      </div>

      {pages.length > 1 && (
        <div className="home-carousel-controls">
          <button
            type="button"
            onClick={() =>
              setPage(
                (page - 1 + pages.length) %
                  pages.length
              )
            }
            aria-label="Previous products"
          >
            ←
          </button>

          <div className="home-carousel-dots">
            {pages.map((_, index) => (
              <button
                key={index}
                type="button"
                className={
                  index === page
                    ? "active"
                    : ""
                }
                onClick={() => setPage(index)}
                aria-label={`Show products ${index + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() =>
              setPage((page + 1) % pages.length)
            }
            aria-label="Next products"
          >
            →
          </button>
        </div>
      )}
    </div>
  );
}

function CategorySection() {
  return (
    <section className="home-category-section">
      <div className="home-section-heading">
        <div>
          <span className="home-eyebrow">
            EXPLORE
          </span>

          <h2>Shop by category</h2>
        </div>
      </div>

      <div className="home-category-scroll">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={`/category/${category.slug}`}
            className="home-category-card"
          >
            <div className="home-category-icon">
              {category.icon}
            </div>

            <span>{category.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function getSectionProducts(
  allProducts: Product[],
  title: string
) {
  const shuffled = shuffle(allProducts);

  if (title === "Mobile Essentials") {
    const filtered = shuffled.filter((product) =>
      product.category
        .toLowerCase()
        .includes("mobile")
    );

    return filtered.length >= 4
      ? filtered.slice(0, 12)
      : shuffled.slice(0, 12);
  }

  if (title === "Desk & Tech") {
    const filtered = shuffled.filter((product) =>
      product.category
        .toLowerCase()
        .includes("computer")
    );

    return filtered.length >= 4
      ? filtered.slice(0, 12)
      : shuffled.slice(0, 12);
  }

  if (title === "Smart Home Finds") {
    const filtered = shuffled.filter((product) =>
      product.category
        .toLowerCase()
        .includes("home")
    );

    return filtered.length >= 4
      ? filtered.slice(0, 12)
      : shuffled.slice(0, 12);
  }

  return shuffled.slice(0, 12);
}

export default function HomeFeed({
  products: productList,
}: HomeFeedProps) {
  const [randomProducts, setRandomProducts] =
    useState<Product[]>(productList);

  useEffect(() => {
    setRandomProducts(shuffle(productList));
  }, [productList]);

  return (
    <main className="coolgadgets-home">

      {/* SIMPLE HEADER AREA — NO BIG BLUE HERO */}

      <section className="home-intro">
        <span className="home-eyebrow">
          COOLGADGETS COLLECTION
        </span>

        <h1>
          Discover useful
          <br />
          <span>gadgets & finds.</span>
        </h1>

        <p>
          Clever accessories, interesting products
          and everyday upgrades worth discovering.
        </p>
      </section>

      {/* ONLY CATEGORY SECTION */}

      <CategorySection />

      {/* PRODUCT SECTIONS */}

      <div className="home-product-feed">
        {sections.map((section) => {
          const sectionProducts =
            getSectionProducts(
              randomProducts,
              section.title
            );

          return (
            <section
              key={section.title}
              className="home-product-section"
            >
              <div className="home-section-heading">
                <div>
                  <span className="home-eyebrow">
                    JUST FOR YOU
                  </span>

                  <h2>{section.title}</h2>

                  <p>{section.subtitle}</p>
                </div>

                <Link
                  href="/all"
                  className="home-see-all"
                >
                  →
                </Link>
              </div>

              <ProductCarousel
                items={sectionProducts}
              />
            </section>
          );
        })}
      </div>

      {/* FINAL DISCOVERY BANNER */}

      <section className="home-discovery">
        <div>
          <span className="home-eyebrow">
            KEEP EXPLORING
          </span>

          <h2>
            Find something
            <br />
            unexpectedly useful.
          </h2>

          <p>
            Browse the complete CoolGadgets
            collection.
          </p>
        </div>

        <Link href="/all">
          Explore all products →
        </Link>
      </section>

      <p className="amazon-disclosure">
        As an Amazon Associate, CoolGadgets may earn
        from qualifying purchases.
      </p>
    </main>
  );
}