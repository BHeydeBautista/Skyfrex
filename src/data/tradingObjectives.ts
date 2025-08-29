// src/data/tradingObjectives.ts

export interface TradingObjective {
  id: number;
  label: string;
  step1: string;
  step2: string;
  step3: string;
}

export const tradingObjectives: TradingObjective[] = [
  {
    id: 1,
    label: "Período de Trading",
    step1: "Ilimitado",
    step2: "Ilimitado",
    step3: "Ilimitado",
  },
  {
    id: 2,
    label: "Días mínimos de Trading",
    step1: "4 días",
    step2: "4 días",
    step3: "X",
  },
  {
    id: 3,
    label: "Pérdida Máxima Diaria",
    step1: "$500",
    step2: "$500",
    step3: "$500",
  },
  {
    id: 4,
    label: "Pérdida Máxima",
    step1: "$1,000",
    step2: "$1,000",
    step3: "$1,000",
  },
  {
    id: 5,
    label: "Objetivo de Ganancias",
    step1: "$1,000",
    step2: "$500",
    step3: "X",
  },
  {
    id: 6,
    label: "Tarifa Reembolsable",
    step1: "€89",
    step2: "Gratis",
    step3: "Reembolso",
  },
];
