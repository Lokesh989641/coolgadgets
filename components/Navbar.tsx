import Link from "next/link";

const categories = [
  {
    name: "Computer Accessories",
    slug: "Computer%20Accessories",
  },
  {
    name: "Home & Kitchen",
    slug: "Home%20%26%20Kitchen",
  },
  {
    name: "Mobile Accessories",
    slug: "Mobile%20Accessories",
  },
  {
    name: "Travel",
    slug: "Travel",
  },
  {
    name: "Stationery",
    slug: "Stationery",
  },
  {
    name: "Home Decor",
    slug: "Home%20Decor",
  },
];

function LogoMark() {
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2563eb] shadow-sm shadow-blue-200">
      <svg
        width="24"
        height="24"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M13.7 2.8L6.2 13.2H11L10.1 22.2L18.8 10.8H13.5L13.7 2.8Z"
          fill="white"
        />
      </svg>
    </div>
  );
}

function SearchIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20L16.2 16.2" />
    </svg>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e2e8f0] bg-white/95 shadow-sm backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-6">

        {/* TOP ROW */}
        <div className="flex min-h-[72px] items-center gap-4">

          {/* LOGO */}
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-3"
          >
            <LogoMark />

            <div className="leading-none">
              <div className="text-[19px] font-extrabold tracking-[-0.04em] text-[#111827]">
                Cool<span className="text-[#2563eb]">Gadgets</span>
              </div>

              <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[#94a3b8]">
                Smart Finds
              </div>
            </div>
          </Link>

          {/* SEARCH */}
          <form
            action="/all"
            method="GET"
            className="relative mx-auto hidden w-full max-w-[520px] md:block"
          >
            <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#64748b]">
              <SearchIcon />
            </div>

            <input
              type="search"
              name="q"
              placeholder="Search gadgets, accessories & more..."
              className="search-input"
              aria-label="Search products"
            />

            <button
              type="submit"
              aria-label="Search"
              className="absolute right-1.5 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-[10px] bg-[#2563eb] text-white shadow-sm transition hover:bg-[#1d4ed8]"
            >
              <SearchIcon />
            </button>
          </form>

          {/* ALL PRODUCTS */}
          <div className="ml-auto shrink-0">
            <Link
              href="/all"
              className="hidden rounded-xl border border-[#dbe3ef] bg-white px-4 py-2.5 text-sm font-bold text-[#1e293b] transition hover:border-[#bfdbfe] hover:bg-[#eff6ff] hover:text-[#2563eb] sm:block"
            >
              All Products
            </Link>
          </div>
        </div>

        {/* MOBILE SEARCH */}
        <div className="pb-3 md:hidden">
          <form action="/all" method="GET" className="relative">
            <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#64748b]">
              <SearchIcon />
            </div>

            <input
              type="search"
              name="q"
              placeholder="Search gadgets..."
              className="search-input"
              aria-label="Search products"
            />

            <button
              type="submit"
              aria-label="Search"
              className="absolute right-1.5 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-[10px] bg-[#2563eb] text-white"
            >
              <SearchIcon />
            </button>
          </form>
        </div>

        {/* NAVIGATION */}
        <nav className="no-scrollbar flex gap-1 overflow-x-auto pb-3">

          {/* HOME */}
          <Link
            href="/"
            className="whitespace-nowrap rounded-full bg-[#2563eb] px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-[#1d4ed8]"
          >
            Home
          </Link>

          {/* ALL PRODUCTS */}
          <Link
            href="/all"
            className="whitespace-nowrap rounded-full border border-[#dbe3ef] bg-white px-4 py-2 text-sm font-bold text-[#334155] transition hover:border-[#bfdbfe] hover:bg-[#eff6ff] hover:text-[#2563eb]"
          >
            All Products
          </Link>

          {/* CATEGORIES */}
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/category/${category.slug}`}
              className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold text-[#475569] transition hover:bg-[#eff6ff] hover:text-[#2563eb]"
            >
              {category.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}