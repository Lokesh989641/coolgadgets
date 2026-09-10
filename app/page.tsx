import Link from "next/link";
import { products } from "../data/products";

function shuffleProducts<T>(items: T[]) {
  const copy = [...items];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

function ProductCard({
  product,
}: {
  product: (typeof products)[number];
}) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="cg-product-card group"
    >
      <div className="cg-product-image">
        <img
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="cg-product-info">
        <div className="cg-product-category">
          {product.category}
        </div>

        <h3>{product.name}</h3>

        {product.rating > 0 && (
          <div className="cg-rating">
            <span>★</span>
            <span>{product.rating}</span>
          </div>
        )}

        <div className="cg-product-bottom">
          <span className="cg-price">
            {product.price}
          </span>

          <span className="cg-view">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}

function ProductSection({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle?: string;
  items: typeof products;
}) {
  return (
    <section className="cg-section">
      <div className="cg-section-header">
        <div>
          <h2>{title}</h2>

          {subtitle && <p>{subtitle}</p>}
        </div>

        <Link href="/all" className="cg-section-arrow">
          →
        </Link>
      </div>

      <div className="cg-product-row">
        {items.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}

export default function HomePage() {
  const shuffled = shuffleProducts(products);

  const firstRow = shuffled.slice(0, 8);
  const secondRow = shuffleProducts(products).slice(0, 8);
  const thirdRow = shuffleProducts(products).slice(0, 8);
  const fourthRow = shuffleProducts(products).slice(0, 8);

  return (
    <main className="cg-home">

      {/* SIMPLE WELCOME AREA */}
      <section className="cg-welcome">
        <div>
          <span className="cg-eyebrow">
            COOLGADGETS
          </span>

          <h1>
            Discover something
            <br />
            <span>worth buying.</span>
          </h1>

          <p>
            Unique gadgets, useful accessories and
            interesting products picked for you.
          </p>
        </div>

        <Link href="/all" className="cg-main-button">
          Explore all →
        </Link>
      </section>


      {/* RANDOM PRODUCTS */}
      <ProductSection
        title="Fresh Finds"
        subtitle="New things worth discovering"
        items={firstRow}
      />

      <ProductSection
        title="Trending Now"
        subtitle="Popular picks you might like"
        items={secondRow}
      />

      <ProductSection
        title="You Might Like"
        subtitle="Interesting products picked for you"
        items={thirdRow}
      />

      <ProductSection
        title="More Cool Finds"
        subtitle="Keep discovering something new"
        items={fourthRow}
      />


      {/* VIEW ALL */}
      <section className="cg-explore">
        <h2>Want to see everything?</h2>

        <p>
          Browse the complete CoolGadgets collection.
        </p>

        <Link href="/all" className="cg-main-button">
          View all products →
        </Link>
      </section>


      {/* AMAZON DISCLOSURE */}
      <div className="cg-disclosure">
        As an Amazon Associate I earn from qualifying purchases.
        Prices, availability and product details may change on Amazon.
      </div>

    </main>
  );
}