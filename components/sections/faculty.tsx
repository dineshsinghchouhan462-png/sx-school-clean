"use client"

import { useEffect, useRef, useState } from "react"

export default function Faculty() {
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

  const faculty = [
    {
      name: "Dr. Anita Sharma",
      subject: "Principal & Educational Administration",
      image:
        "https://placehold.co/400x400?text=Professional+portrait+of+female+educator+in+formal+attire+neutral+background",
    },
    {
      name: "Rajesh Kumar",
      subject: "Mathematics & Computer Science",
      image:
        "https://placehold.co/400x400?text=Professional+portrait+of+male+teacher+in+formal+attire+neutral+background",
    },
    {
      name: "Priya Verma",
      subject: "English Language & Literature",
      image:
        "https://placehold.co/400x400?text=Professional+portrait+of+female+teacher+in+formal+attire+neutral+background",
    },
    {
      name: "Suresh Patel",
      subject: "Physics & Chemistry",
      image:
        "https://placehold.co/400x400?text=Professional+portrait+of+male+educator+in+formal+attire+neutral+background",
    },
    {
      name: "Meera Joshi",
      subject: "Hindi & Social Studies",
      image:
        "https://placehold.co/400x400?text=Professional+portrait+of+female+educator+in+formal+attire+neutral+background",
    },
    {
      name: "Vikram Singh",
      subject: "Biology & Environmental Science",
      image:
        "https://placehold.co/400x400?text=Professional+portrait+of+male+teacher+in+formal+attire+neutral+background",
    },
  ]

  return (
    <section id="faculty" ref={sectionRef} className="py-24 md:py-32 bg-accent/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`mb-20 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground">Faculty</h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Our dedicated educators bring expertise, patience, and a commitment to student success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {faculty.map((member, index) => (
            <div
              key={member.name}
              className={`group transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-6 overflow-hidden bg-muted/50">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={`Professional portrait of ${member.name}`}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2 tracking-tight">{member.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{member.subject}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
