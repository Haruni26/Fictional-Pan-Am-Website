"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-sky-700 md:bg-black/40 backdrop-blur md:backdrop-blur-sm">
      <div className="relative flex items-center px-6 py-3">
        {/* Logo */}
        <Link href="/" aria-label="Go to home page">
          <Image src={Logo} alt="Pan Am Logo" width={55} priority />
        </Link>

        {/* Desktop Nav */}
        <ul className="mx-auto hidden gap-9 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative font-medium text-white
                  after:absolute after:left-1/2 after:-bottom-1
                  after:h-0.5 after:w-full after:bg-white
                  after:-translate-x-1/2
                  after:scale-x-0 after:origin-center
                  after:transition-transform after:duration-300
                  hover:after:scale-x-100"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Burger Button (Mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="ml-auto md:hidden text-white"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden bg-(--background) border-t border-white/10">
          <ul className="flex flex-col gap-6 px-6 py-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-lg font-medium text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

const navLinks = [
  { label: "Booking", href: "#book" },
  { label: "Manage Trips", href: "#trips" },
  { label: "Travel Info", href: "#info" },
  { label: "Join WorldPass", href: "#worldpass" },
  { label: "Sign In", href: "#signIn" },
];
