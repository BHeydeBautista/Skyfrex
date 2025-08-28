"use client";

import Image from "next/image";

export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Sobre <span className="text-blue-600">nosotros</span>
          </h2>
          <p className="text-gray-600 text-lg">
            En <span className="font-semibold text-blue-600">Skyfrex</span> nos
            especializamos en brindar soluciones digitales a medida, ayudando a
            las empresas a crecer y adaptarse al mundo moderno.
          </p>
          <p className="text-gray-600 text-lg">
            Nuestro equipo está formado por profesionales apasionados en
            tecnología, diseño y estrategia digital, trabajando en conjunto para
            transformar ideas en resultados.
          </p>
          <button className="px-6 py-3 rounded-2xl bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 transition">
            Conocer más
          </button>
        </div>

        {/* Imagen */}
        <div className="relative h-80 md:h-[400px] lg:h-[450px]">
          <Image
            src="/skyfrex-logo.jpg"
            alt="Sobre nosotros"
            fill
            className="object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
