"use client"

import { useState } from "react"

const images = [
  { src: "/images/gallery/gallery-1.jpg", caption: "Morning Assembly" },
  { src: "/images/gallery/gallery-2.jpg", caption: "Leadership & Achievements" },

  { src: "/images/gallery/gallery-3.jpg", caption: "Award Ceremony" },
  { src: "/images/gallery/gallery-4.jpg", caption: "Student Felicitation" },
  { src: "/images/gallery/gallery-5.jpg", caption: "Learning Environment" },
  { src: "/images/gallery/gallery-6.jpg", caption: "Activity-Based Education" },

  { src: "/images/gallery/gallery-7.jpg", caption: "Campus Life" },
  { src: "/images/gallery/gallery-8.jpg", caption: "Cultural Programs" },
  { src: "/images/gallery/gallery-9.jpg", caption: "Community Engagement" },
  { src: "/images/gallery/gallery-10.jpg", caption: "Student Participation" },
  { src: "/images/gallery/gallery-11.jpg", caption: "Celebrations & Events" },
]

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">

        {/* ===== TOP 2 BIG CINEMATIC IMAGES ===== */}
        <div className="space-y-20">
          {images.slice(0, 2).map((img, i) => (
            <div
              key={i}
              onClick={() => setActive(active === i ? null : i)}
              className="relative overflow-hidden rounded-3xl cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.caption}
                className={`w-full h-[480px] object-cover transition-transform duration-700
                  ${active === i ? "scale-[1.03]" : "scale-100"}
                `}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p
                className={`absolute bottom-8 left-8 text-white text-xl tracking-wide transition-all duration-500
                  ${active === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                `}
              >
                {img.caption}
              </p>
            </div>
          ))}
        </div>

        {/* ===== COMPACT PREMIUM GRID (NO LONG SCROLL) ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {images.slice(2).map((img, i) => {
            const index = i + 2
            return (
              <div
                key={index}
                onClick={() => setActive(active === index ? null : index)}
                className="relative overflow-hidden rounded-2xl cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className={`w-full h-[220px] object-cover transition-transform duration-700
                    ${active === index ? "scale-[1.05]" : "scale-100"}
                  `}
                />
                <div
                  className={`absolute inset-0 bg-black/40 transition-opacity duration-500
                    ${active === index ? "opacity-100" : "opacity-0"}
                  `}
                />
                <p
                  className={`absolute bottom-4 left-4 text-white text-sm transition-all duration-500
                    ${active === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
                  `}
                >
                  {img.caption}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
