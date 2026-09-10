"use client";

import Link from "next/link";

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
    <>
      <header className="cg-navbar">
        <div className="cg-navbar-inner">

          <Link href="/" className="cg-logo">
            <div className="cg-logo-icon">
              ⚡
            </div>

            <div className="cg-logo-text">
              <strong>
                Cool<span style={{ color: "#2563eb" }}>
                  Gadgets
                </span>
              </strong>

              <span>SMART FINDS</span>
            </div>
          </Link>

          {/* DESKTOP SEARCH */}

          <form
            action="/all"
            method="GET"
            className="cg-navbar-search cg-search-desktop"
          >
            <SearchIcon />

            <input
              type="search"
              name="q"
              placeholder="Search gadgets, accessories & more..."
              aria-label="Search products"
            />

            <button
              type="submit"
              aria-label="Search"
            >
              <SearchIcon />
            </button>
          </form>

          <button
            type="button"
            className="cg-menu-button"
            aria-label="Menu"
          >
            ☰
          </button>
        </div>

        {/* MOBILE SEARCH */}

        <div className="cg-search-mobile">
          <form
            action="/all"
            method="GET"
            className="cg-navbar-search"
          >
            <SearchIcon />

            <input
              type="search"
              name="q"
              placeholder="Search gadgets..."
              aria-label="Search products"
            />

            <button
              type="submit"
              aria-label="Search"
            >
              <SearchIcon />
            </button>
          </form>
        </div>
      </header>

      {/* MOBILE BOTTOM NAV */}

      <nav className="cg-mobile-bottom-nav">

        <Link href="/">
          <span>⌂</span>
          <small>Home</small>
        </Link>

        <Link href="/all">
          <span>▦</span>
          <small>Discover</small>
        </Link>

        <Link href="/category/Mobile%20Accessories">
          <span>📱</span>
          <small>Mobile</small>
        </Link>

        <Link href="/category/Home%20%26%20Kitchen">
          <span>🏠</span>
          <small>Home</small>
        </Link>

      </nav>
    </>
  );
}