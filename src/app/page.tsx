import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Clients from "../components/Clients";
import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
}
