"use client"

import { useEffect, useRef, useState } from "react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 bg-accent/30">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground mb-12 md:mb-16">
            About the School
          </h2>

          <div className="space-y-8 text-base md:text-lg text-foreground/80 leading-relaxed">
            <p>
              Saint Xavier's Senior Secondary School stands as an institution dedicated to providing quality education
              that shapes both mind and character. Located in Manasar, Nagaur District, we serve the educational needs
              of families across villages, suburbs, and nearby urban areas.
            </p>

            <p>
              Our approach to education is grounded in discipline, structured learning, and a deep sense of
              responsibility toward each student. We believe that true education extends beyond textbooks—it cultivates
              critical thinking, moral integrity, and a commitment to service.
            </p>

            <p>
              As a Hindi and English medium senior secondary school, we prepare students for academic success while
              nurturing their personal development. Our boarding facility provides a safe, supportive environment where
              students from diverse backgrounds come together in pursuit of knowledge and growth.
            </p>

            <p>
              We are committed to serving our community with excellence, honesty, and an unwavering dedication to the
              educational and personal development of every child in our care.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
