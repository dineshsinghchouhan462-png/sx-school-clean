"use client"

import { useEffect, useRef, useState } from "react"
import { Accessibility, Heart } from "lucide-react"

export default function AccessibilitySection() {
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

  const features = [
    {
      icon: Accessibility,
      title: "Wheelchair Accessible Areas",
      description: "Ramps and accessible pathways throughout the campus",
    },
    {
      icon: Heart,
      title: "Student Amenities",
      description: "Clean toilets, drinking water facilities, and proper sanitation",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-accent/30">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div
          className={`mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground">Accessibility & Care</h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            We are committed to providing an inclusive, safe, and caring environment for all students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className={`transition-all duration-700 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="mb-6">
                  <Icon className="w-10 h-10 text-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
