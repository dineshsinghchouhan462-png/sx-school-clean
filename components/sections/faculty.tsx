"use client"

import { useEffect, useRef, useState } from "react"

export default function Faculty() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const points = [
    "Experienced and qualified educators across all academic streams",
    "Strong emphasis on discipline, values, and student mentorship",
    "Balanced approach to academics, co-curricular, and character building",
    "Regular training and academic planning for quality delivery",
  ]

  return (
    <section
      id="faculty"
      ref={ref}
      className="py-24 md:py-32 bg-background"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-8">
            Faculty & Teaching Approach
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-12">
            Our faculty forms the backbone of the institution. Teachers at Saint Xavier’s
            Senior Secondary School are committed to academic rigor, moral values,
            and the holistic development of every student.
          </p>

          <div className="border-t border-border pt-8 space-y-4">
            {points.map((item, index) => (
              <p
                key={index}
                className="text-base md:text-lg text-foreground/80 leading-relaxed"
              >
                — {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
