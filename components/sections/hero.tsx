"use client"

import { useEffect, useState } from "react"

const images = [
  "/images/hero/hero-1.jpg",
  "/images/hero/hero-2.jpg",
  "/images/hero/hero-3.jpg",
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 3500) // calm, premium speed

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Slides */}
      {images.map((src, index) => (
        <img
          key={src}
          src={src}
          alt="Saint Xavier's School Campus"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 text-center">
        <div className="max-w-4xl text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-tight">
            Saint Xavier&apos;s <br />
            Senior Secondary School
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/90">
            Hindi & English Medium · Manasar, Nagaur District, Rajasthan
          </p>

          <p className="mt-4 text-base md:text-lg text-white/80 font-light">
            An institution committed to academic excellence, discipline,
            and holistic student development.
          </p>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 rounded-full transition ${
              index === current ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
