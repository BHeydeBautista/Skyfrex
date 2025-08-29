"use client";

import { motion } from "framer-motion";
import { Button } from "../components/ui/button";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] text-white py-28 overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]"></div>

      <div className="relative container mx-auto text-center px-6">

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-blue-500 font-bold tracking-wide text-lg mb-4"
        >
          DESDE 2025
        </motion.p>


        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
        >
          HAZ CRECER Y MONETIZA <br />
          <span className="text-white">TU TRADING DEMO</span>
        </motion.h1>


        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-10"
        >
          Domina tus habilidades de trading en nuestra plataforma simulada. 
          Mejora tu estrategia en una cuenta{" "}
          <span className="text-blue-400 font-semibold">Skyfrex Demo</span> 
          con hasta <strong>$200,000</strong> y obtén recompensas de hasta el{" "}
          <strong>90%</strong> de tus beneficios simulados.
        </motion.p>


        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-6"
        >
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg shadow-blue-500/30">
            Skyfrex Challenge
          </Button>
          <Button
            variant="outline"
            className="border-2 border-gray-400 hover:border-blue-500 text-gray-200 hover:text-blue-400 px-8 py-4 text-lg font-semibold rounded-lg"
          >
            Free Trial
          </Button>
        </motion.div>


        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center gap-10 opacity-80"
        >
          <span className="text-gray-400 text-sm font-medium">
            ⚡ 4 Plataformas de Trading
          </span>
          <span className="text-gray-400 text-sm font-medium">
            🎓 Skyfrex Academy
          </span>
          <span className="text-gray-400 text-sm font-medium">
            📊 Quantlane
          </span>
          <span className="text-gray-400 text-sm font-medium">
            🧠 Performance Coaches
          </span>
        </motion.div>
      </div>
    </section>
  );
}
