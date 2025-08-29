"use client";

import { motion } from "framer-motion";
import { Button } from "../components/ui/button";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] text-white py-28 overflow-hidden">
      {/* Overlay radial */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(155,81,224,0.15),transparent_70%)]"></div>

      <div className="relative container mx-auto text-center px-6">
        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-purple-400 font-semibold tracking-wide text-lg mb-4"
        >
          DESDE 2025
        </motion.p>

        {/* Título principal */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
        >
          HAZ CRECER Y MONETIZA <br />
          <span className="bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">
            TU TRADING DEMO
          </span>
        </motion.h1>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-10"
        >
          Domina tus habilidades de trading en nuestra plataforma simulada. 
          Mejora tu estrategia en una cuenta{" "}
          <span className="text-purple-400 font-semibold">Skyfrex Demo</span> 
          con hasta <strong>$200,000</strong> y obtén recompensas de hasta el{" "}
          <strong>90%</strong> de tus beneficios simulados.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-6"
        >
          <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-purple-500/30 transition">
            Skyfrex Challenge
          </Button>
          <Button
            variant="outline"
            className="border-2 border-purple-500/50 hover:border-purple-400 text-gray-200 hover:text-purple-300 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm"
          >
            Free Trial
          </Button>
        </motion.div>

        {/* Features con efecto glass */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center gap-6"
        >
          {[
            "⚡ 4 Plataformas de Trading",
            "🎓 Skyfrex Academy",
            "📊 Quantlane",
            "🧠 Performance Coaches",
          ].map((item, i) => (
            <span
              key={i}
              className="px-4 py-2 text-gray-300 text-sm font-medium rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
