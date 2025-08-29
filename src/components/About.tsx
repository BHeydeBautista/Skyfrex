"use client";

import Image from "next/image";
import { stats, values } from "../data/aboutData";

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
            En <span className="font-semibold text-blue-600">Skyfrex</span>{" "}
            nos especializamos en soluciones digitales a medida, ayudando a
            empresas y profesionales a crecer y adaptarse al mundo moderno.
          </p>

          <p className="text-gray-600 text-lg">
            Nuestro compromiso es ofrecer herramientas y experiencias de valor
            que potencien el desarrollo de cada cliente, apostando siempre a la
            innovación y la calidad.
          </p>

          <button className="px-6 py-3 rounded-2xl bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 transition">
            Conocer más
          </button>
        </div>

        {/* Imagen de acompañamiento */}
        <div className="relative h-80 md:h-[400px] lg:h-[450px]">
          <Image
            src="/skyfrex-logo.jpg"
            alt="Sobre nosotros"
            fill
            className="object-contain drop-shadow-xl"
          />
        </div>
      </div>

      {/* Métricas */}
      <div className="container mx-auto px-6 mt-20">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center"
            >
              <h3 className="text-3xl font-bold text-blue-600 mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Valores */}
      <div className="container mx-auto px-6 mt-20">
        <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">
          Nuestros valores
        </h3>
        <div className="grid md:grid-cols-4 gap-8">
          {values.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-blue-100 rounded-full">
                <item.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
