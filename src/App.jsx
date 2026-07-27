import { DemoBar } from './components/DemoBar.jsx'
import { Header } from './components/Header.jsx'
import { Hero } from './components/Hero.jsx'
import { About } from './components/About.jsx'
import { Highlights } from './components/Highlights.jsx'
import { Menu } from './components/Menu.jsx'
import { Experience } from './components/Experience.jsx'
import { Gallery } from './components/Gallery.jsx'
import { Reviews } from './components/Reviews.jsx'
import { Visit } from './components/Visit.jsx'
import { Footer } from './components/Footer.jsx'
import './App.css'

export default function App() {
  return (
    <main>
      <DemoBar />
      <Header />
      <Hero />
      <About />
      <Highlights />
      <Menu />
      <Experience />
      <Gallery />
      <Reviews />
      <Visit />
      <Footer />
    </main>
  )
}
