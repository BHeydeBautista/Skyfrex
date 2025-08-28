import Hero from "../components/Hero";
import About from "../components/About";

import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Contact />
    </main>
  );
}
