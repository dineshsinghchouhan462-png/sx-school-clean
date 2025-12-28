"use client"

import { useEffect, useState } from "react"

export default function Gallery() {
  const images = [
    "/images/gallery/gallery-1.jpg",
    "/images/gallery/gallery-2.jpg",
    "/images/gallery/gallery-3.jpg",
    "/images/gallery/gallery-4.jpg",
    "/images/gallery/gallery-5.jpg",
    "/images/gallery/gallery-6.jpg",
  ]

  return (
    <section id="gallery" className="py-24 bg-background">
      {/* Subtle divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="w-full h-px bg-border mb-16" />

        {/* Heading */}
        <div className="mb-12 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground">
            Campus Life
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            A glimpse into daily life, learning spaces, and moments that define
            Saint Xavier’s Senior Secondary School.
          </p>
        </div>

        {/* Editorial-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl group"
            >
              <img
                src={src}
                alt={`School gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
