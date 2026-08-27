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

          <a href="/" className="font-semibold text-gray-600 hover:text-blue-600">
            ← Back
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid overflow-hidden rounded-3xl border bg-white shadow-sm md:grid-cols-2">
          <div className="h-96 bg-gray-100 md:h-[550px]">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center p-8 md:p-12">
            <p className="font-bold text-blue-600">{product.category}</p>

            <h1 className="mt-3 text-3xl font-black md:text-4xl">
              {product.name}
            </h1>

            <p className="mt-4">⭐ {product.rating} / 5</p>

            <p className="mt-6 leading-7 text-gray-600">
              {product.description}
            </p>

            <p className="mt-8 text-3xl font-black">{product.price}</p>

            <a
              href={product.affiliateUrl}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="mt-7 rounded-xl bg-blue-600 px-6 py-4 text-center font-bold text-white hover:bg-blue-700"
            >
              Check Price
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}