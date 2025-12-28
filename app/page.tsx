import Navigation from "@/components/navigation"

import Hero from "@/components/sections/hero"
import Trust from "@/components/sections/trust"
import Streams from "@/components/sections/streams"
import About from "@/components/sections/about"
import Academics from "@/components/sections/academics"
import Faculty from "@/components/sections/faculty"
import Facilities from "@/components/sections/facilities"
import Accessibility from "@/components/sections/accessibility"
import Gallery from "@/components/sections/gallery"
import Contact from "@/components/sections/contact"
import Footer from "@/components/sections/footer"

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Trust />
      <Streams />
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
