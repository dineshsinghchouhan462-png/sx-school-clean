"use client"

import { useEffect, useRef, useState } from "react"
import { BookOpen, Monitor, Home, Leaf, Users, Trophy } from "lucide-react"

export default function Facilities() {
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

  const facilities = [
    {
      icon: Home,
      title: "Hostel Accommodation",
      description: "Safe and comfortable boarding facility with 24/7 supervision and care",
    },
    {
      icon: BookOpen,
      title: "Library",
      description: "Well-stocked library with academic resources and reading materials",
    },
    {
      icon: Monitor,
      title: "Computer Laboratory",
      description: "Modern computer lab with internet connectivity for digital learning",
    },
    {
      icon: Leaf,
      title: "Sports Ground",
      description: "Spacious playground for physical education and sports activities",
    },
    {
      icon: Users,
      title: "Classrooms",
      description: "Well-ventilated classrooms equipped with teaching aids and resources",
    },
    {
      icon: Trophy,
      title: "Activity Spaces",
      description: "Dedicated areas for co-curricular activities and student development",
    },
  ]

  return (
    <section id="facilities" ref={sectionRef} className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`mb-20 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground">Facilities</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {facilities.map((facility, index) => {
            const Icon = facility.icon
            return (
              <div
                key={facility.title}
                className={`transition-all duration-700 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-6">
                  <Icon className="w-10 h-10 text-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-3 tracking-tight">{facility.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{facility.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
