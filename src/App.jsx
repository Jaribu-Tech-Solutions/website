import Nav from './components/Nav'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Services from './components/Services'
import Process from './components/Process'
import Portfolio from './components/Portfolio'
import Product from './components/Product'
import Pricing from './components/Pricing'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Services />
        <Process />
        <Portfolio />
        <Product />
        <Pricing />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
