"use client";

import { steps } from "../data/stepsData";
import { CheckCircle } from "lucide-react";

export default function Steps() {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-[#0a0015] to-black">
      <div className="container mx-auto px-6">
        {/* Título */}
        <h2 className="text-4xl font-extrabold text-center text-white mb-12">
          Muéstranos tu talento y{" "}
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            sé recompensado
          </span>
        </h2>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`relative flex flex-col bg-gradient-to-br ${step.bgColor} text-white rounded-2xl shadow-[0_0_20px_rgba(139,92,246,0.3)] p-8 hover:scale-105 transition`}
            >
              {/* Número */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-purple-300 font-bold shadow-inner">
                  {step.number}
                </div>
                <step.icon className="w-8 h-8 opacity-80" />
              </div>

              {/* Título */}
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-sm text-gray-200 mb-6">{step.description}</p>

              {/* Lista de beneficios */}
              <ul className="space-y-2 text-sm">
                {step.benefits.map((benefit, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2"
                  >
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    {benefit}
                  </li>
                ))}
              </ul>

              {/* Botón */}
              <button className="mt-6 px-5 py-2 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-700 transition">
                Más información
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
