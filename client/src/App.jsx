import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowWeWork from "./components/HowWeWork";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Product from "./components/Product";
import SamplePage from "./components/SamplePage";
import Services from "./components/Services";
import Team from "./components/Team";
import TechStack from "./components/TechStack";

function App() {
  return (
    <main className="bg-[#020202] text-white font-sans">
      <Navbar />
      <Hero />
      <TechStack />
      <Services />
      <HowWeWork />
      <Portfolio />
      <Product />
      <SamplePage />
      <Pricing />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
