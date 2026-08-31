import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "../../../data/products";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const baseUrl = "https://coolgadgets-mu.vercel.app";

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return {
      title: "Product Not Found | CoolGadgets",
      description: "The requested product could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const productUrl = `${baseUrl}/products/${product.id}`;
  const imageUrl = `${baseUrl}${product.image}`;

  return {
    title: `${product.name} | CoolGadgets`,
    description: product.description,

    keywords: [
      product.name,
      product.category,
      "CoolGadgets",
      "cool products",
      "useful products",
      "Amazon products",
      "product recommendations",
    ],

    alternates: {
      canonical: productUrl,
    },

    openGraph: {
      type: "website",
      title: `${product.name} | CoolGadgets`,
      description: product.description,
      url: productUrl,
      siteName: "CoolGadgets",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 1200,
          alt: product.name,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${product.name} | CoolGadgets`,
      description: product.description,
      images: [imageUrl],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { id } = await params;

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f6f8fc]">
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-5 md:py-12">
        <div className="grid overflow-hidden rounded-3xl border border-[#e2e8f0] bg-white shadow-sm md:grid-cols-2">

          {/* Product Image */}
          <div className="flex min-h-[400px] items-center justify-center bg-[#f8fafc] p-8 md:min-h-[600px]">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-[500px] w-full object-contain"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center p-7 md:p-12">

            <p className="text-sm font-extrabold uppercase tracking-[0.15em] text-[#2563eb]">
              {product.category}
            </p>

            <h1 className="mt-3 text-3xl font-black leading-tight tracking-[-0.03em] text-[#111827] md:text-4xl">
              {product.name}
            </h1>

            {product.rating > 0 && (
              <div className="mt-4 flex items-center gap-2">
                <span className="text-lg tracking-wide text-amber-500">
                  ★★★★★
                </span>

                <span className="font-bold text-[#64748b]">
                  {product.rating}/5
                </span>
              </div>
            )}

            <div className="mt-6">
              <span className="text-sm font-semibold text-[#64748b]">
                Current listed price
              </span>

              <p className="mt-1 text-3xl font-black text-[#111827]">
                {product.price}
              </p>
            </div>

            <p className="mt-6 text-base leading-7 text-[#64748b]">
              {product.description}
            </p>

            <a
              href={product.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#f97316] px-6 py-4 text-lg font-black text-white shadow-md transition hover:bg-[#ea580c] hover:shadow-lg"
            >
              Check Price on Amazon →
            </a>

            <p className="mt-4 text-center text-xs leading-5 text-[#94a3b8]">
              You will be redirected to Amazon to view the latest price,
              availability and purchase options.
            </p>

            <div className="mt-8 border-t border-[#e2e8f0] pt-6">
              <p className="text-xs leading-5 text-[#94a3b8]">
                As an Amazon Associate I earn from qualifying purchases.
                Product prices and availability may change on Amazon.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}