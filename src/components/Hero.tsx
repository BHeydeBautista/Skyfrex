"use client";

import { Button } from "../components/ui/button";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] text-white py-28 overflow-hidden">
      {/* Overlay con degradado futurista */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(138,43,226,0.15),transparent_70%)]"></div>
      
      <div className="relative container mx-auto text-center px-6">
        <p className="text-blue-400 font-semibold tracking-wide text-lg mb-4">
          DESDE 2025
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          HAZ CRECER Y MONETIZA <br />
          <span className="text-purple-500 drop-shadow-lg">TU TRADING DEMO</span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-10">
          Domina tus habilidades de trading en nuestra plataforma simulada. 
          Mejora tu estrategia en una cuenta <span className="text-purple-400">Skyfrex Demo</span> 
          con hasta <strong>$200,000</strong> y gana recompensas de hasta el <strong>90%</strong> 
          de tus beneficios simulados.
        </p>

        <div className="flex justify-center gap-6">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 text-lg rounded-xl shadow-lg shadow-purple-500/30">
            Skyfrex Challenge
          </Button>
          <Button
            variant="outline"
            className="border-2 border-gray-400 hover:border-purple-500 text-gray-200 hover:text-purple-400 px-6 py-3 text-lg rounded-xl"
          >
            Free Trial
          </Button>
        </div>

        {/* Pequeña sección de logos/partners como la imagen */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-70">
          <span className="text-gray-400 text-sm">🚀 4 Plataformas de Trading</span>
          <span className="text-gray-400 text-sm">🎓 Skyfrex Academy</span>
          <span className="text-gray-400 text-sm">📊 Quantlane</span>
          <span className="text-gray-400 text-sm">🧠 Performance Coaches</span>
        </div>
      </div>
    </section>
  );
}
