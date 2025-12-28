"use client"

import { useEffect, useRef, useState } from "react"

export default function About() {
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

  return (
    <section ref={ref} className="bg-muted/30">
      {/* subtle divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="border-t border-border/60" />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-24 md:py-28">
        <div
          className={`transition-all duration-[1200ms] ease-out ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground mb-8">
            About Saint Xavier’s
          </h2>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Saint Xavier’s Senior Secondary School, Manasar, is committed to
            disciplined education, academic clarity, and character formation.
            Serving students from villages, suburbs, and nearby towns, the
            school provides a structured environment where learning is focused,
            values are respected, and responsibility is nurtured.
          </p>

          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            With Hindi and English medium instruction and residential
            facilities, the institution emphasizes consistency, safety, and
            long-term academic growth.
          </p>
        </div>
      </div>
    </section>
  )
}
