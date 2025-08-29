import { ClipboardCheck, Briefcase, Award } from "lucide-react";

export const steps = [
  {
    number: "01",
    title: "Proceso de Evaluación",
    description:
      "Demuestra tus habilidades en un entorno seguro y estructurado, diseñado para evaluar tu potencial como trader.",
    benefits: [
      "Challenge inicial con objetivos claros",
      "Prueba de verificación de rendimiento",
      "Acceso a herramientas exclusivas",
    ],
    icon: ClipboardCheck,
    bgColor: "from-blue-600 to-indigo-700",
  },
  {
    number: "02",
    title: "Trader Demo Monetizado",
    description:
      "Una vez superada la evaluación, podrás operar con una cuenta demo monetizada y recibir recompensas reales.",
    benefits: [
      "Cuentas hasta $200.000 ficticias",
      "Hasta el 90% de revenue share",
      "Sesiones de performance coaching",
    ],
    icon: Briefcase,
    bgColor: "from-green-500 to-emerald-700",
  },
  {
    number: "03",
    title: "Trader Profesional",
    description:
      "Los traders con mejor rendimiento pueden unirse a programas exclusivos con contrato y beneficios avanzados.",
    benefits: [
      "Contrato con salario fijo",
      "Coaching de mentalidad y trading",
      "Condiciones de trading institucional",
    ],
    icon: Award,
    bgColor: "from-orange-500 to-red-600",
  },
];
