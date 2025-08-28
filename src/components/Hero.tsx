"use client";

import Image from "next/image";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center h-[90vh] bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Logo */}
      <Image
        src="/skyfrex-logo.jpg"
        alt="Skyfrex Logo"
        width={150}
        height={150}
        className="mb-6 drop-shadow-lg"
      />

      {/* Slogan */}
      <h1 className="text-5xl font-bold mb-4">
        Innovación que impulsa tu futuro
      </h1>
      <p className="text-lg text-gray-300 max-w-2xl mb-6">
        Transformamos ideas en soluciones digitales con diseño moderno,
        tecnología robusta y visión estratégica.
      </p>

      {/* CTA */}
      <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg rounded-2xl shadow-xl">
        Comenzar ahora
      </Button>
    </section>
  );
}
