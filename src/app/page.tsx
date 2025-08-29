import Hero from "../components/Hero";
import About from "../components/About";
import Steps from "../components/Steps";
import TradingObjectives from "../components/TradingObjectives";


export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Steps />
      <TradingObjectives />
    </main>
  );
}
