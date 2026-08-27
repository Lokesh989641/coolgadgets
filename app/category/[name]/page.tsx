import { products } from "../../../data/products";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  const categoryName = decodeURIComponent(name);

  const categoryProducts = products.filter(
    (product) =>
      product.category.toLowerCase() === categoryName.toLowerCase()
  );

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
            ← Home
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-12">
        <h1 className="text-3xl font-black md:text-4xl">
          {categoryName}
        </h1>

        <p className="mt-2 text-gray-600">
          Discover our {categoryName.toLowerCase()} picks.
        </p>

        {categoryProducts.length === 0 ? (
          <div className="mt-16 rounded-2xl bg-white p-10 text-center">
            <p className="text-gray-500">
              No products in this category yet.
            </p>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categoryProducts.map((product) => (
              <article
                key={product.id}
                className="overflow-hidden rounded-2xl border bg-white shadow-sm"
              >
                <a href={`/products/${product.id}`}>
                  <div className="h-64 bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </a>

                <div className="p-5">
                  <p className="text-xs font-bold text-blue-600">
                    {product.category}
                  </p>

                  <h2 className="mt-2 text-lg font-bold">
                    {product.name}
                  </h2>

                  <p className="mt-2">⭐ {product.rating}</p>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xl font-black">
                      {product.price}
                    </span>

                    <a
                      href={`/products/${product.id}`}
                      className="rounded-xl bg-blue-600 px-4 py-2 font-bold text-white"
                    >
                      View
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}