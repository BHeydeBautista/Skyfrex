"use client";

import { tradingObjectives } from "../data/tradingObjectives";

export default function TradingObjectives() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Objetivos de Trading
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Domina los principios de gestión de riesgos y avanza paso a paso en el desafío Skyfrex. 
          Cada objetivo está diseñado para ayudarte a desarrollar disciplina y hábitos sostenibles.
        </p>

        {/* Tabla estilizada */}
        <div className="overflow-x-auto rounded-2xl shadow-lg bg-white">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-purple-600 to-blue-500 text-white text-left">
                <th className="p-4">Objetivo</th>
                <th className="p-4">Paso 1 <br /> Challenge</th>
                <th className="p-4">Paso 2 <br /> Verificación</th>
                <th className="p-4">Paso 3 <br /> Trader Skyfrex</th>
              </tr>
            </thead>
            <tbody>
              {tradingObjectives.map((obj, idx) => (
                <tr
                  key={obj.id}
                  className={`text-gray-700 ${
                    idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="p-4 font-medium">{obj.label}</td>
                  <td className="p-4">{obj.step1}</td>
                  <td className="p-4">{obj.step2}</td>
                  <td className="p-4">{obj.step3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold shadow-md hover:shadow-lg transition">
            Iniciar Skyfrex Challenge
          </button>
        </div>
      </div>
    </section>
  );
}
