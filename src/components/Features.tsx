"use client";

import { Card, CardContent } from "./ui/card";
import { Zap, Shield, Rocket } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-8 h-8 text-blue-600" />,
    title: "Rápido y eficiente",
    description: "Optimizamos procesos para que logres resultados inmediatos.",
  },
  {
    icon: <Shield className="w-8 h-8 text-blue-600" />,
    title: "Seguro",
    description: "Protegemos tus datos y garantizamos la confianza de tus clientes.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-blue-600" />,
    title: "Escalable",
    description: "Creamos soluciones que crecen junto con tu negocio.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">¿Por qué elegirnos?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <Card key={i} className="shadow-lg hover:shadow-xl transition rounded-2xl">
              <CardContent className="p-6 flex flex-col items-center">
                {f.icon}
                <h3 className="text-xl font-semibold mt-4">{f.title}</h3>
                <p className="text-gray-600 mt-2">{f.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
