"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* LOGO */}

        <Link href="/" onClick={closeMenu} className="min-w-0">
          <div className="text-lg font-bold leading-tight text-[#6B3F2A] sm:text-xl lg:text-2xl">
            Afzal Marriage Bureau
          </div>

          <div className="hidden text-[10px] text-gray-500 sm:block">
            Connecting Hearts, Building Families
          </div>
        </Link>


        {/* DESKTOP NAVIGATION */}

        <div className="hidden items-center gap-5 lg:flex xl:gap-7">

          <NavLink href="/" text="Home" />

          <NavLink href="/about" text="About" />

          <NavLink href="/services" text="Services" />

          <NavLink href="/profiles" text="Profiles" />

          <NavLink href="/contact" text="Contact" />

          <Link
            href="/login"
            className="rounded-full border border-[#6B3F2A] px-5 py-2.5 text-sm font-medium text-[#6B3F2A] transition hover:bg-[#6B3F2A] hover:text-white"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-full bg-[#6B3F2A] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-[#573222]"
          >
            Register Free
          </Link>

        </div>


        {/* MOBILE MENU BUTTON */}

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 text-[#6B3F2A] lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <span className="text-2xl leading-none">×</span>
          ) : (
            <span className="text-2xl leading-none">☰</span>
          )}
        </button>

      </nav>


      {/* MOBILE MENU */}

      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-4 py-5 shadow-lg lg:hidden">

          <div className="mx-auto flex max-w-7xl flex-col gap-1">

            <MobileNavLink
              href="/"
              text="Home"
              onClick={closeMenu}
            />

            <MobileNavLink
              href="/about"
              text="About"
              onClick={closeMenu}
            />

            <MobileNavLink
              href="/services"
              text="Services"
              onClick={closeMenu}
            />

            <MobileNavLink
              href="/profiles"
              text="Profiles"
              onClick={closeMenu}
            />

            <MobileNavLink
              href="/contact"
              text="Contact"
              onClick={closeMenu}
            />


            {/* MOBILE BUTTONS */}

            <div className="mt-4 grid grid-cols-2 gap-3">

              <Link
                href="/login"
                onClick={closeMenu}
                className="rounded-full border border-[#6B3F2A] px-4 py-3 text-center text-sm font-medium text-[#6B3F2A]"
              >
                Login
              </Link>

              <Link
                href="/register"
                onClick={closeMenu}
                className="rounded-full bg-[#6B3F2A] px-4 py-3 text-center text-sm font-medium text-white"
              >
                Register
              </Link>

            </div>

          </div>

        </div>
      )}

    </header>
  );
}


/* Desktop navigation link */

function NavLink({
  href,
  text,
}: {
  href: string;
  text: string;
}) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-gray-700 transition hover:text-[#6B3F2A]"
    >
      {text}
    </Link>
  );
}


/* Mobile navigation link */

function MobileNavLink({
  href,
  text,
  onClick,
}: {
  href: string;
  text: string;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="w-full rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-[#FBF8F4] hover:text-[#6B3F2A]"
    >
      {text}
    </Link>
  );
}