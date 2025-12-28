"use client"

import { useEffect, useRef, useState } from "react"

export default function Streams() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const streams = [
    {
      number: "01",
      title: "Science",
      description:
        "A disciplined and structured scientific curriculum focused on analytical thinking, academic rigor, and preparation for higher education.",
    },
    {
      number: "02",
      title: "Arts",
      description:
        "Humanities-oriented education that nurtures critical reasoning, cultural awareness, and expressive intellectual development.",
    },
    {
      number: "03",
      title: "Agriculture",
      description:
        "An applied stream combining theoretical knowledge with practical understanding of agriculture, sustainability, and rural innovation.",
    },
  ]

  return (
    <section
      ref={ref}
      className="py-28 md:py-36 bg-background"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div
          className={`mb-24 transition-all duration-1000 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground">
            Academic Streams
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Clear academic pathways designed to support diverse interests, strengths,
            and future aspirations of our students.
          </p>
        </div>

        {/* Streams */}
        <div className="space-y-20">
          {streams.map((stream, index) => (
            <div
              key={stream.number}
              className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 transition-all duration-700 ease-out ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* Number */}
              <div className="md:col-span-2">
                <span className="text-6xl md:text-7xl font-light text-muted-foreground/40 tracking-tighter">
                  {stream.number}
                </span>
              </div>

              {/* Content */}
              <div className="md:col-span-10 border-t border-border pt-6">
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground mb-4">
                  {stream.title}
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  {stream.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
        }
