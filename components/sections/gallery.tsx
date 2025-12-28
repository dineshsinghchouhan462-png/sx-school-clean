"use client"

import { useState } from "react"

const images = [
  { src: "/images/gallery/gallery-1.jpg", caption: "Morning Assembly" },
  { src: "/images/gallery/gallery-2.jpg", caption: "Leadership & Achievements" },

  { src: "/images/gallery/gallery-3.jpg", caption: "Award Ceremony" },
  { src: "/images/gallery/gallery-4.jpg", caption: "Student Felicitation" },

  { src: "/images/gallery/gallery-5.jpg", caption: "Early Learning Environment" },
  { src: "/images/gallery/gallery-6.jpg", caption: "Activity-Based Learning" },

  { src: "/images/gallery/gallery-7.jpg", caption: "Campus Life" },
  { src: "/images/gallery/gallery-8.jpg", caption: "Cultural Programs" },

  { src: "/images/gallery/gallery-9.jpg", caption: "Community Engagement" },
  { src: "/images/gallery/gallery-10.jpg", caption: "Student Participation" },

  { src: "/images/gallery/gallery-11.jpg", caption: "Celebrations & Events" },
]

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">

        {/* BIG HERO IMAGES */}
        {images.slice(0, 2).map((img, i) => (
          <div
            key={i}
            onClick={() => setActive(active === i ? null : i)}
            className="relative overflow-hidden rounded-3xl cursor-pointer group"
          >
            <img
              src={img.src}
              alt={img.caption}
              className="w-full h-[460px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <p
              className={`absolute bottom-6 left-6 text-white text-lg transition-opacity duration-500
                ${active === i ? "opacity-100" : "opacity-0"}
              `}
            >
              {img.caption}
            </p>
          </div>
        ))}

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {images.slice(2).map((img, i) => {
            const index = i + 2
            return (
              <div
                key={index}
                onClick={() => setActive(active === index ? null : index)}
                className="relative overflow-hidden rounded-2xl cursor-pointer group"
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-black/40" />
                <p
                  className={`absolute bottom-4 left-4 text-white text-sm transition-opacity duration-500
                    ${active === index ? "opacity-100" : "opacity-0"}
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
