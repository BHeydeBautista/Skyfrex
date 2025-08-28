'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Cómo funciona', href: '#como-funciona' },
  { name: 'Planes', href: '#planes' },
  { name: 'Academy', href: '#academy' },
  { name: 'Testimonios', href: '#testimonios' },
  { name: 'Recursos', href: '#recursos' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Evita scroll al abrir menú móvil
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur-xl border-b border-purple-700/30">
      {/* línea glow inferior */}
      <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-fuchsia-500/60 via-purple-500/60 to-cyan-500/60" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/skyfrex-logo.jpg"
            alt="Skyfrex"
            width={36}
            height={36}
            className="rounded-lg"
            priority
          />
          <span className="text-xl font-extrabold tracking-wide bg-gradient-to-r from-purple-300 to-blue-300 text-transparent bg-clip-text">
            SKYFREX
          </span>
        </Link>

        {/* Navegación (desktop) */}
        <nav className="hidden md:flex items-center gap-7 text-sm">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-gray-300 hover:text-white hover:drop-shadow-[0_0_6px_rgba(168,85,247,0.9)] transition"
            >
              {l.name}
            </Link>
          ))}
        </nav>

        {/* Acciones (desktop) */}
        <div className="hidden md:flex items-center gap-5">
          <div className="text-xs text-gray-400 select-none">
            <span className="hover:text-purple-300 cursor-pointer">ES</span>
            <span className="mx-2">|</span>
            <span className="hover:text-purple-300 cursor-pointer">EN</span>
            <span className="mx-2">|</span>
            <span className="hover:text-purple-300 cursor-pointer">FR</span>
          </div>
          <Link
            href="/login"
            className="px-4 py-2 rounded-xl bg-purple-600/90 hover:bg-purple-600 font-semibold shadow-[0_0_18px_rgba(168,85,247,0.6)] transition"
          >
            Área del Cliente
          </Link>
        </div>

        {/* Toggle móvil */}
        <button
          onClick={() => setOpen((p) => !p)}
          aria-label="Abrir menú"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-purple-600/50 hover:bg-purple-600/10"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="md:hidden border-t border-purple-700/30 bg-black/95">
          <nav className="px-4 py-3 flex flex-col gap-3">
            {navLinks.map((l) => (
              <Link
                onClick={() => setOpen(false)}
                key={l.href}
                href={l.href}
                className="py-2 text-gray-200 hover:text-white"
              >
                {l.name}
              </Link>
            ))}

            <div className="mt-2 flex items-center gap-3 text-sm text-gray-400 select-none">
              <span className="hover:text-purple-300 cursor-pointer">ES</span>
              <span>|</span>
              <span className="hover:text-purple-300 cursor-pointer">EN</span>
              <span>|</span>
              <span className="hover:text-purple-300 cursor-pointer">FR</span>
            </div>

            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center px-4 py-2 rounded-xl bg-purple-600/90 hover:bg-purple-600 font-semibold shadow-[0_0_18px_rgba(168,85,247,0.6)]"
            >
              Área del Cliente
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
