"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, Home, Award } from "lucide-react"

export default function Trust() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const badges = [
    {
      icon: Shield,
      title: "CBSE Affiliated",
      description: "Recognized by the Central Board of Secondary Education",
    },
    {
      icon: Award,
      title: "CISCE Recognized",
      description: "Council for the Indian School Certificate Examinations",
    },
    {
      icon: Home,
      title: "Boarding Facility",
      description: "Comprehensive residential care and hostel accommodation",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {badges.map((badge, index) => {
            const Icon = badge.icon
            return (
              <div
                key={badge.title}
                className={`text-center transition-all duration-700 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-accent/50">
                    <Icon className="w-7 h-7 text-foreground" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-xl font-medium text-foreground mb-3 tracking-tight">{badge.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{badge.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
