import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowWeWork from "./components/HowWeWork";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Team from "./components/Team";

function App() {
  return (
    <main className="bg-[#0a0a0a] text-white font-sans">
      <Navbar />
      <Hero />
      <Services />
      <HowWeWork />
      <Portfolio />
      <Pricing />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
