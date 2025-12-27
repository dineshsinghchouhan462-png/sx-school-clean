import Hero from "@/components/sections/hero"
import Trust from "@/components/sections/trust"
import About from "@/components/sections/about"
import Academics from "@/components/sections/academics"
import Faculty from "@/components/sections/faculty"
import Facilities from "@/components/sections/facilities"
import Accessibility from "@/components/sections/accessibility"
import Gallery from "@/components/sections/gallery"
import Contact from "@/components/sections/contact"
import Footer from "@/components/sections/footer"
import Navigation from "@/components/navigation"

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Trust />
      <About />
      <Academics />
      <Faculty />
      <Facilities />
      <Accessibility />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
