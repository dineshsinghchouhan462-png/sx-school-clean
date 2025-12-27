"use client"

import { useEffect, useRef, useState } from "react"

export default function Academics() {
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

  const levels = [
    {
      number: "01",
      title: "Nursery",
      description: "Early childhood foundation with focus on sensory development and basic skills",
    },
    {
      number: "02",
      title: "Primary",
      description: "Classes I-V: Building fundamental literacy, numeracy, and social skills",
    },
    {
      number: "03",
      title: "Secondary",
      description: "Classes VI-X: Comprehensive curriculum preparing for board examinations",
    },
    {
      number: "04",
      title: "Senior Secondary",
      description: "Classes XI-XII: Specialized streams in Science, Commerce, and Humanities",
    },
    {
      number: "05",
      title: "Boarding Program",
      description: "Residential education with structured study hours and character development",
    },
  ]

  return (
    <section id="academics" ref={sectionRef} className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div
          className={`mb-20 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground">
            Academic Structure
          </h2>
        </div>

        <div className="space-y-16 md:space-y-20">
          {levels.map((level, index) => (
            <div
              key={level.number}
              className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="md:col-span-2">
                <span className="text-6xl md:text-7xl font-light text-muted-foreground/40 tracking-tighter">
                  {level.number}
                </span>
              </div>

              <div className="md:col-span-10 border-t border-border pt-6">
                <h3 className="text-2xl md:text-3xl font-medium text-foreground mb-4 tracking-tight">{level.title}</h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  {level.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
