"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <div
          className={`w-full h-full transition-all duration-1500 ease-out ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <img
            src="https://placehold.co/1920x1080?text=Students+in+morning+assembly+on+school+grounds+with+clear+sky+and+school+building+in+background+documentary+style+photography"
            alt="Students in morning assembly on school grounds with clear sky and school building in background documentary style photography"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center py-32">
        <div
          className={`transition-all duration-1000 delay-300 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground mb-8 leading-[1.1]">
            Saint Xavier's
            <br />
            Senior Secondary School
          </h1>
        </div>

        <div
          className={`transition-all duration-1000 delay-500 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="space-y-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            <p className="font-light">Hindi & English Medium</p>
            <p className="font-light">Senior Secondary School</p>
            <p className="font-light">Manasar, Nagaur District, Rajasthan</p>
          </div>
        </div>

        <div
          className={`mt-12 transition-all duration-1000 delay-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-base md:text-lg text-foreground/80 max-w-3xl mx-auto font-light leading-relaxed">
            An institution committed to academic excellence, character development, and the holistic growth of every
            student entrusted to our care.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-foreground/40 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
